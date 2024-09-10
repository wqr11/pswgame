'use client';

import Image from 'next/image';

import { motion, AnimatePresence } from 'framer-motion';

import GrowerKingdomTier1 from './assets/kingdoms/grower/tier-1.svg?url';
import GrowerKingdomTier2 from './assets/kingdoms/grower/tier-2.svg?url';
import GrowerKingdomTier3 from './assets/kingdoms/grower/tier-3.svg?url';
import GrowerKingdomTier4 from './assets/kingdoms/grower/tier-4.svg?url';

import MinerKingdomTier1 from './assets/kingdoms/miner/tier-1.svg?url';
import MinerKingdomTier2 from './assets/kingdoms/miner/tier-2.svg?url';
import MinerKingdomTier3 from './assets/kingdoms/miner/tier-3.svg?url';
import MinerKingdomTier4 from './assets/kingdoms/miner/tier-4.svg?url';

import PowerKingdomTier1 from './assets/kingdoms/power/tier-1.svg?url';
import PowerKingdomTier2 from './assets/kingdoms/power/tier-2.svg?url';
import PowerKingdomTier3 from './assets/kingdoms/power/tier-3.svg?url';
import PowerKingdomTier4 from './assets/kingdoms/power/tier-4.svg?url';

import TraderKingdomTier1 from './assets/kingdoms/trader/tier-1.svg?url';
import TraderKingdomTier2 from './assets/kingdoms/trader/tier-2.svg?url';
import TraderKingdomTier3 from './assets/kingdoms/trader/tier-3.svg?url';
import TraderKingdomTier4 from './assets/kingdoms/trader/tier-4.svg?url';

import { KingdomTier, KingdomType } from '@/shared/entities/kingdom';

import { tap } from '@/shared/entities/tap';

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

  const kingdomSrc = kingdoms[kingdomType][kingdomTier - 1];

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="kingdom-wrapper"
        className="mt-8 flex h-fit w-full items-center justify-center"
        initial={{ scale: 1, opacity: 1 }}
        animate={{
          scale: [0.8, 1],
          opacity: [0.6, 1],
          translateY: [40, 0],
          transition: { duration: 0.3, ease: 'easeInOut' },
        }}
        exit={{
          scale: [1, 1.2],
          opacity: [1, 0],
          translateY: [0, 40],
          transition: { duration: 0.6, ease: 'circInOut' },
        }}
      >
        <motion.button
          key="kingdom"
          initial={{ scale: 1, opacity: 1 }}
          whileTap={{
            scale: 0.9,
            opacity: 0.9,
            transition: { duration: 0.03, ease: 'easeInOut' },
          }}
          onClick={() => tap()}
          className="aspect-square h-[220px]"
        >
          <div className="flex aspect-square h-[220px] w-auto items-center justify-center">
            <Image
              src={kingdomSrc}
              height={220}
              width={220}
              alt="kingdom"
              priority
            />
          </div>
        </motion.button>
      </motion.div>
    </AnimatePresence>
  );
};
