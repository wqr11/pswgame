'use client';

import { useEffect } from 'react';

import { useQuery } from '@tanstack/react-query';

import { useRouter } from 'next/navigation';

import { LoadingPageUI } from '@/app-pages';

import { retrieveLaunchParams } from '@telegram-apps/sdk';

import { useInitData } from '@telegram-apps/sdk-react';

import { login } from '@/shared/api/login/login';

import { setUserId } from '@/shared/model';

export const AuthPageUI = () => {
  const router = useRouter();

  const { initDataRaw } = retrieveLaunchParams();

  const initData = useInitData();

  useEffect(() => {
    if (initData?.user?.id) {
      setUserId(initData.user.id);
    }
  });

  const { isError } = useQuery({
    queryKey: ['loginQuery'],
    queryFn: async () => {
      const res = await login(`${initDataRaw}`);

      router.push('/grower');

      return res;
    },
  });

  return <LoadingPageUI />;
};
