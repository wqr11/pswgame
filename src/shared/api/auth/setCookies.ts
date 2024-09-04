'use server';

import { cookies } from 'next/headers';

export async function setCookies(accessToken: string, refreshToken: string) {
  cookies().set(`${process.env.NEXT_PUBLIC_ACCESS_TOKEN_NAME}`, accessToken, {
    httpOnly: true,
  });
  cookies().set(`${process.env.NEXT_PUBLIC_REFRESH_TOKEN_NAME}`, refreshToken, {
    httpOnly: true,
  });
}
