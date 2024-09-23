'use client';

import { useEffect, useState } from 'react';

import { useRouter } from 'next/navigation';

import { $kingdom, $user } from '@/entities';
import { CurrentKingdomDisplay, KingdomSwitcher, LoadingFallback, TabSwitcher } from '@/widgets';

import { useUnit } from 'effector-react';

export const GameUI = () => {
  const router = useRouter();
  const [scale, setScale] = useState(1);

  const kingdom = useUnit($kingdom);
  const user = useUnit($user);

  useEffect(() => {
    if (!user) {
      router.push('/');
    }
  }, [user, router]);

  useEffect(() => {
    const updateScale = () => {
      const viewportHeight = window.innerHeight;
      const baseHeight = 800;
      const newScale = Math.min(
        viewportHeight / baseHeight,
        parseInt(`${process.env.NEXT_PUBLIC_MAX_APP_SCALING}`)
      );
      setScale(newScale);
    };

    updateScale();
    window.addEventListener('resize', updateScale);

    return () => window.removeEventListener('resize', updateScale);
  }, []);

  return (
    <div
      className="origin-top"
      style={{
        transform: `scale(${scale})`,
      }}
    >
      <div className="relative my-auto w-full h-full flex-grow max-h-[100vh] overflow-clip">
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

      <TabSwitcher />
    </div>
  );
};
