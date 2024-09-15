import { AboutUs } from '@/widgets';
import type { PropsWithChildren } from 'react';

export default function ReferralLayout({ children }: PropsWithChildren) {
  return (
    <>
      {children}
      <AboutUs />
    </>
  );
}
