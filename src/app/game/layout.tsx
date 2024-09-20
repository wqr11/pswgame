import type { PropsWithChildren } from 'react';

import { Header, Footer } from '@/widgets';

export default function GameLayout({ children }: PropsWithChildren) {
  return (
    <div className="relative text-white overflow-hidden">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
