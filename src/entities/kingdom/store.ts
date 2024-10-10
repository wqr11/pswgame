'use client';

import { createEvent, createStore, sample, combine } from 'effector';
import { KingdomType, KingdomTypeArray } from './types';
import { $lastActiveResource, $user } from '../user';

export const $kingdoms = combine($user, user => ({
  ...user?.upgrades_information,
  power: user?.upgrades_information['power plant'],
}));

export const setKingdom = createEvent<KingdomType>();
export const $kingdom = createStore<KingdomType | null>(null).on(
  setKingdom,
  (_, kingdom) => kingdom
);

sample({
  source: { resource: $lastActiveResource, kingdom: $kingdom },
  filter: ({ resource, kingdom }) =>
    !!resource && KingdomTypeArray.includes(resource) && kingdom !== resource,
  fn: ({ resource }) => resource,
  target: $kingdom,
});
