'use client';

import axios, { isAxiosError, AxiosError } from "axios";

import { createEffect, createStore, sample } from "effector";

import { $auth, TokensType, loggedIn, logout } from "../auth";
import { PingDataType } from "./types";

export const ping = createEffect<TokensType | null, PingDataType['data'] | undefined, AxiosError>(async (auth: TokensType | null) => {
  try {
    const res: { data: PingDataType } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/users/ping`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'jwt-token': `${auth?.access}`
      }
    })

    return res.data.data
  } catch (error) {
    if (isAxiosError(error)) {
      throw new Error(error.message)
    }
  }
});

export const startPingInterval = createEffect<TokensType | null, number, Error>((auth) => {
  return window.setInterval(() => {
    ping(auth);
  }, 1000); // 180 секунд
});

export const stopPingInterval = createEffect<number, void, Error>((intervalId: number) => {
  window.clearInterval(intervalId);
});

export const $pingIntervalId = createStore<number>(0)
  .on(startPingInterval.doneData, (_, intervalId) => intervalId)
  .reset(logout);

sample({
  clock: loggedIn,
  source: $auth,
  target: startPingInterval,
});

sample({
  clock: logout,
  source: $pingIntervalId,
  target: stopPingInterval,
});