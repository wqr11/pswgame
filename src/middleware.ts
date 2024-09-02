import { NextRequest, NextResponse } from "next/server";

import { HOST } from "./shared/config/host";

export async function middleware(req: NextRequest) {
  const accessToken = req.cookies.get(`${process.env.ACCESS_TOKEN_NAME}`);
  const refreshToken = req.cookies.get(`${process.env.REFRESH_TOKEN_NAME}`);

  if (!accessToken || !refreshToken) {
    const response = NextResponse.redirect(new URL(`${HOST}`));
    response.cookies.delete(`${process.env.ACCESS_TOKEN_NAME}`);
    response.cookies.delete(`${process.env.REFRESH_TOKEN_NAME}`);
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/miner', '/power', '/grower', '/trader']
}