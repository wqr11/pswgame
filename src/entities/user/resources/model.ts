'use client';

import { authHost } from '@/shared/api/axios-hosts';
import { isAxiosError } from 'axios';

import { createEffect, createStore, sample } from 'effector';

import { UserResourcesType, GetResourcesParams } from './types';

import { $userId } from '../tg-data';
import { $user } from '../user-data';

export const getResourcesFx = createEffect<
  GetResourcesParams,
  UserResourcesType['data']['entities'] | undefined,
  Error
>(async ({ userId }: GetResourcesParams) => {
  try {
    const res: { data: UserResourcesType } = await authHost.get(
      `users/get_resources/${userId}/all`
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

// getResources on $user change
sample({
  clock: [$user],
  source: { userId: $userId },
  filter: ({ userId }) => !!userId,
  // @ts-ignore
  fn: ({ userId }) => ({ userId: userId }) as GetResourcesParams,
  target: getResourcesFx,
});
