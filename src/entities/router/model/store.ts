'use client';

import { createEffect, sample } from 'effector';

import { LastOpenedPageType, $lastOpenedPage } from '@/entities';

export const sRedirect = createEffect<LastOpenedPageType, LastOpenedPageType, Error>(
  (page: LastOpenedPageType) => {
    window.location.href = `/${page}`;
    return page;
  }
);

sample({
  clock: sRedirect.doneData,
  target: $lastOpenedPage,
});
