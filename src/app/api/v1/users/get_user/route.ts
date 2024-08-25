import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const body: { userId: number } = await req.json();

  const res = await fetch(`${process.env.API_URL}/api/v1/users${body.userId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "x-api-key": `${process.env.SECRET_API_KEY}`,
    },
  });

  if (!res.ok) throw new Error("Error in /v1/users/get_user");

  return await res.json();
}
