'use client';

import axios, { isAxiosError, AxiosError } from "axios";

import { createEffect, createStore, sample } from "effector";

import { $auth, TokensType, loggedIn, logout } from "../auth";
import { PingDataType } from "./types";

export const ping = createEffect<TokensType['access'], PingDataType['data'] | undefined, AxiosError>(async (access: TokensType['access']) => {
  try {
    const res: { data: PingDataType } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/users/ping`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'jwt-token': `${access}`
      }
    })

    return res.data.data
  } catch (error) {
    if (isAxiosError(error)) {
      throw new Error(error.message)
    }
  }
});

export const startPingInterval = createEffect<TokensType['access'], NodeJS.Timeout, Error>((access: TokensType['access']) => {
  return setInterval(() => {
    ping(access);
  }, 1000); // 180 секунд
});

export const stopPingInterval = createEffect<NodeJS.Timeout, void, Error>((intervalId: NodeJS.Timeout) => {
  clearInterval(intervalId);
});

export const $pingIntervalId = createStore<NodeJS.Timeout | null>(null)
  .on(startPingInterval.doneData, (_, intervalId) => intervalId)
  .reset(stopPingInterval.doneData)
  .reset(logout);

sample({
  clock: loggedIn,
  source: { auth: $auth },
  filter: ({ auth }) => !!auth?.access,
  //@ts-ignore
  fn: ({ auth }) => ({ access: auth.access } as TokensType['access']),
  target: ping, // change to startPingInterval
});

sample({
  clock: logout,
  source: $pingIntervalId,
  filter: (pingIntervalId) => !!pingIntervalId,
  target: stopPingInterval,
});