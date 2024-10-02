import axios, { isAxiosError } from 'axios';

import { HOST } from '../config/host';

import Cookies from 'js-cookie';

export const API_URL = `${process.env.NEXT_PUBLIC_API_URL ?? 'URL_NOT_FOUND'}/api/v1/`;

export const localHost = axios.create({
  baseURL: `${HOST}/api`,
});

export const authHost = axios.create({
  baseURL: API_URL,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
});

const refreshTokens = async () => {
  try {
    const refresh = Cookies.get(`${process.env.NEXT_PUBLIC_REFRESH_TOKEN_NAME}`);

    const newTokens = await axios.post<{
      data: {
        access_token: string;
      };
    }>(
      `${API_URL}/auth/update_access_token`,
      {
        refresh_token: refresh,
      },
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      }
    );

    Cookies.set(`${process.env.NEXT_PUBLIC_ACCESS_TOKEN_NAME}`, newTokens.data.data.access_token);

    return newTokens.data.data.access_token;
  } catch (error) {
    // if error occured while refreshing tokens (ex: tokens are missing) -> redirect to '/' so it relogins
    if (isAxiosError(error)) {
      Cookies.remove(`${process.env.NEXT_PUBLIC_ACCESS_TOKEN_NAME}`);
      Cookies.remove(`${process.env.NEXT_PUBLIC_REFRESH_TOKEN_NAME}`);
      window.location.href = '/';
    }
  }
};

authHost.interceptors.request.use(
  function (res) {
    const access = Cookies.get(`${process.env.NEXT_PUBLIC_ACCESS_TOKEN_NAME}`);

    res.headers.set('jwt-token', access);

    return res;
  },
  async function (error) {
    console.error('Auth error:', error);
    const newTokens = await refreshTokens();
    if (newTokens) {
      window.location.href = '/';
    }
  }
);
