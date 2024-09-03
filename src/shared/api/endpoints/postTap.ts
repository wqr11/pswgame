'use server';

import axios, { isAxiosError } from 'axios';

import { cookies } from 'next/headers';

export const postTap = async (user_id: number, taps: number) => {
  const access = cookies().get(`${process.env.ACCESS_TOKEN_NAME}`);

  try {
    const res = await axios.post(
      `${process.env.API_URL}/api/v1/actions/tap`,
      {
        user_id: user_id,
        taps_amount: taps,
      },
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'jwt-token': `${access}`,
        },
      },
    );

    console.log(res.data);

    return res;
  } catch (error) {
    if (isAxiosError(error)) {
      throw new Error(error.message);
    }
  }
};
