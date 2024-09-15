'use client';

import Coin from '../../../assets/coin.svg';

import { useUnit } from 'effector-react';
import { $tokens } from '@/shared/entities';

import { formatNumber } from '@/shared/utils/formatNumber';

export const TokensDisplay = () => {
  const tokens = useUnit($tokens);

  return (
    <div className="flex flex-col gap-2">
      <div className="mx-auto mt-8 flex size-fit items-center gap-[8px] border-[1px] px-[10px]">
        <h6 className="font-normal">{formatNumber(tokens)}</h6>
        <Coin />
      </div>
    </div>
  );
};
