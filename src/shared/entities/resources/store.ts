'use client';

import { createEvent, createStore } from 'effector';

import { PoolResourcesType } from './types';

// for debug
export const setResources = createEvent<PoolResourcesType>();

export const $resources = createStore<PoolResourcesType | null>(null).on(
  setResources,
  (_, resources) => resources,
);
