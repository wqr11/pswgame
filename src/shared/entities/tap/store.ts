'use client';

import axios, { isAxiosError } from "axios";

import { createEffect, createStore, createEvent, sample } from "effector";

import { $auth, TokensType } from "../auth";
import { $userId } from "../user";

import { TapDataType } from "./types";
import { PostTapParams } from "./types";

export const postTap = createEffect(async ({ access, userId, taps }: PostTapParams) => {
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

export const initTap = createEvent<void>();

export const tap = createEvent<void>();

export const $taps = createStore<number>(0).on(tap, (taps) => taps + 1).reset(postTap);

sample({
  source: $taps,
  filter: (taps) => taps >= 10,
  target: initTap,
});

sample({
  clock: initTap,
  source: { auth: $auth, userId: $userId, taps: $taps },
  filter: ({ auth, userId }) => !!auth && !!userId,
  fn: ({ auth, userId, taps }: { auth: TokensType | null, userId: number | null, taps: number }) => ({ access: auth?.access, userId, taps } as PostTapParams),
  target: postTap
})
