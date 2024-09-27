'use client';

import { authHost } from '@/shared/api/axios-hosts';
import { isAxiosError } from 'axios';

import { createEffect, createStore, createEvent, sample } from 'effector';

import { logout } from '../auth';
import { $userId, $user, setTokens, $tokens } from '../user';

import { TapDataType } from './types';
import { postTapFxParams } from './types';

import { tapsChunk } from '@/shared/config/tap';

export const clearTimeoutId = createEffect<NodeJS.Timeout | null, void, Error>(
  (timeout: NodeJS.Timeout | null) => {
    if (timeout) {
      clearTimeout(timeout);
    }
  }
);
export const $tapTimeoutId = createStore<NodeJS.Timeout | null>(null).reset(clearTimeoutId);

export const tap = createEvent<void>();
export const postTap = createEvent<void>();
export const postTapFx = createEffect(async ({ userId, taps }: postTapFxParams) => {
  try {
    const res: { data: TapDataType } = await authHost.post(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/actions/tap`,
      {
        user_id: userId,
        taps_amount: taps,
      }
    );

    return res.data.data.tokens_amount;
  } catch (error) {
    if (isAxiosError(error)) {
      throw new Error(error.message);
    }
  }
});

export const $taps = createStore<number>(0)
  .on(tap, taps => taps + 1)
  .reset(postTapFx);

export const $tap_multiplier = createStore<number>(1);

sample({
  source: $user,
  filter: user => !!user?.game_information.tap_multiplier,
  // @ts-ignore
  fn: user => user.game_information.tap_multiplier,
  target: $tap_multiplier,
});

sample({
  clock: tap,
  source: $tapTimeoutId,
  target: clearTimeoutId,
});

sample({
  clock: tap,
  fn: () => setTimeout(() => postTap(), 1000),
  target: $tapTimeoutId,
});

sample({
  source: $taps,
  filter: taps => taps >= tapsChunk,
  target: postTap,
});

sample({
  clock: postTap,
  source: { userId: $userId, taps: $taps },
  filter: ({ userId }) => !!userId,
  fn: ({ userId, taps }: { userId: number | null; taps: number }) =>
    ({ userId, taps }) as postTapFxParams,
  target: postTapFx,
});

sample({
  clock: tap,
  source: { tokens: $tokens, multiplier: $tap_multiplier },
  fn: ({ tokens, multiplier }) => tokens + 100 * multiplier,
  target: setTokens,
});

sample({
  clock: postTapFx.fail,
  target: logout,
});
