'use client';

import { useEffect } from 'react';

import { useRouter } from 'next/navigation';

import { LoadingPageUI } from '@/app-pages';

// import { retrieveLaunchParams } from '@telegram-apps/sdk';

import { useInitData } from '@telegram-apps/sdk-react';

import { setUserId } from '@/shared/entities/user';

import { useUnit } from 'effector-react';
import { $init, initialize } from '@/shared/entities/init';
import { getResources } from '@/shared/entities/resources';
import { getLeaders } from '@/shared/entities/leaderboard';

export const AuthPageUI = () => {
  const router = useRouter();

  // const { initDataRaw } = retrieveLaunchParams();

  const initData = useInitData();

  const init = useUnit($init);

  useEffect(() => {
    if (initData?.user?.id) {
      setUserId(initData.user.id);
    }
    getResources();
    getLeaders();
  }, []);

  useEffect(() => {
    if (init) {
      router.push('/game');
    }
  }, [init]);

  // const { data: auth, isError } = useQuery({
  //   queryKey: ['loginQuery'],
  //   queryFn: async () => {
  //     const res = await login(`${initDataRaw}`);

  //     router.push('/grower');

  //     return res;
  //   },
  // });

  return <LoadingPageUI />;
};
