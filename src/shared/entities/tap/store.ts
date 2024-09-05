'use client';

import axios, { isAxiosError } from "axios";

import { createEffect, createStore, createEvent, sample, merge } from "effector";

import { $auth } from "../auth";
import { $userId } from "../user";

import { TapDataType } from "./types";

export const postTap = createEffect(async (taps: number) => {
  const access = $auth.getState()?.access;
  const userId = $userId.getState();
  try {
    const res: { data: TapDataType } = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/actions/tap`,
      {
        user_id: userId,
        taps_amount: taps,
      },
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'jwt-token': `${access}`,
        },
      },
    );

    return res.data.data.tokens_amount;
  } catch (error) {
    if (isAxiosError(error)) {
      throw new Error(error.message);
    }
  }
});

export const tap = createEvent<void>();

export const $tap = createStore<number>(0).on(tap, (taps) => taps + 1).reset(postTap);

sample({
  source: $tap,
  filter: (taps) => taps >= 10,
  target: postTap,
});

