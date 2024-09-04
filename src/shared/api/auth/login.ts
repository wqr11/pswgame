import { AuthDataType } from '@/shared/types';

import axios, { isAxiosError } from 'axios';

import Cookies from 'js-cookie';

export async function login(init_data: string) {
  try {
    const res = await axios.post<AuthDataType>(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/login`,
      { init_data },
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      },
    );

    Cookies.set(
      `${process.env.NEXT_PUBLIC_ACCESS_TOKEN_NAME}`,
      res.data.data.access_token,
    );
    Cookies.set(
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
