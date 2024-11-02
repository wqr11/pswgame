import { NextRequest, NextResponse } from 'next/server';

export async function middleware(req: NextRequest) {
  const access = req.cookies.get(process.env.NEXT_PUBLIC_ACCESS_TOKEN_NAME ?? 'PSWMetaAccessToken');

  const response = NextResponse.next();

  response.headers.append('jwt-token', access?.value ?? '');

  return response;
}

export const config = {
  matcher: ['/', '/game', '/referral'],
};
