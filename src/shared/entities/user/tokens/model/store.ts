'use client';

import { createEvent, createStore, sample } from "effector";

import { $tap_multiplier, postTap, tap } from "@/shared/entities/tap";

export const setTokens = createEvent<number | undefined>();

export const $tokens = createStore<number>(0)
  .on(setTokens, (state, tokens) => tokens ?? state);


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