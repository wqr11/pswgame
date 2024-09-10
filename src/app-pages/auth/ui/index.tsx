'use client';

import { useEffect } from 'react';

import { useRouter } from 'next/navigation';

import { LoadingPageUI } from '@/app-pages';

import { retrieveLaunchParams } from '@telegram-apps/sdk';

import { useInitData } from '@telegram-apps/sdk-react';

import { $user, setUserId } from '@/shared/entities/user';

import { useUnit } from 'effector-react';
import { login, $auth } from '@/shared/entities/auth';

export const AuthPageUI = () => {
  const router = useRouter();

  const { initDataRaw } = retrieveLaunchParams();

  const initData = useInitData();

  const auth = useUnit($auth);
  const user = useUnit($user);

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
      router.push('/game');
    }
  }, [auth, user]);

  return <LoadingPageUI />;
};
