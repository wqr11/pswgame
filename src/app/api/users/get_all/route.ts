import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();

  const res = await fetch(`${process.env.API_URL}/api/v1/users/get_all`, {
    method: "POST",
    body: JSON.stringify(body),
    // @ts-ignore
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "x-api-key": process.env.SECRET_API_KEY,
    },
  });

  if (!res.ok) throw new Error("v1/users/get_all");

  const data = await res.json();

  return NextResponse.json(data);
}
