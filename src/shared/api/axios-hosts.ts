import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios';
import Cookies from 'js-cookie';

export const API_URL = `${process.env.NEXT_PUBLIC_API_URL ?? 'URL_NOT_FOUND'}/api/v1`;

export const nextApiHost = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_HOST_LOCAL_URL}/next-api`,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
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
    Cookies.remove(`${process.env.NEXT_PUBLIC_ACCESS_TOKEN_NAME}`);
    Cookies.remove(`${process.env.NEXT_PUBLIC_REFRESH_TOKEN_NAME}`);
    window.location.href = '/';
  }
};

authHost.interceptors.request.use(function (config: InternalAxiosRequestConfig) {
  const access = Cookies.get(`${process.env.NEXT_PUBLIC_ACCESS_TOKEN_NAME}`);

  config.headers.set('jwt-token', access);

  return config;
});

authHost.interceptors.response.use(
  res => res,
  async (error: AxiosError) => {
    const originalRequest = error.config;

    if (
      error.response?.status === 401
      //  || error.response?.status === 422
    ) {
      try {
        const newTokens = await refreshTokens();
        originalRequest?.headers.set('jwt-token', newTokens);

        // @ts-ignore
        return authHost(originalRequest);
      } catch (refreshError) {
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);
