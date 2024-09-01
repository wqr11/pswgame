'use client';

import { Link } from '@/components/Link/Link';

import MinerIcon from '@/shared/ui/icons/kingdoms/miner.svg';
import GrowerIcon from '@/shared/ui/icons/kingdoms/grower.svg';
import PowerIcon from '@/shared/ui/icons/kingdoms/power.svg';
import TraderIcon from '@/shared/ui/icons/kingdoms/trader.svg';

import Lock from '../assets/Lock.svg';
import LockGreen from '../assets/Lock-green.svg';

import { KingdomType, KingdomStateUnitType } from '@/shared/types';

export const KingdomSwitchButton = ({
  resource,
  resourceState,
}: {
  resource: KingdomType;
  resourceState: KingdomStateUnitType;
}) => {
  const resourceIcons = {
    miner: MinerIcon,
    grower: GrowerIcon,
    power: PowerIcon,
    trader: TraderIcon,
  };

  const ResourceOpenedIcon = resourceIcons[resource];

  const getResourceIcon = () => {
    switch (resourceState) {
      case 'opened':
        return <ResourceOpenedIcon />;

      case 'locked':
        return <Lock />;

      case 'available':
        return <LockGreen />;
    }
  };

  // switch (resourceState) {
  //   case 'opened':
  //     return (
  //       <Link
  //         href={`/${resource}?tab=none`}
  //         className="max-h-[55px] min-h-[55px] min-w-[55px] max-w-[55px] border-[3px] border-white p-1"
  //       >
  //         <ResourceOpenedIcon />
  //       </Link>
  //     );
  //   case 'locked':
  //     return (
  //       <div>
  //         <Lock />
  //       </div>
  //     );
  //   case 'available':
  //     return (
  //       <div className="max-h-[55px] min-h-[55px] min-w-[55px] max-w-[55px] border-[3px] border-white p-1">
  //         <LockGreen />
  //       </div>
  //     );
  // }

  return (
    <Link
      href={resourceState === 'opened' ? `/${resource}?tab=none` : ''}
      className="max-h-[55px] min-h-[55px] min-w-[55px] max-w-[55px] border-[3px] border-white p-1"
    >
      {getResourceIcon()}
    </Link>
  );
};
