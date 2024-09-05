'use client';

import MinerIcon from '@/shared/ui/icons/kingdoms/miner.svg';
import GrowerIcon from '@/shared/ui/icons/kingdoms/grower.svg';
import PowerIcon from '@/shared/ui/icons/kingdoms/power.svg';
import TraderIcon from '@/shared/ui/icons/kingdoms/trader.svg';

import Lock from '../assets/Lock.svg';
import LockGreen from '../assets/Lock-green.svg';

import { KingdomType, KingdomStateUnitType } from '@/shared/entities/kingdom';

import { setKingdom } from '@/shared/entities/kingdom';

export const KingdomSwitchButton = ({
  kingdom,
  kingdomState,
}: {
  kingdom: KingdomType;
  kingdomState: KingdomStateUnitType;
}) => {
  const resourceIcons = {
    miner: MinerIcon,
    grower: GrowerIcon,
    power: PowerIcon,
    trader: TraderIcon,
  };

  const ResourceOpenedIcon = resourceIcons[kingdom];

  const getResourceIcon = () => {
    switch (kingdomState) {
      case 'opened':
        return <ResourceOpenedIcon />;

      case 'locked':
        return <Lock />;

      case 'available':
        return <LockGreen />;
    }
  };

  const handleClick = () => {
    setKingdom(kingdom);
  };

  return (
    <button
      className="max-h-[55px] min-h-[55px] min-w-[55px] max-w-[55px] border-[3px] border-white p-1"
      onClick={handleClick}
    >
      {getResourceIcon()}
    </button>
  );
};
