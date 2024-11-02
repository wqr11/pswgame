import { AuthDataType } from '@/entities';
import axios from 'axios';
import { cookies, headers } from 'next/headers';
import { type NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { init_data } = await req.json();

  const loginData = await axios.post<AuthDataType>(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/login`,
    {
      init_data,
    },
    {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    }
  );

  const tokens = loginData.data.data;

  const cookieStore = cookies();
  const headerStore = headers();

  cookieStore.set({
    name: `${process.env.NEXT_PUBLIC_ACCESS_TOKEN_NAME}`,
    value: tokens.access_token,
    sameSite: 'none',
    secure: true,
  });

  cookieStore.set({
    name: `${process.env.NEXT_PUBLIC_REFRESH_TOKEN_NAME}`,
    value: tokens.access_token,
    sameSite: 'none',
    secure: true,
  });

  headerStore.append('jwt-token', `${tokens.access_token}`);

  headerStore.append(
    'Set-Cookie',
    `token=${cookieStore.get(`${process.env.NEXT_PUBLIC_ACCESS_TOKEN_NAME}`)}`
  );

  headerStore.append(
    'Set-Cookie',
    `token=${cookieStore.get(`${process.env.NEXT_PUBLIC_REFRESH_TOKEN_NAME}`)}`
  );

  if (loginData.data.data.access_token) {
    return new NextResponse('Authorized', {
      headers: headerStore,
      status: 200,
    });
  }

  return new NextResponse('Unauthorized', {
    status: 401,
  });
}
