'use client';

import {
  CurrentKingdomDisplay,
  KingdomSwitcher,
  LoadingFallback,
  TabSwitcher,
} from '@/widgets';

import { useUnit } from 'effector-react';
import { $kingdom } from '@/shared/model';

const GameUI = () => {
  const kingdom = useUnit($kingdom);

  return (
    <>
      {kingdom ? (
        <div className="relative w-full flex-grow overflow-clip">
          <CurrentKingdomDisplay
            kingdomType={kingdom}
            kingdomTier={4}
            coins={100}
            coinsLast24Hours={50}
          />

          <KingdomSwitcher />

          <TabSwitcher />
        </div>
      ) : (
        <LoadingFallback />
      )}
    </>
  );
};

export default GameUI;
