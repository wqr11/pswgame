import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body: { initData: string } = await req.json();

  const res = await fetch(`${process.env.API_URL}/api/v1/auth/login`, {
    method: "POST",
    body: JSON.stringify({
      init_data: body.initData,
    }),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "x-api-key": `${process.env.SECRET_API_KEY}`,
    },
  });

  if (!res.ok) throw new Error("Error in /v1/auth/login");

  const data = await res.json();

  return NextResponse.json(data);
}
