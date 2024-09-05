'use client';

import { $kingdom } from '@/shared/entities/kingdom';
import {
  CurrentKingdomDisplay,
  KingdomSwitcher,
  LoadingFallback,
  TabSwitcher,
} from '@/widgets';

import { useUnit } from 'effector-react';

const GameUI = () => {
  const kingdom = useUnit($kingdom);

  return (
    <div className="relative w-full flex-grow overflow-clip">
      {kingdom ? (
        <CurrentKingdomDisplay
          kingdomType={kingdom}
          kingdomTier={4}
          coins={100}
          coinsLast24Hours={50}
        />
      ) : (
        <LoadingFallback />
      )}

      <KingdomSwitcher />

      <TabSwitcher />
    </div>
  );
};

export default GameUI;
