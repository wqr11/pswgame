'use client';

import { AboutUs, RefTabSwitcher } from '@/widgets';
import { useState, useEffect, type PropsWithChildren } from 'react';
import styles from '@/app-pages/referral/styles/referral.module.css';
import 'normalize.css';

export default function ReferralLayout({ children }: PropsWithChildren) {
  const [_, setScale] = useState(1);
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
    <main className="h-[100vh] w-[100vw] bg-[#0e0e0e] p-t-[29px]">
      <div
        className={`${styles.scroll} max-h-[800px] max-size-full relative z-30 flex size-full flex-col items-center overflow-x-clip text-center`}
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
