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
    <div className="relative my-auto w-full flex-grow overflow-clip">
      {kingdom ? (
        <CurrentKingdomDisplay
          kingdomType={kingdom}
          kingdomTier={1}
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
