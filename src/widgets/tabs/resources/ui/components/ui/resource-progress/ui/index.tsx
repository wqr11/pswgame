'use client';

import Image from 'next/image';

// ## CHANGE ALL OF THIS AFTER DESIGN FIXES ##
import PowerIcon from '@/shared/ui/icons/kingdoms/power.svg';
import GrowerIcon from '@/shared/ui/icons/kingdoms/grower.svg';
import MinerIcon from '@/shared/ui/icons/kingdoms/miner.svg';

import GrowerFill from './assets/fills/grower.svg?url';
import PowerFill from './assets/fills/power.svg?url';
import MinerFill from './assets/fills/miner.svg?url';
import TraderFill from './assets/fills/trader.svg?url';
// ##

import ProgressBorder from './assets/border/progress-border.svg?url';

import { ResourceProp } from '@/shared/entities/resources';

export const ResourceProgress = ({
  progress = 100,
  resource,
}: {
  progress: number;
  resource: ResourceProp;
}) => {
  const assets = {
    crypto: {
      icon: MinerIcon,
      fill: MinerFill,
    },
    heat: {
      icon: PowerIcon,
      fill: PowerFill,
    },
    food: {
      icon: GrowerIcon,
      fill: GrowerFill,
    },
    energy: {
      icon: PowerIcon,
      fill: PowerFill,
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
          />
        </div>
      </div>
    </div>
  );
};
