import { NextRequest, NextResponse } from 'next/server';

import { HOST } from './shared/config/host';

export async function middleware(req: NextRequest) {
  const accessToken = req.cookies.get(
    `${process.env.NEXT_PUBLIC_ACCESS_TOKEN_NAME}`,
  );
  const refreshToken = req.cookies.get(
    `${process.env.NEXT_PUBLIC_REFRESH_TOKEN_NAME}`,
  );

  if (!accessToken || !refreshToken) {
    const response = NextResponse.redirect(new URL(`${HOST}`));
    response.cookies.delete(`${process.env.NEXT_PUBLIC_ACCESS_TOKEN_NAME}`);
    response.cookies.delete(`${process.env.NEXT_PUBLIC_REFRESH_TOKEN_NAME}`);
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/game'],
};
