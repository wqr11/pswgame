'use client';

import Image from 'next/image';

import Heat from '@/shared/ui/icons/resources/heat.svg?url';
import Food from '@/shared/ui/icons/resources/food.svg?url';
import Energy from '@/shared/ui/icons/resources/energy.svg?url';
import Crypto from '@/shared/ui/icons/resources/crypto.svg?url';

import { useUnit } from 'effector-react';
import { $resources } from '@/shared/entities/user/resources/model';

import { KingdomType, ResourceType } from '@/shared/entities';

import { formatNumber } from '@/shared/utils/formatNumber';

export const KingdomResource = ({ kingdomType }: { kingdomType: KingdomType }) => {
  const resources = useUnit($resources);

  const icons: {
    [resource in ResourceType]: string;
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

  const resourceIconUrl = icons[kingdomsResources[kingdomType]];

  return (
    <div className="mx-auto flex size-fit items-center justify-center gap-[10px] border-[1px] border-white px-3 py-1">
      <h6 className="text-[16px]">
        {resources?.map((resource) => {
          if (resource.name === kingdomsResources[kingdomType]) {
            return formatNumber(resource.current);
          }
        })}
      </h6>
      <div className="flex size-[18px] items-center justify-center">
        <Image
          src={resourceIconUrl}
          height={18}
          width={18}
          alt="kingdom-resource"
          loading="eager"
        />
      </div>
    </div>
  );
};
