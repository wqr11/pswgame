'use client';

import { ResourceType } from '@/entities';

import Heat from '@/shared/ui/icons/resources/heat.svg';
import Food from '@/shared/ui/icons/resources/food.svg';
import Crypto from '@/shared/ui/icons/resources/crypto.svg';
import Energy from '@/shared/ui/icons/resources/energy.svg';

import { useUnit } from 'effector-react';
import { buyResourcesModelInputs } from '../../model';

export const ResourceButton = ({
  resource,
  size = 26,
}: {
  resource: ResourceType;
  size?: number;
}) => {
  const chosenResourceKey = useUnit(buyResourcesModelInputs.$chosenResourceKey);
  const setChosenResourceKey = useUnit(buyResourcesModelInputs.setChosenResourceKey);

  const handleClick = (e: React.PointerEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setChosenResourceKey(resource);
  };

  const icons: {
    [resourceKey in ResourceType]: React.FC<React.SVGProps<SVGElement>>;
  } = {
    crypto: Crypto,
    heat: Heat,
    food: Food,
    energy: Energy,
  };

  const Icon = icons[resource];
  return (
    <button
      style={{
        width: `${size}px`,
        height: `${size}px`,
        filter: chosenResourceKey ? 'grayscale(100%)' : 'none',
      }}
      onClick={handleClick}
    >
      <Icon />
    </button>
  );
};
