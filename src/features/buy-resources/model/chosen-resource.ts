'use client';

import { combine } from 'effector';
import { $tokens, resourcePoolModel } from '@/entities';
import { $chosenResourceKey, $buyResourceAmount } from './inputs';

export const $chosenResourceData = combine(
  resourcePoolModel.$resourcePool,
  $chosenResourceKey,
  (pool, chosenResource) => {
    if (pool) {
      const resource = pool.entities.filter(res => res.name === chosenResource);
      if (!!resource[0]) {
        return resource[0];
      }
      throw new Error(`ERROR In ChosenResourceData: ${resource}`);
    }
    return null;
  }
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
