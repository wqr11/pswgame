'use client';

import { createStore, createEffect, sample } from 'effector';

import { LeaderboardDataType, LeaderboardUnitType } from './types';
import { authHost } from '@/shared/api/authHost';
import { AxiosError, isAxiosError } from 'axios';
import { loggedIn } from '../auth';

export const getLeaders = createEffect<void, LeaderboardUnitType[] | undefined, AxiosError>(async () => {
  try {
    const res: { data: LeaderboardDataType } = await authHost.post(
      '/users/get_all',
      {
        sort_by_tokens: true,
      },
    );

    return res.data.data;
  } catch (error) {
    if (isAxiosError(error)) {
      throw new Error(error.message)
    }
  }
});

export const $leaderboard = createStore<LeaderboardUnitType[] | null>(null).on(
  getLeaders.doneData,
  (_, leaders) => leaders ?? null,
);

sample({
  clock: loggedIn,
  target: getLeaders
})