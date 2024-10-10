'use client';

import { createStore, createEffect, sample } from 'effector';

import { LeaderboardDataType, LeaderboardUnitType } from './types';
import { authHost } from '@/shared/api/axios-hosts';
import { loggedIn } from '../auth';
import { postTapFx } from '../tap';

export const getLeadersFx = createEffect(async () => {
  const res = await authHost.get<LeaderboardDataType>('/users/get_all_short');
  return res.data.data;
});

export const $leaderboard = createStore<LeaderboardUnitType[] | null>(null).on(
  getLeadersFx.doneData,
  (_, leaders) => leaders ?? null
);

sample({
  clock: [loggedIn, postTapFx.doneData],
  target: getLeadersFx,
});
