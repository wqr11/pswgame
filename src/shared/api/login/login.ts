'use server';

import axios, { isAxiosError } from 'axios';

export async function login(init_data: string) {
  // try {
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

  // update cookies

  console.log(res);

  return res;

  //   return res;
  // } catch (error) {
  //   if (isAxiosError(error)) {
  //     throw new Error(error.message);
  //   }
  // }
}
