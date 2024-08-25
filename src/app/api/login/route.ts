import { NextRequest, NextResponse } from "next/server";

import { login } from "@/shared/api/auth";

export async function POST(req: NextRequest) {
  const body = await req.json();

  await login(body);

  return NextResponse.json({ status: "ok" });
}
