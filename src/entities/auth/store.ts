'use client';

import { createStore, createEffect, sample, createEvent } from 'effector';
import { nextApiHost } from '@/shared/api/axios-hosts';

export const loginFx = createEffect<string, boolean, Error>(async (init_data: string) => {
  const res = await nextApiHost.post('login', { init_data });
  return res.status === 200;
});

export const loggedIn = createEvent<void>();

export const $isAuth = createStore<boolean>(false).on(loginFx.doneData, (_, value) => value);

// fire loggedIn event on loginFx.doneData
sample({
  clock: loginFx.doneData,
  target: loggedIn,
});
