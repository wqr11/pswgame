'use client';

import { useEffect } from 'react';

import { useRouter } from 'next/navigation';

import { LoadingPageUI } from '@/app-pages';

import { retrieveLaunchParams } from '@telegram-apps/sdk';

import { useInitData } from '@telegram-apps/sdk-react';

import {
  $user,
  getRefs,
  setUserId as setUserIdEvent,
  setUsername as setUsernameEvent,
} from '@/entities';

import { useUnit } from 'effector-react';
import { login, $isAuth, $lastOpenedPage } from '@/entities';

export const AuthPageUI = () => {
  const router = useRouter();

  const { initDataRaw } = retrieveLaunchParams();

  const initData = useInitData();

  const setUserId = useUnit(setUserIdEvent);
  const setUsername = useUnit(setUsernameEvent);

  const isAuth = useUnit($isAuth);
  const user = useUnit($user);
  const lastPage = useUnit($lastOpenedPage);

  const getReferrals = useUnit(getRefs);

  useEffect(() => {
    if (initData?.user?.id) {
      setUserId(initData.user.id);
    }
    if (initData?.user?.username) {
      setUsername(initData.user.username);
    }
  }, [initData, setUserId, setUsername]);

  useEffect(() => {
    login(`${initDataRaw}`);
  }, [initDataRaw]);

  useEffect(() => {
    if (!!isAuth && !!user) {
      router.push(`/${lastPage ?? 'game'}`);
      getReferrals();
    }
  }, [isAuth, user, router, lastPage, getReferrals]);

  return <LoadingPageUI />;
};
