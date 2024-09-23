'use client';

import { ResourceType } from '@/entities';

import { useUnit } from 'effector-react';
import { buyResourcesModelInputs } from '../../model';

export const ResourceButton = ({
  resource,
  icon,
  size = 26,
}: {
  resource: ResourceType;
  icon: React.FC<React.SVGProps<SVGElement>>;
  size?: number;
}) => {
  const chosenResourceKey = useUnit(buyResourcesModelInputs.$chosenResourceKey);
  const setChosenResourceKey = useUnit(buyResourcesModelInputs.setChosenResourceKey);

  const handleClick = (e: React.PointerEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setChosenResourceKey(resource);
  };

  const Icon = icon;
  return (
    <button
      style={{ width: `${size}px`, height: `${size}px` }}
      onClick={handleClick}
    >
      <Icon color={chosenResourceKey !== resource ? 'white' : undefined} />
    </button>
  );
};
