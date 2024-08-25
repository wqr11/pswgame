import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body: { initData: string } = await req.json();

  const res = await fetch(`https://game.powerswap.io/api/v1/auth/login`, {
    method: "POST",
    body: JSON.stringify({
      init_data: body.initData,
    }),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "x-api-key": `${process.env.SECRET_API_KEY}`,
    },
    cache: "no-store",
  });

  console.log(
    JSON.stringify({
      init_data: body.initData,
    }),
  );

  if (!res.ok) throw new Error("Error in /v1/auth/login");

  const data = await res.json();

  return NextResponse.json(data);
}
