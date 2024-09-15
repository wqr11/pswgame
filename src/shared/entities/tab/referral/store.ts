'use client';

import { createEvent, createStore } from 'effector';

import { ReferralTabType } from './types';

export const setRTab = createEvent<ReferralTabType>();

export const $Rtab = createStore<ReferralTabType>('none').on(setRTab, (_, data) => data);
