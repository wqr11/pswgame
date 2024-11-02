import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get(
    process.env.NEXT_PUBLIC_ACCESS_TOKEN_NAME ?? 'PSWMetaAccessToken'
  );

  // Clone the request headers
  const requestHeaders = new Headers(request.headers);

  // Set the jwt-token header if the cookie exists
  if (token) {
    requestHeaders.set('jwt-token', token.value);
  }

  // Return the response with the modified headers
  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  matcher: '/:path*',
};
