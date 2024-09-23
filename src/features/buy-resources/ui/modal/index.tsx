'use client';

import { motion } from 'framer-motion';

import { useEffect } from 'react';

import Heat from '@/shared/ui/icons/resources/heat.svg';
import Food from '@/shared/ui/icons/resources/food.svg';
import Crypto from '@/shared/ui/icons/resources/crypto.svg';
import Energy from '@/shared/ui/icons/resources/energy.svg';

import { ResourceButton } from '../resource';

import { useUnit } from 'effector-react';
import { buyResourcesModelInputs } from '../../model';
import { ResourceBuySlider } from '../slider';

export const BuyResourceModal = () => {
  const buyResourceAmount = useUnit(buyResourcesModelInputs.$buyResourceAmount);
  const chosenResourceKey = useUnit(buyResourcesModelInputs.$chosenResourceKey);
  const toggleModal = useUnit(buyResourcesModelInputs.toggleModal);

  useEffect(() => {
    window.addEventListener('blur', () => {
      toggleModal();
    });

    return () => {
      window.removeEventListener('blur', () => {
        toggleModal();
      });
    };
  }, []);

  useEffect(() => {
    console.log(buyResourceAmount, chosenResourceKey);
  }, [buyResourceAmount, chosenResourceKey]);

  return (
    <motion.div
      initial={{ translateY: '100%' }}
      animate={{ translateY: ['100%', 0], opacity: [0.4, 1], scale: [1.3, 1] }}
      exit={{ translateY: [0, '100%'], opacity: [1, 0], scale: [1, 1.3] }}
      transition={{
        duration: 0.4,
        type: 'spring',
        bounce: 0.15,
      }}
      className="fixed top-[calc(50%-300px)] z-50 flex h-[300px] w-full items-start bg-[#0e0e0e] opacity-[0.98]"
    >
      <div className="flex size-full flex-col items-center justify-evenly border-[1px] border-white">
        <div className="mx-auto mt-2 flex size-fit gap-4 border-[3px] border-white px-2 py-1">
          <ResourceButton
            icon={Crypto}
            resource="crypto"
          />
          <ResourceButton
            icon={Energy}
            resource="energy"
          />
          <ResourceButton
            icon={Food}
            resource="food"
          />
          <ResourceButton
            icon={Heat}
            resource="heat"
          />
        </div>
        <ResourceBuySlider />
      </div>
    </motion.div>
  );
};
