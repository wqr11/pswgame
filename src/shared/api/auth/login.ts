'use server';

import { AuthDataType } from '@/shared/types';

import axios, { isAxiosError } from 'axios';
import { cookies } from 'next/headers';

export async function login(init_data: string) {
  try {
    const res = await axios.post<AuthDataType>(
      `${process.env.API_URL}/api/v1/auth/login`,
      { init_data },
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      },
    );

    cookies().set(
      `${process.env.NEXT_PUBLIC_ACCESS_TOKEN_NAME}`,
      res.data.data.access_token,
    );
    cookies().set(
      `${process.env.NEXT_PUBLIC_REFRESH_TOKEN_NAME}`,
      res.data.data.refresh_token,
    );

    return res;
  } catch (error) {
    if (isAxiosError(error)) {
      throw new Error(error.message);
    }
  }
}
