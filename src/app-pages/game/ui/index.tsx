'use client';

import { useEffect } from 'react';

import { useRouter } from 'next/navigation';

import { $user } from '@/shared/entities';
import { $kingdom } from '@/shared/entities/kingdom';
import {
  CurrentKingdomDisplay,
  KingdomSwitcher,
  LoadingFallback,
  TabSwitcher,
} from '@/widgets';

import { useUnit } from 'effector-react';

export const GameUI = () => {
  const router = useRouter();

  const kingdom = useUnit($kingdom);

  const user = useUnit($user);

  useEffect(() => {
    if (!user) {
      router.push('/');
    }
  }, []);

  return (
    <div className="relative my-auto w-full flex-grow overflow-clip">
      {kingdom ? (
        <CurrentKingdomDisplay kingdomType={kingdom} kingdomTier={1} />
      ) : (
        <LoadingFallback />
      )}

      <KingdomSwitcher />

      <TabSwitcher />
    </div>
  );
};
