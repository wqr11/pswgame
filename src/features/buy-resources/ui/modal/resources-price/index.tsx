'use client';

import Coin from '@/shared/assets/coin.svg';

import { useUnit } from 'effector-react';
import { buyResourcesModelChosenResource, buyResourcesModelInputs } from '../../../model';

import { formatNumber } from '@/shared/utils/formatNumber';

export const ResourcesPrice = () => {
  const chosenResData = useUnit(buyResourcesModelChosenResource.$chosenResourceData);
  const buyResAmount = useUnit(buyResourcesModelInputs.$buyResourceAmount);

  return (
    <div className="flex items-center gap-2 border-[2px] border-white px-2 py-1">
      <h6
        className="text-lg"
        style={{
          background: 'linear-gradient(90deg, #9EFFBF 0%, #C0FBFF 50.77%, #96FF65 100%)',
          backgroundClip: 'text',
          color: 'transparent',
        }}
      >
        {!!chosenResData && formatNumber(chosenResData.cost * buyResAmount)}
      </h6>
      <Coin />
    </div>
  );
};
