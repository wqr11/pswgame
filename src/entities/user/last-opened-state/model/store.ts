'use client';

import axios, { AxiosError, isAxiosError } from 'axios';

import { createEffect, createEvent, sample, createStore } from 'effector';

import { $userId } from '../../user-data';

import { $kingdom, KingdomType, sRedirect } from '@/entities';
import { UpdateStateType, UpdateStateProps, LastOpenedPageType } from './types';

export const updateState = createEvent<void>();

export const updateStateFx = createEffect<
  UpdateStateProps,
  UpdateStateType['data']['state'] | undefined,
  AxiosError
>(async ({ userId, lastActiveResource, lastOpenedPage }: UpdateStateProps) => {
  try {
    const res: { data: UpdateStateType } = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/users/update_state`,
      {
        user_id: userId,
        last_active_resource: lastActiveResource,
        last_opened_page: lastOpenedPage,
      }
    );
    return res.data.data.state;
  } catch (error) {
    if (isAxiosError(error)) {
      throw new Error(error.message);
    }
  }
});

export const $lastActiveResource = createStore<KingdomType | null>(null);

export const $lastOpenedPage = createStore<LastOpenedPageType | null>(null);

sample({
  clock: updateState,
  source: {
    userId: $userId,
    lastActiveResource: $lastActiveResource,
    lastOpenedPage: $lastOpenedPage,
  },
  filter: ({ userId, lastActiveResource, lastOpenedPage }) =>
    !!userId && !!lastActiveResource && !!lastOpenedPage,
  fn: ({ userId, lastActiveResource, lastOpenedPage }) => ({
    userId: userId,
    lastActiveResource: lastActiveResource,
    lastOpenedPage: lastOpenedPage,
  }),
  target: updateStateFx,
});

sample({
  source: $kingdom,
  target: $lastActiveResource,
});

sample({
  clock: sRedirect,
  target: $lastOpenedPage,
});

sample({
  clock: [$lastActiveResource, $lastOpenedPage],
  target: updateState,
});
