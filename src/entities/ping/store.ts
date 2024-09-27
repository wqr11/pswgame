'use client';

import { authHost } from '@/shared/api/axios-hosts';
import { isAxiosError, AxiosError } from 'axios';

import { createEffect, createStore, sample } from 'effector';

import { loggedIn, logout } from '../auth';
import { PingDataType } from './types';

export const ping = createEffect<void, PingDataType['data'] | undefined, AxiosError>(async () => {
  try {
    const res: { data: PingDataType } = await authHost.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/users/ping`
    );

    return res.data.data;
  } catch (error) {
    if (isAxiosError(error)) {
      switch (error.status) {
        case 401:
          logout();
          break;
        default:
          throw new Error(error.message);
      }
    }
  }
});

export const startPingInterval = createEffect<void, NodeJS.Timeout, Error>(() => {
  ping();
  return setInterval(() => {
    ping();
  }, 180000); // 180 секунд
});

export const stopPingInterval = createEffect<NodeJS.Timeout, void, Error>(
  (intervalId: NodeJS.Timeout) => {
    clearInterval(intervalId);
  }
);

export const $pingIntervalId = createStore<NodeJS.Timeout | null>(null)
  .on(startPingInterval.doneData, (_, intervalId) => intervalId)
  .reset(stopPingInterval.done)
  .reset(logout);

sample({
  clock: loggedIn,
  //@ts-ignore
  target: startPingInterval,
});

sample({
  clock: logout,
  source: $pingIntervalId,
  filter: pingIntervalId => !!pingIntervalId,
  target: stopPingInterval,
});
