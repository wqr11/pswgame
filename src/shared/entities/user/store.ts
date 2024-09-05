'use client';

import { createEvent, createStore } from 'effector';

export const setUserId = createEvent<number>();

export const $userId = createStore<number | null>(null).on(
  setUserId,
  (_, userId) => userId,
);
