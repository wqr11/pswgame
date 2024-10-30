'use client';

import axios from 'axios';

import Cookies from 'js-cookie';

import { createStore, createEffect, sample, createEvent } from 'effector';

import { AuthDataType } from './types';

// get a pair of auth tokens
export const loginFx = createEffect<string, boolean, Error>(async (init_data: string) => {
  const accessToken = Cookies.get(`${process.env.NEXT_PUBLIC_ACCESS_TOKEN_NAME}`);
  const refreshToken = Cookies.get(`${process.env.NEXT_PUBLIC_REFRESH_TOKEN_NAME}`);

  if (accessToken && refreshToken) {
    return true;
  }

  const res: { data: AuthDataType } = await axios.post(
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

  Cookies.set(`${process.env.NEXT_PUBLIC_ACCESS_TOKEN_NAME}`, res.data.data.access_token);
  Cookies.set(`${process.env.NEXT_PUBLIC_REFRESH_TOKEN_NAME}`, res.data.data.refresh_token);

  return true;
});

export const loggedIn = createEvent<void>();

export const $isAuth = createStore<boolean>(false).on(loginFx.doneData, (_, data) => data);

// fire loggedIn event on loginFx.doneData
sample({
  clock: loginFx.doneData,
  target: loggedIn,
});
