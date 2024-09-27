'use client';

import { motion } from 'framer-motion';

import { useEffect, useRef } from 'react';

import { ResourceBuySlider } from '../slider';
import { ResourcesPrice } from './resources-price';
import { ResourcesAmount } from './resources-amount';

import { useUnit } from 'effector-react';
import { buyResourcesModelInputs } from '../../model';
import { ResourcesList } from './resources-list';
import { ResourceBuyButton } from './buy-button';

export const BuyResourceModal = () => {
  const buyResourceAmount = useUnit(buyResourcesModelInputs.$buyResourceAmount);
  const chosenResourceKey = useUnit(buyResourcesModelInputs.$chosenResourceKey);
  const toggleModal = useUnit(buyResourcesModelInputs.toggleModal);

  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (modalRef.current) {
      modalRef.current.addEventListener('blur', () => {
        toggleModal();
      });
    }

    return () => {
      if (modalRef.current) {
        modalRef.current.removeEventListener('blur', () => {
          toggleModal();
        });
      }
    };
  }, [modalRef]);

  useEffect(() => {
    console.log(buyResourceAmount, chosenResourceKey);
  }, [buyResourceAmount, chosenResourceKey]);

  return (
    <motion.div
      ref={modalRef}
      initial={{ translateY: '100%' }}
      animate={{ translateY: ['100%', 0], opacity: [0.4, 0.95], scale: [1.3, 1] }}
      exit={{ translateY: [0, '100%'], opacity: [0.95, 0], scale: [1, 1.3] }}
      transition={{
        duration: 0.4,
        type: 'spring',
        bounce: 0.15,
      }}
      className="fixed left-0 top-[42px] z-50 flex h-[300px] w-full items-start bg-[#0e0e0e] px-[5%]"
    >
      <div className="flex size-full flex-col items-center justify-evenly border-[1px] border-white">
        <ResourcesList />
        <ResourcesPrice />
        <ResourcesAmount />
        <ResourceBuySlider />
        <ResourceBuyButton />
      </div>
    </motion.div>
  );
};
