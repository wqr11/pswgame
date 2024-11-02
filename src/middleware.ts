import { NextRequest, NextResponse } from 'next/server';

export async function middleware(req: NextRequest) {
  const access = req.cookies.get(process.env.NEXT_PUBLIC_ACCESS_TOKEN_NAME ?? 'PSWMetaAccessToken');

  const reqHeaders = new Headers(req.headers);

  reqHeaders.set('jwt-token', `${access}`);

  return NextResponse.next({
    request: {
      headers: reqHeaders,
    },
  });
}

export const config = {
  matcher: ['/game', '/referral'],
};
