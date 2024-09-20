'use client';

import { createEffect, sample } from 'effector';
import { LastOpenedPageType, $lastOpenedPage } from '@/entities';
import { useRouter } from 'next/navigation';

export const sRedirect = createEffect<LastOpenedPageType, LastOpenedPageType, Error>(
  (page: LastOpenedPageType) => {
    const router = useRouter();
    router.push(`/${page}`);
    return page;
  }
);

sample({
  clock: sRedirect.doneData,
  target: $lastOpenedPage,
});
