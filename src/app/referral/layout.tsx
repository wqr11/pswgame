import { AboutUs, RefTabSwitcher } from '@/widgets';
import type { PropsWithChildren } from 'react';

export default function ReferralLayout({ children }: PropsWithChildren) {
  return (
    <main>
      {children}
      <RefTabSwitcher />
      <AboutUs />
    </main>
  );
}
