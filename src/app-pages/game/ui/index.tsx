'use client';

import { useEffect } from 'react';

import { useRouter } from 'next/navigation';

import { $kingdom, $resources, $user } from '@/entities';
import { CurrentKingdomDisplay, KingdomSwitcher, LoadingFallback, TabSwitcher } from '@/widgets';

import { useUnit } from 'effector-react';

export const GameUI = () => {
  const router = useRouter();

  const kingdom = useUnit($kingdom);
  const user = useUnit($user);

  const resources = useUnit($resources);

  useEffect(() => {
    if (!user) {
      router.push('/');
    }
  }, [user, router]);

  useEffect(() => {
    // debug only
    console.log(resources);
  }, [resources]);

  return (
    <div className="min-w-screen max-w-screen max-h-screen min-h-screen overflow-clip">
      <div className="flex-grow overflow-clip">
        {kingdom ? (
          <CurrentKingdomDisplay
            kingdomType={kingdom}
            kingdomTier={1}
          />
        ) : (
          <LoadingFallback />
        )}
      </div>
      <KingdomSwitcher />
    </div>
  );
};
