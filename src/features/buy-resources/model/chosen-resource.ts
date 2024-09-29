'use client';

import { combine } from 'effector';
import { $tokens, resourcePoolModel } from '@/entities';
import { $chosenResourceKey, $buyResourceAmount } from './inputs';

export const $chosenResourceData = combine(
  resourcePoolModel.$resourcePool,
  $chosenResourceKey,
  (pool, chosenResource) => {
    // change this
    console.log(pool);
    //
    const resource = pool?.entities.map(entity => {
      if (entity.name === chosenResource) {
        return entity;
      }
    });
    console.log(resource);
    if (resource) {
      return resource[0];
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
