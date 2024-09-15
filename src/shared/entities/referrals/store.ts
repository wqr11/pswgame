'use client';

import { createStore, createEffect } from 'effector';
import { RefsApiData } from './types';
import axios, { AxiosError, isAxiosError } from 'axios';

export const getRefs = createEffect<number, RefsApiData['data'] | undefined, AxiosError>(
  async (userId: number) => {
    try {
      const res: { data: RefsApiData } = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/referrals/get_referrals/${userId}`
      );

      return res.data.data;
    } catch (error) {
      if (isAxiosError(error)) {
        throw new Error(error.message);
      }
    }
  }
);

export const $refs = createStore<RefsApiData['data'] | null>(null).on(
  getRefs.doneData,
  (_, refs) => refs
);
