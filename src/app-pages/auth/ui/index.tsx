'use client';

import { useEffect } from 'react';

import { useRouter } from 'next/navigation';

import { LoadingPageUI } from '@/app-pages';

import { retrieveLaunchParams } from '@telegram-apps/sdk';

import { useInitData } from '@telegram-apps/sdk-react';

import { setUserId } from '@/shared/entities/user';

import { useUnit } from 'effector-react';
import { authenticate, $auth } from '@/shared/entities/auth';

export const AuthPageUI = () => {
  const router = useRouter();

  const { initDataRaw } = retrieveLaunchParams();

  const initData = useInitData();

  const auth = useUnit($auth);

  useEffect(() => {
    if (initData?.user?.id) {
      setUserId(initData.user.id);
    }
  }, [initData]);

  useEffect(() => {
    authenticate(`${initDataRaw}`);
  }, [initDataRaw]);

  useEffect(() => {
    if (!!auth) {
      router.push('/game');
    }
  }, [auth]);

  return <LoadingPageUI />;
};
