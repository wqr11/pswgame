'use client';

import Heat from '@/shared/ui/icons/resources/heat.svg';
import Food from '@/shared/ui/icons/resources/food.svg';
import Crypto from '@/shared/ui/icons/resources/crypto.svg';
import Energy from '@/shared/ui/icons/resources/energy.svg';

import { ResourceButton } from './resource';

import { useUnit } from 'effector-react';
import { buyResourcesModelInputs } from '../model';

export const BuyResource = () => {
  const rangeInput = useUnit(buyResourcesModelInputs.$rangeInput);
  const setRangeInput = useUnit(buyResourcesModelInputs.setRangeInput);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setRangeInput(parseInt(e.target.value));
  };

  return (
    <div className="absolute left-0 top-0 z-50 flex size-full items-start">
      <div className="w-full flex items-center justify-center border-[1px] border-white bg-black">
        <div className="mx-auto mt-2 flex size-fit gap-4 border-[3px] border-white px-2 py-1">
          <ResourceButton icon={Crypto} />
          <ResourceButton icon={Energy} />
          <ResourceButton icon={Food} />
          <ResourceButton icon={Heat} />
        </div>
        <div>
          <input
            onInput={handleInput}
            type="range"
            min={0}
            max={100}
            value={rangeInput}
          ></input>
        </div>
      </div>
    </div>
  );
};
