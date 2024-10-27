'use client';

import axios, { isAxiosError } from 'axios';

import Cookies from 'js-cookie';

import { createStore, createEffect, sample, createEvent } from 'effector';

import { AuthDataType, TokensType } from './types';

// get a pair of auth tokens
export const loginFx = createEffect<string, boolean, Error>(async (init_data: string) => {
  const accessToken = Cookies.get(`${process.env.NEXT_PUBLIC_ACCESS_TOKEN_NAME}`);
  const refreshToken = Cookies.get(`${process.env.NEXT_PUBLIC_REFRESH_TOKEN_NAME}`);

  if (accessToken && refreshToken) {
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

    Cookies.set(`${process.env.NEXT_PUBLIC_ACCESS_TOKEN_NAME}`, res.data.data.access_token, {
      expires: 86400,
    });
    Cookies.set(`${process.env.NEXT_PUBLIC_REFRESH_TOKEN_NAME}`, res.data.data.refresh_token, {
      expires: 86400,
    });

    return true;
  } catch (error) {
    if (isAxiosError(error)) {
      throw new Error(error.message);
    }
    throw new Error('Unpredicted error in loginFx');
  }
});

export const loggedIn = createEvent<void>();

export const $isAuth = createStore<boolean>(false).on(loginFx.doneData, (_, data) => data);

// fire loggedIn event on loginFx.doneData
sample({
  clock: loginFx.doneData,
  target: loggedIn,
});
