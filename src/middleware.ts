import { NextRequest, NextResponse } from 'next/server';

export async function middleware(req: NextRequest) {
  const access = req.cookies.get(
    process.env.NEXT_PUBLIC_ACCESS_TOKEN_NAME ?? 'PSWMetaAccessToken'
  )?.value;

  const reqHeaders = new Headers(req.headers);

  if (access) {
    reqHeaders.append('jwt-token', access);
  }

  reqHeaders.append('TESTTEST', 'ASDASDASDAS');

  return NextResponse.next({
    headers: reqHeaders,
  });
}

export const config = {
  matcher: ['/:path*'],
};
