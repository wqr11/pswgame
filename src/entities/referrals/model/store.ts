'use client';

import { serverApiHost } from '@/shared/api/axios-hosts';
import { AxiosError, isAxiosError } from 'axios';

import { createStore, createEffect, createEvent, sample } from 'effector';

import { RefsApiData } from './types';
import { $userId } from '../../user';

export const getRefs = createEvent<void>();

export const getRefsFx = createEffect<number, RefsApiData['data'] | undefined, AxiosError>(
  async (userId: number) => {
    const res: { data: RefsApiData } = await serverApiHost.get(`/referrals/get_referrals/${userId}`);
    return res.data.data;
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
