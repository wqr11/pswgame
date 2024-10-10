'use client';

import { authHost } from '@/shared/api/axios-hosts';
import { createEffect, createStore, sample } from 'effector';

import { UserResourcesType, GetResourcesParams } from './types';

import { $userId } from '../tg-data';
import { $user } from '../user-data';

export const getResourcesFx = createEffect<
  GetResourcesParams,
  UserResourcesType['data']['entities'] | undefined,
  Error
>(async ({ userId }: GetResourcesParams) => {
  const res: { data: UserResourcesType } = await authHost.get(`users/get_resources/${userId}/all`);
  return res.data.data.entities;
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
  fn: ({ userId }) => ({ userId: userId }) as GetResourcesParams,
  target: getResourcesFx,
});

// ANOTHER ONE SAMPLE WRITTEN IN TAP STORE
