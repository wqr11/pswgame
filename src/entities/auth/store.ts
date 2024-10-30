'use client';

import { createStore, createEffect, sample, createEvent } from 'effector';

import { AuthDataType } from './types';
import { login } from '@/actions/auth/login';

// get a pair of auth tokens
export const loginFx = createEffect<string, AuthDataType['data'], Error>(
  async (init_data: string) => {
    return login(init_data);
  }
);

export const loggedIn = createEvent<void>();

export const $isAuth = createStore<boolean>(false).on(
  loginFx.doneData,
  (_, data) => data.access_token.length > 0 && data.refresh_token.length > 0
);

// fire loggedIn event on loginFx.doneData
sample({
  clock: loginFx.doneData,
  target: loggedIn,
});
