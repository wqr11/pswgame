import axios from 'axios';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  req: NextRequest,
  { params }: { params: { user_id: string; resources_id: string } },
) {
  const jwtToken = `${cookies().get(`${process.env.NEXT_PUBLIC_ACCESS_TOKEN_NAME}`)}`;

  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/users/get_resources/${params.user_id}/${params.resources_id}`,
    {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'jwt-token': jwtToken,
      },
    },
  );

  return NextResponse.json(res.data, { status: res.status });
}
