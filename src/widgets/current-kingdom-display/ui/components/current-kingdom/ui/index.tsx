'use client';

import { useQuery } from '@tanstack/react-query';

import { motion, AnimatePresence } from 'framer-motion';

import GrowerKingdomTier1 from './assets/kingdoms/grower/tier-1.svg';
import GrowerKingdomTier2 from './assets/kingdoms/grower/tier-2.svg';
import GrowerKingdomTier3 from './assets/kingdoms/grower/tier-3.svg';
import GrowerKingdomTier4 from './assets/kingdoms/grower/tier-4.svg';

import MinerKingdomTier1 from './assets/kingdoms/miner/tier-1.svg';
import MinerKingdomTier2 from './assets/kingdoms/miner/tier-2.svg';
import MinerKingdomTier3 from './assets/kingdoms/miner/tier-3.svg';
import MinerKingdomTier4 from './assets/kingdoms/miner/tier-4.svg';

import PowerKingdomTier1 from './assets/kingdoms/power/tier-1.svg';
import PowerKingdomTier2 from './assets/kingdoms/power/tier-2.svg';
import PowerKingdomTier3 from './assets/kingdoms/power/tier-3.svg';
import PowerKingdomTier4 from './assets/kingdoms/power/tier-4.svg';

import TraderKingdomTier1 from './assets/kingdoms/trader/tier-1.svg';
import TraderKingdomTier2 from './assets/kingdoms/trader/tier-2.svg';
import TraderKingdomTier3 from './assets/kingdoms/trader/tier-3.svg';
import TraderKingdomTier4 from './assets/kingdoms/trader/tier-4.svg';

import { KingdomTier, KingdomType } from '@/shared/types';

import { useUnit } from 'effector-react';
import { $tap, $userId, requestTap } from '@/shared/model';

export const CurrentKingdom = ({
  kingdomType,
  kingdomTier,
}: {
  kingdomType: KingdomType;
  kingdomTier: KingdomTier;
}) => {
  const kingdoms = {
    grower: [
      GrowerKingdomTier1,
      GrowerKingdomTier2,
      GrowerKingdomTier3,
      GrowerKingdomTier4,
    ],
    miner: [
      MinerKingdomTier1,
      MinerKingdomTier2,
      MinerKingdomTier3,
      MinerKingdomTier4,
    ],
    power: [
      PowerKingdomTier1,
      PowerKingdomTier2,
      PowerKingdomTier3,
      PowerKingdomTier4,
    ],
    trader: [
      TraderKingdomTier1,
      TraderKingdomTier2,
      TraderKingdomTier3,
      TraderKingdomTier4,
    ],
  };

  const Kingdom = kingdoms[kingdomType][kingdomTier - 1];

  const userId = useUnit($userId);
  const taps = useUnit($tap);

  return (
    <AnimatePresence>
      <motion.button
        key="kingdom"
        initial={{ scale: 1, opacity: 1 }}
        animate={{
          scale: [0.9, 1],
          opacity: [0.8, 1],
          translateY: [40, 0],
          transition: { duration: 1, ease: 'circInOut' },
        }}
        exit={{
          scale: [1, 1.2],
          opacity: [1, 0],
          translateY: [0, 40],
          transition: { duration: 0.6, ease: 'circInOut' },
        }}
        className="mt-16 h-[220px] w-full"
      >
        <div className="flex h-full w-auto justify-center px-16">
          <Kingdom />
        </div>
      </motion.button>
    </AnimatePresence>
  );
};
