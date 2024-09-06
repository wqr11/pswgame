'use client';

import { createEvent, createStore, sample } from "effector";

import { postTap } from "../tap";

export const setTokens = createEvent<number | undefined>();

export const $tokens = createStore<number>(0).on(setTokens, (state, tokens) => tokens ?? state)

sample({
  source: postTap.doneData,
  target: setTokens,
})