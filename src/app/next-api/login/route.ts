import { AuthDataType } from '@/entities';
import axios from 'axios';
import { type NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { init_data } = await req.json();

    const loginData = await axios.post<AuthDataType>(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/login`,
      { init_data },
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      }
    );

    const tokens = loginData.data.data;

    if (tokens.access_token) {
      const response = NextResponse.json(
        { message: 'Authorized' },
        {
          status: 200,
          statusText: 'Authorized',
        }
      );

      // Set cookies securely
      response.cookies.set({
        name: process.env.NEXT_PUBLIC_ACCESS_TOKEN_NAME || 'PSWMetaAccessToken',
        value: tokens.access_token,
        httpOnly: true,
        secure: true,
        maxAge: 3600, // 1 hour, adjust as needed
      });

      response.cookies.set({
        name: process.env.NEXT_PUBLIC_REFRESH_TOKEN_NAME || 'PSWMetaRefreshToken',
        value: tokens.refresh_token,
        httpOnly: true,
        secure: true,
        maxAge: 7 * 24 * 3600, // 7 days, adjust as needed
      });

      return response;
    }

    return NextResponse.json(
      { message: 'Unauthorized' },
      { status: 401, statusText: 'Unauthorized' }
    );
  } catch (error) {
    console.error('Authentication error:', error);
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: 500, statusText: 'Internal Server Error' }
    );
  }
}
