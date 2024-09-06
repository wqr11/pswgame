'use client';

import axios from "axios";

import Cookies from "js-cookie";

import { createStore, createEffect, sample, createEvent } from "effector";

import { AuthDataType, TokensType } from "./types";

import { getResources } from "../resources";
import { getLeaders } from "../leaderboard";

export const login = createEffect(async (init_data: string) => {
  const access = Cookies.get(`${process.env.NEXT_PUBLIC_ACCESS_TOKEN_NAME}`);
  const refresh = Cookies.get(`${process.env.NEXT_PUBLIC_REFRESH_TOKEN_NAME}`);

  if (access && refresh) {
    return { access: access, refresh: refresh } as TokensType;
  }

  try {
    const res: { data: AuthDataType } = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/login`, {
      init_data: init_data
    }, {
      headers: {
        'Accept': "application/json",
        "Content-Type": "application/json"
      }
    });

    Cookies.set(`${process.env.NEXT_PUBLIC_ACCESS_TOKEN_NAME}`, res.data.data.access_token);
    Cookies.set(`${process.env.NEXT_PUBLIC_REFRESH_TOKEN_NAME}`, res.data.data.refresh_token);

    return { access: res.data.data.access_token, refresh: res.data.data.refresh_token } as TokensType;
  } catch (error) {
    return null;
  }
});

export const logout = createEffect<void, void, Error>(() => {
  Cookies.remove(`${process.env.NEXT_PUBLIC_ACCESS_TOKEN_NAME}`);
  Cookies.remove(`${process.env.NEXT_PUBLIC_REFRESH_TOKEN_NAME}`);
  return;
});

export const $auth = createStore<TokensType | null>(null)
  .on(login.doneData, (_, auth) => auth)
  .reset(logout);

sample({
  clock: login,
  target: [getResources, getLeaders]
})