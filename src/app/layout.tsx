import type { PropsWithChildren } from 'react';
import type { Metadata } from 'next';

import { Root } from '@/components/Root/Root';
import { QueryProvider } from '@/shared/utils/QueryProvider';

import '@telegram-apps/telegram-ui/dist/styles.css';
import 'normalize.css';
import './_assets/globals.css';

import { tickerbitMono } from '@/shared/ui/fonts';

export const metadata: Metadata = {
  title: 'Power Swap',
  description: "Crypto project that wants to build it's own eco system",
};

export default function MainLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body
        style={{
          color: 'white',
          backgroundColor: '#0e0e0e',
          fontFamily: tickerbitMono.style.fontFamily,
        }}
      >
        <Root>
          <QueryProvider>{children}</QueryProvider>
        </Root>
      </body>
    </html>
  );
}
