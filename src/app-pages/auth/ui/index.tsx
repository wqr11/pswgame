'use client';

import { useEffect } from 'react';

import { useRouter } from 'next/navigation';

import { LoadingPageUI } from '@/app-pages';

import { retrieveLaunchParams } from '@telegram-apps/sdk';

import { useInitData } from '@telegram-apps/sdk-react';

import { $user, setUserId } from '@/entities';

import { useUnit } from 'effector-react';
import { login, $auth, $lastOpenedPage } from '@/entities';

export const AuthPageUI = () => {
  const router = useRouter();

  const { initDataRaw } = retrieveLaunchParams();

  const initData = useInitData();

  const auth = useUnit($auth);
  const user = useUnit($user);
  const lastPage = useUnit($lastOpenedPage);

  useEffect(() => {
    if (initData?.user?.id) {
      setUserId(initData.user.id);
    }
  }, [initData]);

  useEffect(() => {
    login(`${initDataRaw}`);
  }, [initDataRaw]);

  useEffect(() => {
    if (!!auth && !!user) {
      router.push(`/${lastPage ?? 'game'}`);
    }
  }, [auth, user, router, lastPage]);

  return <LoadingPageUI />;
};
