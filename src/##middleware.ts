import { NextRequest, NextResponse } from "next/server";
import { updateSession } from "./shared/api/auth";

export async function middleware(req: NextRequest) {
  return await updateSession(req);
}
