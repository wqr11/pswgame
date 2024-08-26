import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body: { initDataRaw: string } = await req.json();

  console.log(body.initDataRaw);

  const res = await axios.post(
    `${process.env.API_URL}/api/v1/auth/login`,
    JSON.stringify({
      init_data: body.initDataRaw,
    }),
    {
      headers: {
        "x-api-key": `${process.env.SECRET_API_KEY}`,
      },
    },
  );

  return NextResponse.json(res);
}
