'use client';

import { authHost } from '@/shared/api/axios-hosts';
import { AxiosError, isAxiosError } from 'axios';

import { createEffect, createStore, sample, createEvent } from 'effector';

import { loggedIn, $user } from '@/entities';

import { PoolResourcesDataType } from './types';

export const getResourcePool = createEffect<
  void,
  PoolResourcesDataType['data'] | undefined,
  AxiosError
>(async () => {
  try {
    const res = await authHost.get<PoolResourcesDataType>('kingdom/pool_resources/all');

    return res.data.data;
  } catch (error) {
    if (isAxiosError(error)) {
      throw new Error(error.message);
    }
  }
});

export const resetResourcePool = createEvent<void>();

export const $resourcePool = createStore<PoolResourcesDataType['data'] | null>(null)
  .on(getResourcePool.doneData, (_, resources) => resources ?? null)
  .reset(resetResourcePool);

// get resourcePool on login
sample({
  clock: loggedIn,
  target: getResourcePool,
});

// getResourcePool on $user change (update current pool)
sample({
  clock: $user,
  target: getResourcePool,
});
