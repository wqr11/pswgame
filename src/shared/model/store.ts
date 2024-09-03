'use client';

import { createStore, createEvent, createEffect, sample } from 'effector';

import { KingdomType, TabType } from '../types';
import { postTap } from '../api/endpoints/postTap';

export const setUserId = createEvent<number>();

export const $userId = createStore<number | null>(null).on(
  setUserId,
  (_, userId) => userId,
);

export const setTab = createEvent<TabType>();

export const $tab = createStore<TabType>('none').on(setTab, (_, data) => data);

export const setKingdom = createEvent<KingdomType>();

export const $kingdom = createStore<KingdomType | null>(null).on(
  setKingdom,
  (_, data) => data,
);

export const tap = createEvent<void>();

export const $tap = createStore<number>(0).on(tap, (taps) => taps + 1);

export const requestTap = createEffect(
  async (user_id: number, taps: number) => {
    return await postTap(user_id, taps);
  },
);

export const setCoins = createEvent<number>();

export const $coins = createStore<number>(0).on(setCoins, (_, coins) => coins);
