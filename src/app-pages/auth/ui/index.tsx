'use client';

import { useQuery } from '@tanstack/react-query';

import { useRouter } from 'next/navigation';

import { LoadingPageUI } from '@/app-pages';

import { retrieveLaunchParams } from '@telegram-apps/sdk';
import { login } from '@/shared/api/login/login';

export const AuthPageUI = () => {
  const router = useRouter();

  const { initDataRaw } = retrieveLaunchParams();

  const {
    data: authData,
    isFetching: isAuthenticating,
    isError,
  } = useQuery({
    queryKey: ['loginQuery'],
    queryFn: async () => {
      const res = await login(`${initDataRaw}`);

      router.push('/grower');

      return res;
    },
  });

  return <LoadingPageUI />;
};
