'use client';

import axios, { isAxiosError } from 'axios';

import { createEvent, createStore, createEffect, sample } from 'effector';
import { UserType, GetUserParams, UpdateUserParams } from './types';
import { $auth, loggedIn, logout } from '../../../auth';
import { $lastOpenedPage, LastOpenedPageType } from '../../last-opened-state';

export const setUserId = createEvent<number>();
export const $userId = createStore<number | null>(null).on(setUserId, (_, userId) => userId);

export const setUsername = createEvent<string>();
export const $username = createStore<string | null>(null);

export const getUserFx = createEffect(async ({ access, userId }: GetUserParams) => {
  try {
    const res: { data: UserType } = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/users/get/${userId}`,
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'jwt-token': `${access}`,
        },
      }
    );

    return res.data.data;
  } catch (error) {
    if (isAxiosError(error)) {
      throw new Error(error.message);
    }
  }
});

export const getUser = createEvent<void>();

export const $user = createStore<UserType['data'] | null>(null)
  .on(getUserFx.doneData, (_, user) => user ?? null)
  .reset(logout);

export const updateUserFx = createEffect<UpdateUserParams, UserType['data'] | undefined, Error>(
  async ({ access, userId, username }: UpdateUserParams) => {
    console.log(access, userId, username);
    try {
      const res: { data: UserType } = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/users/update`,
        {
          user_id: userId,
          user_name: username,
        },
        {
          headers: {
            'jwt-token': `${access}`,
          },
        }
      );
      console.log(res.data);

      return res.data.data;
    } catch (error) {
      if (isAxiosError(error)) {
        console.log('error in updateUserFx');
        throw new Error(error.message);
      }
    }
  }
);

sample({
  clock: loggedIn,
  target: getUser,
});

sample({
  clock: getUser,
  source: { auth: $auth, userId: $userId },
  filter: ({ auth, userId }) => !!auth && !!userId && !!auth?.access,
  fn: ({ auth, userId }) => ({ access: `${auth?.access}`, userId }) as GetUserParams,
  target: getUserFx,
});

sample({
  clock: $user,
  source: { auth: $auth, userId: $userId, username: $username },
  // filter: (source, user) =>
  //   !!source.auth && !!source.userId && !!source.username && user?.user_name === '',
  fn: ({ auth, userId, username }) =>
    ({
      access: auth?.access,
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
