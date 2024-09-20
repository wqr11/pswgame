'use client';

import { createEvent, createStore, sample } from 'effector';

import { $lastActiveResource } from '../user';
import { KingdomTypeArray, KingdomType } from './types';

export const setKingdom = createEvent<KingdomType>();

export const $kingdom = createStore<KingdomType | null>(null).on(
  setKingdom,
  (_, kingdom) => kingdom
);

sample({
  source: $lastActiveResource,
  filter: resource => !!resource && KingdomTypeArray.includes(resource),
  target: $kingdom,
});
