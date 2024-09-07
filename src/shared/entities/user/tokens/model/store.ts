'use client';

import { combine, createEvent, createStore, sample } from "effector";

import { $tap_multiplier, postTap, tap } from "@/shared/entities/tap";
import { $user } from "../../user-data";

export const setTokens = createEvent<number | undefined>();

export const $initTokens = combine($user, (user) => user?.tokens_amount);

export const $tokens = createStore<number>(0)
  .on(setTokens, (state, tokens) => tokens ?? state);


sample({
  clock: $user,
  source: $initTokens,
  target: setTokens,
});

sample({
  clock: tap,
  source: { tokens: $tokens, tap_multiplier: $tap_multiplier },
  fn: ({ tokens, tap_multiplier }) => tokens + 100 * tap_multiplier,
  target: setTokens,
});

sample({
  source: postTap.doneData,
  target: setTokens,
})