'use client';

import { createEvent, createStore } from 'effector';

export const setTokens = createEvent<TokensType>();

export const $tokens = createStore<{
  access: string;
  refresh: string;
} | null>(null).on(setTokens, (_, tokens) => tokens);
