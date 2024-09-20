'use client';

import { createEvent, createStore, sample } from 'effector';

import { $user } from '../user';
import { $lastActiveResource } from '../user';
import { KingdomTypeArray, KingdomType } from './types';

export const setKingdom = createEvent<KingdomType>();

export const $kingdom = createStore<KingdomType | null>(null).on(
  setKingdom,
  (_, kingdom) => kingdom
);

sample({
  source: $user,
  fn: user => user?.state.last_opened_page ?? null,
  target: $kingdom,
});
sample({
  source: $lastActiveResource,
  filter: resource => !!resource && KingdomTypeArray.includes(resource),
  target: $kingdom,
});
