'use client';

// import { Languages } from "@/shared/utils/langTypes";

import { useRouter } from 'next/navigation';

import PaperclipBig from '@/shared/assets/paperclip-big.svg';

export const MainPageLink = () => {
  const router = useRouter();

  return (
    <button
      className="transition-transform duration-75 ease-in-out active:scale-95"
      onClick={(e: React.PointerEvent<HTMLButtonElement>) => {
        e.preventDefault();
        router.push(`/game`);
      }}
    >
      <PaperclipBig />
    </button>
  );
};
