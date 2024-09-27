'use client';

import Coin from '@/shared/assets/coin.svg';

import { useUnit } from 'effector-react';
import { buyResourcesModelChosenResource } from '@/features/buy-resources/model';

import { formatNumber } from '@/shared/utils/formatNumber';

export const ResourcesPrice = () => {
  const price = useUnit(buyResourcesModelChosenResource.$chosenResourceTotalPrice);

  return (
    <div className="flex min-w-[50%] max-w-[90%] flex-shrink items-center gap-2 border-[2px] border-white px-2 py-1">
      <h6
        className="text-lg"
        style={{
          background: 'linear-gradient(90deg, #9EFFBF 0%, #C0FBFF 50.77%, #96FF65 100%)',
          backgroundClip: 'text',
          color: 'transparent',
        }}
      >
        {price && formatNumber(price)}
      </h6>
      <Coin />
    </div>
  );
};
