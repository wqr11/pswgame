'use client';

import axios, { isAxiosError } from 'axios';

import { createEffect, createEvent, sample, createStore } from 'effector';

import {
  $kingdom,
  KingdomType,
  KingdomTypeArray,
  $user,
  updateUserFx,
  $userId,
  $auth,
} from '@/entities';
import { UpdateStateType, UpdateStateProps, LastOpenedPageType } from './types';

export const updateState = createEvent<void>();

export const updateStateFx = createEffect<
  UpdateStateProps,
  UpdateStateType['data']['state'] | undefined,
  Error
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

export const usernameRedirectFx = createEffect<void, void, Error>(user => {
  window.location.href = '/create-username';
});

export const lastPageRedirectFx = createEffect<LastOpenedPageType | null, void, Error>(
  (lastOpenedPage: LastOpenedPageType | null) => {
    window.location.href = `/${lastOpenedPage ?? 'game'}`;
  }
);

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
  source: $lastActiveResource,
  filter: resource => !!resource && KingdomTypeArray.includes(resource),
  target: $kingdom,
});

sample({
  clock: [$lastActiveResource, $lastOpenedPage],
  target: updateState,
});

sample({
  clock: $user,
  source: { user: $user, lastOpenedPage: $lastOpenedPage, auth: $auth },
  filter: ({ user, auth }) => !!user && user.user_name === '' && !!auth && !!auth?.access,
  fn: ({ user, lastOpenedPage }) => ({
    user: user,
    lastOpenedPage: lastOpenedPage,
  }),
  target: usernameRedirectFx,
});

sample({
  clock: updateUserFx.doneData,
  source: $lastOpenedPage,
  target: lastPageRedirectFx,
});
