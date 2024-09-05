'use client';

import { createEvent, createStore, sample } from "effector";

import { postTap } from "../tap";

export const setTokens = createEvent<number>();

export const $tokens = createStore<number>(0).on(setTokens, (_, tokens) => tokens)

sample({
  source: postTap,
  target: setTokens,
})