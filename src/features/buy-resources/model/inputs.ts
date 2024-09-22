'use client';

import { createStore, createEvent } from 'effector';

import { ResourceType } from '@/entities';

export const setRangeInput = createEvent<number>();
export const $rangeInput = createStore<number>(0).on(setRangeInput, (_, range) => range);

export const setResourceInput = createEvent();
export const $resourceInput = createStore<ResourceType | null>(null).on(
  setResourceInput,
  (_, resource) => resource
);
