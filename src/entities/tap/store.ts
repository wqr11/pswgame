'use client';

import axios, { isAxiosError } from 'axios';

import { createEffect, createStore, createEvent, sample, combine } from 'effector';

import { $auth, TokensType, logout } from '../auth';
import { $userId, $user, setTokens, $tokens } from '../user';

import { TapDataType } from './types';
import { PostTapParams } from './types';

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
export const initTap = createEvent<void>();
export const postTap = createEffect(async ({ access, userId, taps }: PostTapParams) => {
  try {
    const res: { data: TapDataType } = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/actions/tap`,
      {
        user_id: userId,
        taps_amount: taps,
      },
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'jwt-token': `${access}`,
        },
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
  .reset(postTap);

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
  fn: () => setTimeout(() => initTap(), 1000),
  target: $tapTimeoutId,
});

sample({
  source: $taps,
  filter: taps => taps >= tapsChunk,
  target: initTap,
});

sample({
  clock: initTap,
  source: { auth: $auth, userId: $userId, taps: $taps },
  filter: ({ auth, userId }) => !!auth && !!userId,
  fn: ({ auth, userId, taps }: { auth: TokensType | null; userId: number | null; taps: number }) =>
    ({ access: auth?.access, userId, taps }) as PostTapParams,
  target: postTap,
});

sample({
  clock: tap,
  source: { tokens: $tokens, multiplier: $tap_multiplier },
  fn: ({ tokens, multiplier }) => tokens + 100 * multiplier,
  target: setTokens,
});

sample({
  clock: postTap.fail,
  target: logout,
});
