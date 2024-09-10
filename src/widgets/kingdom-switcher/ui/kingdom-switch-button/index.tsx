'use client';

import Image from 'next/image';

import MinerIcon from '@/shared/ui/icons/kingdoms/miner.svg?url';
import GrowerIcon from '@/shared/ui/icons/kingdoms/grower.svg?url';
import PowerIcon from '@/shared/ui/icons/kingdoms/power.svg?url';
import TraderIcon from '@/shared/ui/icons/kingdoms/trader.svg?url';

import Lock from '../assets/Lock.svg?url';
import LockGreen from '../assets/Lock-green.svg?url';

import { motion } from 'framer-motion';

import { KingdomType, KingdomStateUnitType } from '@/shared/entities/kingdom';

import { setKingdom } from '@/shared/entities/kingdom';

export const KingdomSwitchButton = ({
  kingdomType,
  kingdomState,
}: {
  kingdomType: KingdomType;
  kingdomState: KingdomStateUnitType;
}) => {
  const resourceIcons = {
    miner: MinerIcon,
    grower: GrowerIcon,
    power: PowerIcon,
    trader: TraderIcon,
  };

  const getIcon = (): string => {
    switch (kingdomState) {
      case 'opened':
        return resourceIcons[kingdomType];
      case 'available':
        return LockGreen;
      case 'locked':
        return Lock;
    }
  };

  const handleClick = () => {
    switch (kingdomState) {
      case 'opened':
        setKingdom(kingdomType);
        break;
      default:
        break;
    }
  };

  return (
    <motion.button
      initial={{ scale: 1, opacity: 1 }}
      whileTap={{
        scale: 0.9,
        opacity: 0.9,
        transition: {
          duration: 0.2,
          type: 'spring',
          bounce: 0.6,
        },
      }}
      className="flex max-h-[55px] min-h-[55px] min-w-[55px] max-w-[55px] items-center justify-center border-[3px] border-white p-1"
      onClick={handleClick}
    >
      <Image
        src={getIcon()}
        height={55}
        width={55}
        alt="Kingdom Switch button"
        priority
      />
    </motion.button>
  );
};
