'use client';

import axios, { AxiosError, isAxiosError } from 'axios';

import { createEffect, createStore, sample, createEvent } from 'effector';

import { PoolResourcesType } from './types';
import { loggedIn } from '../auth';

export const getResourcePool = createEffect<
  void,
  PoolResourcesType['data'] | undefined,
  AxiosError
>(async () => {
  try {
    const res = await axios.get<PoolResourcesType>(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/kingdom/pool_resources/all`,
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/ json',
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

export const resetResourcePool = createEvent<void>();

export const $resourcePool = createStore<PoolResourcesType['data'] | null>(null)
  .on(getResourcePool.doneData, (_, resources) => resources ?? null)
  .reset(resetResourcePool);

sample({
  clock: loggedIn,
  target: getResourcePool,
});
