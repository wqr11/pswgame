'use client';

import { useState, useEffect, type PropsWithChildren } from 'react';
import { AboutUs, RefTabSwitcher, ExitButton } from '@/widgets';

import Queen from '@/shared/assets/queen.svg';

import { useUnit } from 'effector-react';
import { sRedirect } from '@/entities';

import styles from '@/shared/ui/styles/referall-tab/referral.module.css';

import 'normalize.css/normalize.css';

export default function ReferralLayout({ children }: PropsWithChildren) {
  const [scale, setScale] = useState(1);

  const redirect = useUnit(sRedirect);

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
    <main className="h-[100vh] w-[100vw] relative text-white overflow-hidden">
      <div className="relative mx-auto h-screen w-screen overflow-y-hidden">
        <div
          className="origin-top"
          style={{
            transform: `scale(${scale})`,
          }}
        >
          <div
            className={`${styles.scroll} max-size-full relative z-30 flex size-full flex-col items-center overflow-x-clip text-center`}
          >
            {children}
          </div>
        </div>
        <RefTabSwitcher />
        <div className="fixed bottom-0 left-0 z-50 flex h-[80px] w-full items-center justify-center rounded-t-[20px] border-t-[1px] border-[#dcdcdce6] bg-[#0e0e0e]">
          <AboutUs />
        </div>
        <button
          onClick={() => redirect('game')}
          className="fixed left-8 top-7 z-50 size-[64px]"
        >
          <Queen />
        </button>
        <div className="fixed right-8 top-7 z-50 flex w-full flex-row-reverse">
          <ExitButton />
        </div>
      </div>
    </main>
  );
}
