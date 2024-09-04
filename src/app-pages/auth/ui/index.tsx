'use client';

import { useEffect } from 'react';

import { useQuery } from '@tanstack/react-query';

import { useRouter } from 'next/navigation';

import { LoadingPageUI } from '@/app-pages';

import { retrieveLaunchParams } from '@telegram-apps/sdk';

import { useInitData } from '@telegram-apps/sdk-react';

import { login } from '@/shared/api/auth/login';

import { setUserId } from '@/shared/entities/user';

import { useUnit } from 'effector-react';
import { $resources } from '@/shared/entities/resources';

import { setResources } from '@/shared/entities/resources';
import { getResources } from '@/shared/api/endpoints/getResources';

export const AuthPageUI = () => {
  const router = useRouter();

  const { initDataRaw } = retrieveLaunchParams();

  const initData = useInitData();

  const resourcesStore = useUnit($resources);

  useEffect(() => {
    if (initData?.user?.id) {
      setUserId(initData.user.id);
    }
  });

  const { data: auth, isError } = useQuery({
    queryKey: ['loginQuery'],
    queryFn: async () => {
      const res = await login(`${initDataRaw}`);

      router.push('/grower');

      return res;
    },
  });

  console.log(auth);

  const { data: resources } = useQuery({
    queryKey: ['resourcesQuery'],
    queryFn: async () => {
      const res = await getResources();
      setResources(res?.data);
      return res;
    },
  });

  console.log(resources);
  console.log(resourcesStore);

  return <LoadingPageUI />;
};
