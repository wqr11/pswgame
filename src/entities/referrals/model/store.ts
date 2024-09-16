'use client';

import axios, { AxiosError, isAxiosError } from 'axios';

import { createStore, createEffect, createEvent, sample } from 'effector';

import { RefsApiData } from './types';
import { $userId } from '../../user';

export const getRefs = createEvent<void>();

export const getRefsFx = createEffect<number, RefsApiData['data'] | undefined, AxiosError>(
  async (userId: number) => {
    try {
      const res: { data: RefsApiData } = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/referrals/get_referrals/${userId}`
      );

      return res.data.data;
    } catch (error) {
      if (isAxiosError(error)) {
        throw new Error(error.message);
      }
    }
  }
);

export const $refs = createStore<RefsApiData['data'] | null>(null).on(
  getRefsFx.doneData,
  (_, refs) => refs
);

sample({
  clock: getRefs,
  source: $userId,
  filter: userId => userId !== null,
  target: getRefsFx,
});
