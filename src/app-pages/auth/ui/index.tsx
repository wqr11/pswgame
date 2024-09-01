'use client';

import { useQuery } from '@tanstack/react-query';

import { useRouter } from 'next/navigation';

import { authHost } from '@/shared/api/authHost';

import { setCookies } from '@/actions/setCookies';

import { LoadingPageUI } from '@/app-pages';

import { retrieveLaunchParams } from '@telegram-apps/sdk';

export const AuthPageUI = () => {
  const router = useRouter();

  const { initDataRaw } = retrieveLaunchParams();

  const {
    data: authData,
    isFetching: authIsFetching,
    isError: authIsError,
  } = useQuery({
    queryKey: ['authQuery'],
    queryFn: async () => {
      const res = await authHost.post('auth/login', {
        init_data: initDataRaw,
      });

      await setCookies('ACCESS_TOKen', 'REFRESH');

      return res;
    },
  });

  return <LoadingPageUI />;
};
