import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();

  return NextResponse.json(
    await axios.post(`${process.env.API_URL}/api/v1/users/get_all`, body, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "x-api-key": `${process.env.SECRET_API_KEY}`,
      },
    }),
  );
}
