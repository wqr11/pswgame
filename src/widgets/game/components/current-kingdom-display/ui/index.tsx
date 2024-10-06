'use client';

import { CurrentKingdom, KingdomResource, TokensDisplay } from '@/widgets';

import { KingdomTier, KingdomType } from '@/entities';

export const CurrentKingdomDisplay = ({
  kingdomType,
  kingdomTier,
}: {
  kingdomType: KingdomType;
  kingdomTier: KingdomTier;
}) => {
  const textColors = {
    power: 'text-[#FFAD31]',
    grower: 'text-[#B1FF82]',
    miner: 'text-[#EE71E2]',
    trader: 'text-[#7CB1FF]',
  };

  return (
    <div className={`${textColors[kingdomType]} flex flex-col gap-1`}>
      <CurrentKingdom
        kingdomType={kingdomType}
        kingdomTier={kingdomTier}
      />
      <TokensDisplay />
      <KingdomResource />
    </div>
  );
};
