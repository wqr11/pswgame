'use client';

import { setRTab } from '@/entities';

import GoBack from './assets/go-back.svg';

export const GoBackButton = () => {
  const handleClick = () => {
    setRTab('none');
  };

  return (
    <button
      className="transition-transform duration-75 ease-in-out active:scale-95"
      onClick={handleClick}
    >
      <GoBack />
    </button>
  );
};
