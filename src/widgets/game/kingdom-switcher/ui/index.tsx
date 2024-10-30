'use client';

import { KingdomSwitchButton } from './kingdom-switch-button';

import { useUnit } from 'effector-react';
import { $availableKingdoms } from '@/entities/kingdom';

export const KingdomSwitcher = () => {
  const kingdoms = useUnit($availableKingdoms);

  return (
    <div className="mx-auto mt-8 grid grid-cols-3 gap-4">
      {kingdoms?.map((kingdom, idx) => (
        <KingdomSwitchButton
          kingdomType={kingdom.name}
          kingdomState={kingdom.state}
          key={`kingdom-switch-button-${idx}`}
        />
      ))}
    </div>
  );
};
