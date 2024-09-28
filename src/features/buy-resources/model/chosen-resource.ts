'use client';

import { combine } from 'effector';
import { $tokens, resourcePoolModel } from '@/entities';
import { $chosenResourceKey, $buyResourceAmount } from './inputs';

export const $chosenResourceData = combine(
  resourcePoolModel.$resourcePool,
  $chosenResourceKey,
  (pool, resource) =>
    pool?.entities.map(entity => {
      if (entity.name === resource) {
        return entity;
      }
    })[0]
);

export const $chosenResourceBuyMax = combine($chosenResourceData, $tokens, (data, tokens) => {
  if (data) {
    return Math.floor(tokens / data.cost);
  }
  return 0;
});

export const $chosenResourceTotalPrice = combine(
  $chosenResourceData,
  $buyResourceAmount,
  (data, amount) => {
    if (data) return data.cost * amount;
  }
);
