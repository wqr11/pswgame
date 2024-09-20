'use client';

import { createEffect } from 'effector';

import { LastOpenedPageType } from '@/entities/user';

export const sRedirect = createEffect<LastOpenedPageType, LastOpenedPageType, Error>(
  (page: LastOpenedPageType) => {
    window.location.href = `/${page}`;
    return page;
  }
);
