import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  req: NextRequest,
  { params }: { params: { resources_id: string } },
) {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/kingdom/pool_resources/${params.resources_id}`,
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'x-api-key': `${process.env.SECRET_X_API_KEY}`,
        },
      },
    );

    return NextResponse.json(res.data, { status: res.status });
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return NextResponse.json(
        { error: error.message },
        { status: error.response?.status },
      );
    }
  }
}
