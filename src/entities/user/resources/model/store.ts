'use client';

import axios, { AxiosError, isAxiosError } from 'axios';

import { createEffect, createStore, sample } from 'effector';

import { UserResourcesType, GetResourcesParams } from './types';
import { $user, $userId } from '../../user-data';
import { $auth } from '@/entities';

export const getResources = createEffect<
  GetResourcesParams,
  UserResourcesType['data']['entities'] | undefined,
  AxiosError
>(async ({ access, userId }: GetResourcesParams) => {
  try {
    const res: { data: UserResourcesType } = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/users/get_resources/${userId}/-1`,
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'jwt-token': `${access}`,
        },
      }
    );

    return res.data.data.entities;
  } catch (error) {
    if (isAxiosError(error)) {
      throw new Error(error.message);
    }
  }
});

export const $resources = createStore<UserResourcesType['data']['entities'] | null>(null).on(
  getResources.doneData,
  (_, resources) => resources
);

sample({
  clock: $user,
  source: { auth: $auth, userId: $userId },
  filter: ({ auth, userId }) => !!auth && !!userId && !!auth.access,
  // @ts-ignore
  fn: ({ auth, userId }) => ({ access: auth.access, userId: userId }) as GetResourcesParams,
  target: getResources,
});
