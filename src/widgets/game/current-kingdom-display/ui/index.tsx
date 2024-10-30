'use client';

import { CurrentKingdom, KingdomResource, TokensDisplay } from '@/widgets';

import { useUnit } from 'effector-react';
import { $kingdom } from '@/entities';

export const CurrentKingdomDisplay = () => {
  const textColors = {
    power: 'text-[#FFAD31]',
    grower: 'text-[#B1FF82]',
    miner: 'text-[#EE71E2]',
    trader: 'text-[#7CB1FF]',
  };

  const kingdom = useUnit($kingdom);

  return (
    <div className={`${kingdom && textColors[kingdom]} flex flex-col gap-1`}>
      <CurrentKingdom />
      <TokensDisplay />
      <KingdomResource />
    </div>
  );
};
