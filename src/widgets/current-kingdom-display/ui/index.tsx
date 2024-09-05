'use client';

import Coin from './assets/coin.svg';

import { CurrentKingdom } from '@/widgets';

import { KingdomTier, KingdomType } from '@/shared/entities/kingdom';

import { formatNumber } from '@/shared/utils/formatNumber';

import { useUnit } from 'effector-react';
import { $tap } from '@/shared/entities/tap';

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

  const taps = useUnit($tap);

  return (
    <>
      <CurrentKingdom
        kingdomType={kingdomType}
        kingdomTier={kingdomTier}
      />
      <div className={`${textColors[kingdomType]} flex flex-col gap-2`}>
        <div className="mx-auto mt-8 flex size-fit items-center gap-[8px] border-[1px] px-[10px]">
          <h6 className="font-normal">{formatNumber(taps)}</h6>
          <Coin />
        </div>
        <div>
          <p className="mx-auto flex size-fit gap-[10px] border-[1px] border-white px-[10px]">
            {formatNumber(taps)}
          </p>
        </div>
      </div>
    </>
  );
};
