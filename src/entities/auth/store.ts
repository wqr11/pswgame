'use client';

import axios, { isAxiosError } from 'axios';

import Cookies from 'js-cookie';

import { createStore, createEffect, sample, createEvent } from 'effector';

import { AuthDataType, TokensType } from './types';

// get a pair of auth tokens
export const login = createEffect<string, boolean>(async (init_data: string) => {
  const access = Cookies.get(`${process.env.NEXT_PUBLIC_ACCESS_TOKEN_NAME}`);
  const refresh = Cookies.get(`${process.env.NEXT_PUBLIC_REFRESH_TOKEN_NAME}`);

  if (!!access && !!refresh) {
    return true;
  }

  try {
    const res: { data: AuthDataType } = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/login`,
      {
        init_data: init_data,
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
  } catch (error) {
    if (isAxiosError(error)) {
      console.error(error.message);
    }
    return false;
  }
});

export const loggedIn = createEvent<void>();

export const $isAuth = createStore<boolean>(false).on(login.doneData, (_, auth) => auth);

// fire loggedIn event on login.doneData
sample({
  clock: login.doneData,
  target: loggedIn,
});
