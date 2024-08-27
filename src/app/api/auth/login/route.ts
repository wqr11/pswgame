import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();

  try {
    const res = axios.post(`${process.env.API_URL}/api/v1/auth/login`, body, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "x-api-key": `${process.env.SECRET_API_KEY}`,
      },
    });

    return NextResponse.json(res, { status: (await res).status });
  } catch (err: any) {
    return NextResponse.json(
      { error: err.message },
      { statusText: err.message, status: 502 },
    );
  }
}
