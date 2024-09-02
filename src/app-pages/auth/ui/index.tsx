'use client';

import { useRouter } from 'next/navigation';

import { login } from '@/shared/api/login/login';

import { LoadingPageUI } from '@/app-pages';

import { retrieveLaunchParams } from '@telegram-apps/sdk';
import { useEffect } from 'react';

export const AuthPageUI = () => {
  const router = useRouter();

  const { initDataRaw } = retrieveLaunchParams();

  useEffect(() => {
    login(`${initDataRaw}`);
  }, []);

  return <LoadingPageUI />;
};
