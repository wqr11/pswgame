import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { resources_id: string } },
) {
  const res = await axios.get(
    `${process.env.API_URL}/api/v1/kingdom/pool_resources/${params.resources_id}`,
    {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "x-admin-key": `${process.env.SECRET_ADMIN_API_KEY}`,
      },
    },
  );

  return NextResponse.json(res.data, { status: res.status });
}
