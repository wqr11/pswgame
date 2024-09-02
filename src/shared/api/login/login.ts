'use server';

import axios, { isAxiosError } from 'axios';
import { cookies } from 'next/headers';

export async function login(init_data: string) {
  try {
    const res = await axios.post(
      `${process.env.API_URL}/api/v1/auth/login`,
      { init_data },
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      },
    );

    cookies().set(`${process.env.ACCESS_TOKEN_NAME}`, res.data.access_token);
    cookies().set(`${process.env.REFRESH_TOKEN_NAME}`, res.data.resresh_token);

    console.log(cookies().getAll());

    return res;
  } catch (error) {
    if (isAxiosError(error)) {
      throw new Error(error.message);
    }
  }
}
