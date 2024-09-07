'use client';

import Heat from '@/shared/ui/icons/resources/heat.svg';
import Food from '@/shared/ui/icons/resources/food.svg';
import Energy from '@/shared/ui/icons/resources/energy.svg';
import Crypto from '@/shared/ui/icons/resources/crypto.svg';

import Coin from './assets/coin.svg';

import { CurrentKingdom } from '@/widgets';

import { KingdomTier, KingdomType } from '@/shared/entities/kingdom';

import { ResourceType } from '@/shared/entities';

import { formatNumber } from '@/shared/utils/formatNumber';

import { useUnit } from 'effector-react';
import { $tokens } from '@/shared/entities/user/tokens/model';
import { $resources } from '@/shared/entities/user/resources/model';

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

  const icons: {
    [resource in ResourceType]: React.FC<React.SVGProps<SVGElement>>;
  } = {
    energy: Energy,
    heat: Heat,
    food: Food,
    crypto: Crypto,
  };

  const kingdomsResources: {
    [kingdom in KingdomType]: ResourceType;
  } = {
    miner: 'crypto',
    grower: 'food',
    power: 'energy',
    trader: 'crypto',
  };

  const Resource = icons[kingdomsResources[kingdomType]];

  const tokens = useUnit($tokens);
  const resources = useUnit($resources);

  return (
    <>
      <CurrentKingdom
        kingdomType={kingdomType}
        kingdomTier={kingdomTier}
      />
      <div className={`${textColors[kingdomType]} flex flex-col gap-2`}>
        <div className="mx-auto mt-8 flex size-fit items-center gap-[8px] border-[1px] px-[10px]">
          <h6 className="font-normal">{formatNumber(tokens)}</h6>
          <Coin />
        </div>
        <div className="mx-auto flex size-fit items-center justify-center gap-[10px] border-[1px] border-white px-3 py-1">
          <h6 className="text-[16px]">
            {resources?.map((resource) => {
              if (resource.name === kingdomsResources[kingdomType]) {
                return formatNumber(resource.current);
              }
            })}
          </h6>
          <div className="flex size-[18px] items-center justify-center">
            <Resource />
          </div>
        </div>
      </div>
    </>
  );
};
