'use client';

import axios, { isAxiosError } from 'axios';

import Cookies from 'js-cookie';

import { createStore, createEvent, createEffect, sample } from 'effector';

export const postTap = createEffect(async (user_id: number, taps: number) => {
  const access = Cookies.get(`${process.env.NEXT_PUBLIC_ACCESS_TOKEN_NAME}`);
  try {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/actions/tap`,
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
});

export const tap = createEvent<void>();

export const $tap = createStore<number>(0).on(tap, (taps) => taps + 1);

export const setCoins = createEvent<number>();

export const $coins = createStore<number>(0).on(setCoins, (_, coins) => coins);
