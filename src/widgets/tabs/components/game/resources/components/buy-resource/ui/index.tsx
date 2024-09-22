'use client';

import { useState } from 'react';

import Heat from '@/shared/ui/icons/resources/heat.svg';
import Food from '@/shared/ui/icons/resources/food.svg';
import Crypto from '@/shared/ui/icons/resources/crypto.svg';
import Energy from '@/shared/ui/icons/resources/energy.svg';

import BuyResourceIcon from '../../../assets/buy-resource-button.svg';
import { ResourceButton } from '../resource-button';

export const BuyResource = () => {
  const [menuHidden, setMenuHidden] = useState<boolean>(true);

  return (
    <>
      <button
        className="active:opacity-40"
        onClick={(e: React.PointerEvent<HTMLButtonElement>) => {
          e.preventDefault();
          setMenuHidden(!menuHidden);
        }}
      >
        <BuyResourceIcon />
      </button>
      <div
        className={`${menuHidden ? 'hidden' : ''} absolute left-0 top-0 z-50 flex size-full items-start`}
      >
        <div className="h-1/2 w-full items-center justify-center border-[1px] border-white bg-black">
          <div className="mx-auto mt-2 flex size-fit gap-4 border-[3px] border-white px-2 py-1">
            <ResourceButton icon={Crypto} />
            <ResourceButton icon={Energy} />
            <ResourceButton icon={Food} />
            <ResourceButton icon={Heat} />
          </div>
          <div>
            <input
              type="range"
              min={0}
              max={100}
            ></input>
          </div>
        </div>
      </div>
    </>
  );
};
