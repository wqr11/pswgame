'use client';

import { createEvent, createStore, combine } from 'effector';
import { KingdomType } from './types';
import { $user } from '../user/user-data';

export const $kingdoms = combine($user, user => ({
  ...user?.upgrades_information,
  power: user?.upgrades_information['power plant'],
}));

export const setKingdom = createEvent<KingdomType>();
export const $kingdom = createStore<KingdomType | null>(null).on(
  setKingdom,
  (_, kingdom) => kingdom
);
