'use server';

import axios, { isAxiosError } from 'axios';

import { cookies } from 'next/headers';

export const getUser = async (user_id: number) => {
  const access = cookies().get(`${process.env.ACCESS_TOKEN_NAME}`);

  try {
    const res = await axios.get(
      `${process.env.API_URL}/api/v1/users/${user_id}`,
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
