'use client';

import { authHost } from '@/shared/api/axios-hosts';
import { AxiosError, isAxiosError } from 'axios';

import { createEffect, createStore, sample } from 'effector';

import { UserResourcesType, GetResourcesParams } from './types';

import { $user, $userId } from '../user-data';

export const getResourcesFx = createEffect<
  GetResourcesParams,
  UserResourcesType['data']['entities'] | undefined,
  AxiosError
>(async ({ userId }: GetResourcesParams) => {
  try {
    const res: { data: UserResourcesType } = await authHost.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/users/get_resources/${userId}/all`
    );

    return res.data.data.entities;
  } catch (error) {
    if (isAxiosError(error)) {
      throw new Error(error.message);
    }
  }
});

export const $resources = createStore<UserResourcesType['data']['entities'] | null>(null).on(
  getResourcesFx.doneData,
  (_, resources) => resources
);

sample({
  clock: $user,
  source: { userId: $userId },
  filter: ({ userId }) => !!userId,
  // @ts-ignore
  fn: ({ userId }) => ({ userId: userId }) as GetResourcesParams,
  target: getResourcesFx,
});
