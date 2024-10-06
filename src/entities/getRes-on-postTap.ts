'use client';

import { sample } from 'effector';

import { postTapFx } from './tap';
import { $userId } from './user';
import { getResourcesFx } from './user';

sample({
  clock: [postTapFx.doneData],
  source: { userId: $userId },
  filter: ({ userId }) => !!userId,
  // @ts-ignore
  fn: ({ userId }) => ({ userId: userId }) as GetResourcesParams,
  target: getResourcesFx,
});
