'use client';

import { createEvent, createStore } from 'effector';
import { KingdomType } from './types';

export const setKingdom = createEvent<KingdomType>();

export const $kingdom = createStore<KingdomType>('miner').on(setKingdom, (_, kingdom) => kingdom);
