import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const body = await req.json();

  try {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/users/get_all`,
      body,
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
        { status: error.response?.status || 500 },
      );
    }
  }
}
