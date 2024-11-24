'use client';

import { combine } from 'effector';
import { $tokens, resourcePoolModel } from '@/entities';
import { $chosenResourceKey, $buyResourceAmount } from './inputs';

export const $chosenResourceData = combine(
  resourcePoolModel.$resourcePool,
  $chosenResourceKey,
  (pool, chosenResource) => {
    const resource = !!pool && pool.entities.find(res => res.name === chosenResource);
    return resource ?? null;
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
    return data ? data.cost * amount : 0;
  }
);
