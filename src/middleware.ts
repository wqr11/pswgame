import { NextRequest, NextResponse } from 'next/server';

import { cookies } from 'next/headers';

import { HOST } from './shared/config/host';

export async function middleware(req: NextRequest) {
  const headers = req.headers;
  const access = cookies().get(`${process.env.NEXT_PUBLIC_ACCESS_TOKEN_NAME}`);
  // const refreshToken = req.cookies.get(`${process.env.NEXT_PUBLIC_REFRESH_TOKEN_NAME}`);

  console.log(access);

  if (!headers.has('jwt-token') && access) {
    req.headers.set('jwt-token', access?.toString() ?? '');

    return NextResponse.next();
  } else {
    return NextResponse.redirect(new URL(`${HOST}`));
  }

  // if (!accessToken || !refreshToken) {
  //   const response = NextResponse.redirect(new URL(`${HOST}`));
  //   response.cookies.delete(`${process.env.NEXT_PUBLIC_ACCESS_TOKEN_NAME}`);
  //   response.cookies.delete(`${process.env.NEXT_PUBLIC_REFRESH_TOKEN_NAME}`);
  //   return response;
  // }
}

export const config = {
  matcher: ['/game', '/referral'],
};
