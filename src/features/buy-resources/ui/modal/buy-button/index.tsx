'use client';

import { useUnit } from 'effector-react';
import { buyResourcesModel, buyResourcesModelInputs } from '@/features/buy-resources';

export const ResourceBuyButton = () => {
  const buyResources = useUnit(buyResourcesModel.buyResourcesFromPool);
  const toggleModal = useUnit(buyResourcesModelInputs.toggleModal);

  const handleClick = (e: React.PointerEvent<HTMLButtonElement>) => {
    e.preventDefault();
    buyResources();
    toggleModal();
  };

  return (
    <button
      className="mx-auto flex items-center justify-center border-[2px] border-white px-4 py-2 text-lg uppercase text-white"
      onClick={handleClick}
    >
      Take order
    </button>
  );
};
