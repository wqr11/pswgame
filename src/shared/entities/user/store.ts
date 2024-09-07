'use client';

import axios, { isAxiosError } from 'axios';

import { createEvent, createStore, createEffect, sample } from 'effector';
import { UserType } from './types';
import { $auth, loggedIn, logout, TokensType } from '../auth';

export const setUserId = createEvent<number>();

export const $userId = createStore<number | null>(null).on(
  setUserId,
  (_, userId) => userId,
);

export const getUserFx = createEffect(async ({ auth, userId }: { auth: TokensType | null; userId: number | null }) => {
  try {

    const res: { data: UserType } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/users/${userId}`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'jwt-token': `${auth?.access}`
      }
    });

    return res.data.data;

  } catch (error) {
    if (isAxiosError(error)) {
      throw new Error(error.message)
    }
  }
});

export const getUser = createEvent<void>();

export const $user = createStore<UserType['data'] | null>(null)
  .on(getUserFx.doneData, (_, user) => user)
  .reset(logout);

sample({
  clock: loggedIn,
  target: getUser,
});

sample({
  clock: getUser,
  source: { auth: $auth, userId: $userId },
  filter: ({ auth, userId }: { auth: TokensType | null; userId: number | null }) => !!auth && !!userId,
  fn: ({ auth, userId }: { auth: TokensType | null; userId: number | null }) => ({ auth, userId }),
  target: getUserFx,
})