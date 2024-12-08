'use client';

import { serverApiHost } from '@/shared/api/axios-hosts';
import { isAxiosError } from 'axios';

import { createEffect, createStore, createEvent, sample } from 'effector';

// import { logout } from '../auth';

import { $userId } from '../user/tg-data';
import { $tokens, setTokens } from '../user/tokens';
import { $user, getResourcesFx, GetResourcesParams } from '../user';
import { $kingdom, kingdomToResource } from '../kingdom';

import { TapDataType } from './types';
import { PostTapParams } from './types';

import { tapsChunk } from '@/shared/config/tap';

export const clearTimeoutIdFx = createEffect<NodeJS.Timeout | null, void, Error>(
  (timeout: NodeJS.Timeout | null) => {
    if (timeout) {
      clearTimeout(timeout);
    }
  }
);
export const $tapTimeoutId = createStore<NodeJS.Timeout | null>(null).reset(clearTimeoutIdFx);

export const tap = createEvent<void>();
export const postTap = createEvent<void>();
export const postTapFx = createEffect(async ({ taps, resourcesId }: PostTapParams) => {
  try {
    const res: { data: TapDataType } = await serverApiHost.post('/actions/tap', {
      resources_key: resourcesId,
      taps_amount: taps,
    });

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

// get tap_multiplier from $user
sample({
  source: $user,
  filter: user => !!user?.game_information.tap_multiplier,
  // @ts-ignore
  fn: user => user.game_information.tap_multiplier,
  target: $tap_multiplier,
});

// ### TAP TIMEOUT ###

// clear prev timeout on tap
sample({
  clock: tap,
  source: $tapTimeoutId,
  target: clearTimeoutIdFx,
});

// set timeout on tap, write id in $tapTimeoutId
sample({
  clock: tap,
  fn: () => setTimeout(postTap, 500),
  target: $tapTimeoutId,
});

// ###

// link postTap to postTapFx
sample({
  clock: postTap,
  source: { userId: $userId, taps: $taps, kingdom: $kingdom },
  filter: ({ userId, kingdom }) => !!userId && !!kingdom,
  fn: ({ userId, taps, kingdom }) =>
    // @ts-ignore
    ({ userId, taps, resourcesId: kingdomToResource[kingdom] }) as postTapFxParams,
  target: postTapFx,
});

// fire postTap if $taps exceeds tapsChunk
sample({
  source: $taps,
  filter: taps => taps >= tapsChunk,
  target: postTap,
});

// set tokens from tap
sample({
  clock: tap,
  source: { tokens: $tokens, multiplier: $tap_multiplier },
  fn: ({ tokens, multiplier }) => tokens + 100 * multiplier,
  target: setTokens,
});

sample({
  clock: postTapFx.doneData,
  source: { userId: $userId },
  filter: ({ userId }) => !!userId,
  fn: ({ userId }) => ({ userId: userId }) as GetResourcesParams,
  target: getResourcesFx,
});

// logout on postTap.fail
// sample({
//   clock: postTapFx.fail,
//   target: logout,
// });
