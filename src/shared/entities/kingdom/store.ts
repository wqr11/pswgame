'use client';

import { createStore } from 'effector';

import { KingdomType } from './types';

export const $kingdom = createStore<KingdomType | null>(null);
