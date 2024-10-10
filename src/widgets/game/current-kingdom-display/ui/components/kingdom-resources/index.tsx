'use client';

import { useState, useEffect } from 'react';

import Heat from '@/shared/ui/icons/resources/heat.svg';
import Food from '@/shared/ui/icons/resources/food.svg';
import Energy from '@/shared/ui/icons/resources/energy.svg';
import Crypto from '@/shared/ui/icons/resources/crypto.svg';

import { useUnit } from 'effector-react';
import { KingdomType, ResourceType, $resources, UserResourceType, $kingdom } from '@/entities';

import { formatNumber } from '@/shared/utils/formatNumber';

export const KingdomResource = () => {
  const kingdom = useUnit($kingdom);
  const [resource, setResource] = useState<UserResourceType | null>(null);
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

  const Resource = icons[kingdomsResources[kingdom!]];

  useEffect(() => {
    if (resources && kingdom) {
      const res = resources.find(res => res.name === kingdomsResources[kingdom]);
      setResource(res ?? null);
    }
  }, [resources, kingdom]);

  return (
    <div
      className="mx-auto flex size-fit items-center justify-center gap-[10px] border-[1px] border-white px-3 py-1"
      // style={{
      //   width: `${(resource?.current.toString().length ?? 5) * 11}px`,
      // }}
    >
      <h6 className="text-[16px]">{resource ? formatNumber(resource.current) : 'ERR'}</h6>
      <div className="flex size-[18px] items-center justify-center">
        <Resource
          height={18}
          width={18}
        />
      </div>
    </div>
  );
};
