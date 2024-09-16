'use client';

import Heat from '@/shared/ui/icons/resources/heat.svg';
import Food from '@/shared/ui/icons/resources/food.svg';
import Energy from '@/shared/ui/icons/resources/energy.svg';
import Crypto from '@/shared/ui/icons/resources/crypto.svg';

import { useUnit } from 'effector-react';
import { KingdomType, ResourceType, $resources } from '@/entities';

import { formatNumber } from '@/shared/utils/formatNumber';

export const KingdomResource = ({ kingdomType }: { kingdomType: KingdomType }) => {
  const resources = useUnit($resources);

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

  return (
    <div className="mx-auto flex size-fit items-center justify-center gap-[10px] border-[1px] border-white px-3 py-1">
      <h6 className="text-[16px]">
        {resources?.map(resource => {
          if (resource.name === kingdomsResources[kingdomType]) {
            return formatNumber(resource.current);
          }
        })}
      </h6>
      <div className="flex size-[18px] items-center justify-center">
        <Resource
          height={18}
          width={18}
        />
      </div>
    </div>
  );
};
