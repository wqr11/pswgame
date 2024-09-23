'use client';

import axios, { isAxiosError } from 'axios';
import { createEffect, createEvent, sample } from 'effector';

import { UserType, $resourcePool, $auth, PoolResourcesDataType } from '@/entities';

import { $userId, $user } from '@/entities/user';

import { BuyResourcesFromPoolParams, BuyResourcesFromPoolDataType } from './types';
import { $buyResourceAmount, $chosenResourceKey } from './inputs';

export const buyResourceFromPool = createEvent<void>();
export const buyResourceFromPoolFx = createEffect<
  BuyResourcesFromPoolParams,
  BuyResourcesFromPoolDataType['data'] | undefined,
  Error
>(async ({ access, userId, resourceKey, amount }: BuyResourcesFromPoolParams) => {
  try {
    const res: { data: BuyResourcesFromPoolDataType } = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/users/buy_resources_from_pool`,
      {
        user_id: userId,
        resource_key: resourceKey,
        amount: amount,
      },
      {
        headers: {
          'jwt-token': `${access}`,
        },
      }
    );
    return res.data?.data;
  } catch (error) {
    if (isAxiosError(error)) {
      throw new Error(error.message);
    }
  }
});

sample({
  clock: buyResourceFromPool,
  source: {
    auth: $auth,
    userId: $userId,
    amount: $buyResourceAmount,
    resourceKey: $chosenResourceKey,
  },
  filter: ({ auth, userId, amount, resourceKey }) =>
    !!auth?.access && !!userId && !!amount && !!resourceKey,
  fn: ({ auth, userId, amount, resourceKey }) =>
    ({
      access: auth?.access,
      userId: userId,
      amount: amount,
      resourceKey: resourceKey,
    }) as BuyResourcesFromPoolParams,
  target: buyResourceFromPoolFx,
});

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
