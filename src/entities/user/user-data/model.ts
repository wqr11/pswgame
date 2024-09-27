'use client';

import { authHost } from '@/shared/api/axios-hosts';
import { isAxiosError } from 'axios';

import { createEvent, createStore, createEffect, sample } from 'effector';

import { loggedIn, logout } from '@/entities';

import { UserType, GetUserParams, UpdateUserParams } from './types';

export const setUserId = createEvent<number>();
export const $userId = createStore<number | null>(null).on(setUserId, (_, userId) => userId);

export const setUsername = createEvent<string>();
export const $username = createStore<string | null>(null).on(setUsername, (_, name) => name);

export const getUser = createEvent<void>();
export const getUserFx = createEffect(async ({ userId }: GetUserParams) => {
  try {
    const res: { data: UserType } = await authHost.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/users/get/${userId}`
    );

    return res.data.data;
  } catch (error) {
    if (isAxiosError(error)) {
      throw new Error(error.message);
    }
  }
});

export const updateUserFx = createEffect<UpdateUserParams, UserType['data'] | undefined, Error>(
  async ({ userId, username }: UpdateUserParams) => {
    try {
      const res: { data: UserType } = await authHost.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/users/update`,
        {
          user_id: userId,
          user_name: username,
        }
      );
      return res.data.data;
    } catch (error) {
      if (isAxiosError(error)) {
        throw new Error(error.message);
      }
    }
  }
);

export const $user = createStore<UserType['data'] | null>(null)
  .on(getUserFx.doneData, (_, user) => user ?? null)
  .reset(logout);

export const setTokens = createEvent<number | undefined>();
export const $tokens = createStore<number>(0).on(setTokens, (state, tokens) => tokens ?? state);

// Samples
sample({
  clock: loggedIn,
  target: getUser,
});

sample({
  clock: getUser,
  source: { userId: $userId },
  filter: ({ userId }) => !!userId,
  fn: ({ userId }) => ({ userId }) as GetUserParams,
  target: getUserFx,
});

sample({
  clock: $user,
  source: { userId: $userId, username: $username },
  filter: (source, user) =>
    !!source.userId &&
    !!source.username &&
    (user?.user_name === '' || user?.user_name === 'Unknown'),
  fn: ({ userId, username }) =>
    ({
      userId: userId,
      username: username,
    }) as UpdateUserParams,
  target: updateUserFx,
});

sample({
  source: updateUserFx.doneData,
  filter: userData => !!userData,
  target: $user,
});

sample({
  source: $user,
  fn: user => user?.tokens_amount,
  filter: user => !!user?.tokens_amount,
  target: setTokens,
});
