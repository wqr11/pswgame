import { createStore, createEffect } from 'effector';

import { LeaderboardDataType, LeaderboardUnitType } from './types';
import { authHost } from '@/shared/api/authHost';

export const getLeaders = createEffect(async () => {
  try {
    const res: { data: LeaderboardDataType } = await authHost.post(
      '/users/get_all',
      {
        sort_by_tokens: true,
      },
    );

    return res.data.data;
  } catch {
    return null;
  }
});

export const $leaderboard = createStore<LeaderboardUnitType[] | null>(null).on(
  getLeaders.doneData,
  (_, leaders) => leaders,
);
