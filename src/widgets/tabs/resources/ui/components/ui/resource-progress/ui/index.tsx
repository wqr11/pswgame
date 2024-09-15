'use client';

import Image from 'next/image';

import Heat from '@/shared/ui/icons/resources/heat.svg';
import Energy from '@/shared/ui/icons/resources/energy.svg';
import Crypto from '@/shared/ui/icons/resources/crypto.svg';
import Food from '@/shared/ui/icons/resources/food.svg';

import HeatFill from './assets/fills/heat.svg?url';
import EnergyFill from './assets/fills/energy.svg?url';
import CryptoFill from './assets/fills/crypto.svg?url';
import FoodFill from './assets/fills/food.svg?url';

import ProgressBorder from './assets/border/progress-border.svg?url';

import { ResourceType } from '@/entities/resources-pool';

export const ResourceProgress = ({
  progress = 100,
  resource,
}: {
  progress: number;
  resource: ResourceType;
}) => {
  const assets = {
    crypto: {
      icon: Crypto,
      fill: CryptoFill,
    },
    heat: {
      icon: Heat,
      fill: HeatFill,
    },
    food: {
      icon: Food,
      fill: FoodFill,
    },
    energy: {
      icon: Energy,
      fill: EnergyFill,
    },
  };

  const ResourceIcon = assets[resource].icon;

  const ResourceFill = assets[resource].fill;

  return (
    <div className="relative flex items-center gap-0">
      <div className="z-30 min-h-[48px] min-w-[48px] border-[3px] border-white bg-[#0e0e0e] p-2">
        <ResourceIcon />
      </div>
      <div className="w-full">
        <div className="relative w-full">
          <Image
            className="relative z-20"
            src={ProgressBorder}
            width={282}
            height={22}
            alt="progress-border"
            style={{
              objectFit: 'fill',
              width: '100%',
              height: '22px',
            }}
            priority
            loading="eager"
          />
          <Image
            className="absolute left-0 top-0 z-10"
            src={ResourceFill}
            width={200}
            height={22}
            alt="progress-fill"
            style={{
              objectFit: 'fill',
              width: `${progress}%`,
              height: '22px',
            }}
            priority
            loading="eager"
          />
        </div>
      </div>
    </div>
  );
};
