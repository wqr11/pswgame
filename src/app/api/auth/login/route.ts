import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();

  const res = await axios.post(
    `${process.env.API_URL}/api/v1/auth/login`,
    body,
    {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "x-api-key": `${process.env.SECRET_X_API_KEY}`,
      },
    },
  );

  console.log(res)

  return NextResponse.json(res.data, { status: res.status });
}