'use client';

import { useUnit } from 'effector-react';
import { buyResourcesModelInputs } from '../../model';

export const BuyResourceButton = () => {
  const toggleModal = useUnit(buyResourcesModelInputs.toggleModal);

  return (
    <button
      className="flex items-center justify-center active:opacity-40"
      onClick={toggleModal}
    >
      <div className="border-[2px] border-white p-2">BUY</div>
    </button>
  );
};
