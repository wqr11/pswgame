import { NextRequest, NextResponse } from 'next/server';

import { cookies } from 'next/headers';

// import { HOST } from './shared/config/host';

export async function middleware(req: NextRequest) {
  const headers = req.headers;
  const accessReq = req.cookies.get(`${process.env.NEXT_PUBLIC_ACCESS_TOKEN_NAME}`);
  const access = cookies().get(`${process.env.NEXT_PUBLIC_ACCESS_TOKEN_NAME}`);
  // const refreshToken = req.cookies.get(`${process.env.NEXT_PUBLIC_REFRESH_TOKEN_NAME}`);

  console.log(access, accessReq);

  if (!headers.has('jwt-token')) {
    req.headers.set('jwt-token', access?.toString() ?? '');
  }

  return NextResponse.next();

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
