import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();

  const res = await axios.post(
    `${process.env.API_URL}/api/v1/auth/login`,
    body,
    {
      headers: {
        "x-api-key": `${process.env.SECRET_API_KEY}`,
      },
    },
  );

  return NextResponse.json(res);
}
