'use client';

import { authHost } from '@/shared/api/axios-hosts';
import { isAxiosError } from 'axios';
import { createEffect, createEvent, sample } from 'effector';

import { UserType, $resourcePool, PoolResourcesDataType } from '@/entities';

import { $user, $userId } from '@/entities/user';

import { BuyResourcesFromPoolParams, BuyResourcesFromPoolDataType } from './types';
import { $buyResourceAmount, $chosenResourceKey } from './inputs';

export const buyResourceFromPool = createEvent<void>();
export const buyResourceFromPoolFx = createEffect<
  BuyResourcesFromPoolParams,
  BuyResourcesFromPoolDataType['data'] | undefined,
  Error
>(async ({ userId, resourceKey, amount }: BuyResourcesFromPoolParams) => {
  try {
    const res: { data: BuyResourcesFromPoolDataType } = await authHost.post(
      `/users/buy_resources_from_pool`,
      {
        user_id: userId,
        resource_key: resourceKey,
        amount: amount,
      }
    );
    return res.data?.data;
  } catch (error) {
    if (isAxiosError(error)) {
      throw new Error(error.message);
    }
  }
});

// link buyResourceFromPool to buyResourceFromPoolFx
sample({
  clock: buyResourceFromPool,
  source: {
    userId: $userId,
    amount: $buyResourceAmount,
    resourceKey: $chosenResourceKey,
  },
  filter: ({ userId, amount, resourceKey }) => !!userId && !!amount && !!resourceKey,
  fn: ({ userId, amount, resourceKey }) =>
    ({
      userId: userId,
      amount: amount,
      resourceKey: resourceKey,
    }) as BuyResourcesFromPoolParams,
  target: buyResourceFromPoolFx,
});

// write buyResourceFromPoolFx.doneData to $user
sample({
  source: buyResourceFromPoolFx.doneData,
  filter: data => !!data,
  fn: data =>
    ({
      id: data?.id,
      user_id: data?.user_id,
      user_name: data?.user_name,
      tokens_amount: data?.tokens_amount,
      referrals_tokens_amount: data?.referrals_tokens_amount,
      resources_amount: data?.resources_amount,
      game_information: data?.game_information,
      upgrades_information: data?.upgrades_information,
      state: data?.state,
    }) as UserType['data'],
  target: $user,
});

// write buyResourceFromPoolFx.doneData to $resourcePool
sample({
  source: buyResourceFromPoolFx.doneData,
  filter: data => !!data,
  fn: data =>
    ({
      entities: data?.entities,
      shared_resources: data?.shared_resources,
      shared_total_resources: data?.shared_total_resources,
      start_reset_time: data?.start_reset_time,
      end_reset_time: data?.end_reset_time,
    }) as PoolResourcesDataType['data'],
  target: $resourcePool,
});
