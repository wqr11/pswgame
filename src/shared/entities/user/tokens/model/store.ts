'use client';

import { createEvent, createStore, sample } from 'effector';

import { $user } from '../../user-data';

export const setTokens = createEvent<number | undefined>();

export const $tokens = createStore<number>(0).on(setTokens, (state, tokens) => tokens ?? state);

sample({
  source: $user,
  fn: user => user?.tokens_amount,
  filter: user => !!user?.tokens_amount,
  target: setTokens,
});
