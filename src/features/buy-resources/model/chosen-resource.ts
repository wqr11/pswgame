'use client';

import { combine } from 'effector';
import { $resourcePool } from '@/entities';
import { $chosenResourceKey } from './inputs';

export const $chosenResourceData = combine(
  $resourcePool,
  $chosenResourceKey,
  (pool, resource) =>
    pool?.entities.map(entity => {
      if (entity.name === resource) {
        return entity;
      }
    })[0]
);
