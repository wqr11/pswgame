'use client';

import { authHost } from '@/shared/api/axios-hosts';
import { isAxiosError } from 'axios';

import { createEffect, sample, createStore } from 'effector';

import { $kingdom, KingdomType, KingdomTypeArray } from '@/entities';
import { UpdateStateType, UpdateStateProps, LastOpenedPageType } from './types';

export const updateStateFx = createEffect<
  UpdateStateProps,
  UpdateStateType['data']['state'] | undefined,
  Error
>(async ({ userId, lastActiveResource, lastOpenedPage }: UpdateStateProps) => {
  try {
    const res: { data: UpdateStateType } = await authHost.post('/users/update_state', {
      user_id: userId,
      last_active_resource: lastActiveResource,
      last_opened_page: lastOpenedPage,
    });
    return res.data.data.state;
  } catch (error) {
    if (isAxiosError(error)) {
      throw new Error(error.message);
    }
  }
});

export const $lastActiveResource = createStore<KingdomType | null>(null);
export const $lastOpenedPage = createStore<LastOpenedPageType | null>(null);

// Samples
sample({
  source: $kingdom,
  target: $lastActiveResource,
});

sample({
  source: { resource: $lastActiveResource, kingdom: $kingdom },
  filter: ({ resource, kingdom }) =>
    !!resource && KingdomTypeArray.includes(resource) && kingdom !== resource,
  fn: ({ resource }) => resource,
  target: $kingdom,
});
