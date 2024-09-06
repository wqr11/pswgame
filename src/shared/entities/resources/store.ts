'use client';

import axios, { isAxiosError } from 'axios';

import { createEffect, createStore } from 'effector';

import { PoolResourcesType } from './types';

export const getResources = createEffect(async () => {
  try {
    const res = await axios.get<PoolResourcesType>(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/kingdom/pool_resources/-1`,
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/ json',
        },
      },
    );

    return res.data.data;
  } catch (error) {
    if (isAxiosError(error)) {
      throw new Error(error.message);
    }
  }
});

export const $resources = createStore<PoolResourcesType['data'] | null>(
  null,
).on(getResources.doneData, (_, resources) => resources);