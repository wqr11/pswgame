'use client';

import axios from "axios";

import Cookies from "js-cookie";

import { createStore, createEffect, sample } from "effector";

import { AuthDataType, TokensType } from "./types";

import { getResources } from "../resources";
import { getLeaders } from "../leaderboard";

export const authenticate = createEffect(async (init_data: string) => {
  const access = Cookies.get(`${process.env.NEXT_PUBLIC_ACCESS_TOKEN_NAME}`);
  const refresh = Cookies.get(`${process.env.NEXT_PUBLIC_REFRESH_TOKEN_NAME}`);

  if (access && refresh) {
    return { access: access, refresh: refresh } as TokensType;
  }

  try {
    const res: AuthDataType = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/login`, {
      init_data: init_data
    }, {
      headers: {
        'Accept': "application/json",
        "Content-Type": "application/json"
      }
    });

    Cookies.set(`${process.env.NEXT_PUBLIC_ACCESS_TOKEN_NAME}`, res.data.accessToken);
    Cookies.set(`${process.env.NEXT_PUBLIC_REFRESH_TOKEN_NAME}`, res.data.refreshToken);

    return { access: res.data.accessToken, refresh: res.data.refreshToken } as TokensType;
  } catch (error) {
    return null;
  }
});

export const $auth = createStore<TokensType | null>(null).on(authenticate.doneData, (_, auth) => auth);

sample({
  clock: authenticate,
  target: [getResources, getLeaders]
})