'use client';

import { useState, useEffect, type PropsWithChildren } from 'react';

import { AboutUs, RefTabSwitcher } from '@/widgets';

import 'normalize.css';

export default function ReferralLayout({ children }: PropsWithChildren) {
  const [scale, setScale] = useState(1);
  useEffect(() => {
    const updateScale = () => {
      const viewportHeight = window.innerHeight;
      const baseHeight = 800;
      const newScale = Math.min(
        viewportHeight / baseHeight,
        parseInt(`${process.env.NEXT_PUBLIC_MAX_APP_SCALING}`)
      );
      setScale(newScale);
    };

    updateScale();
    window.addEventListener('resize', updateScale);

    return () => window.removeEventListener('resize', updateScale);
  }, []);
  return (
    <main className="mx-auto h-screen w-screen overflow-clip">
      <div
        className="relative z-30 flex size-full flex-col items-center text-center origin-top"
        style={{ scale: scale }}
      >
        {children}
      </div>
      <div className="fixed bottom-0 left-0 z-50 flex h-[80px] w-full items-center justify-center rounded-t-[20px] border-t-[1px] border-[#dcdcdce6] bg-[#0e0e0e]">
        <AboutUs />
      </div>
      <RefTabSwitcher />
    </main>
  );
}
