'use client';

import { authHost } from '@/shared/api/axios-hosts';
import { isAxiosError } from 'axios';

import { createStore, createEvent, createEffect, sample } from 'effector';

import { loggedIn } from '@/entities';

import { $userId, $username } from '../tg-data';
import { setTokens } from '../tokens';

import { UserType, GetUserParams, UpdateUserParams } from './types';

export const getUser = createEvent<void>();
export const getUserFx = createEffect(async ({ userId }: GetUserParams) => {
  try {
    const res: { data: UserType } = await authHost.get(`/users/get/${userId}`);

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
      const res: { data: UserType } = await authHost.post(`/users/update`, {
        user_id: userId,
        user_name: username,
      });
      return res.data.data;
    } catch (error) {
      if (isAxiosError(error)) {
        throw new Error(error.message);
      }
    }
  }
);

export const $user = createStore<UserType['data'] | null>(null).on(
  getUserFx.doneData,
  (_, user) => user ?? null
);
// .reset(logout);

// Samples

// getUser on login
sample({
  clock: loggedIn,
  target: getUser,
});

// link getUser to getUserFx
sample({
  clock: getUser,
  source: { userId: $userId },
  filter: ({ userId }) => !!userId,
  fn: ({ userId }) => ({ userId }) as GetUserParams,
  target: getUserFx,
});

// update username in case of it's absence
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

// write updateUserFx.doneData to $user
sample({
  source: updateUserFx.doneData,
  filter: userData => !!userData,
  target: $user,
});

// write $tokens on $user change
sample({
  source: $user,
  fn: user => user?.tokens_amount,
  filter: user => !!user?.tokens_amount,
  target: setTokens,
});
