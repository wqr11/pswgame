'use client';

import { createStore, createEffect } from 'effector';

import { getResources } from '../resources';
import { getLeaders } from '../leaderboard';

export const initialize = createEffect(async () => {
  const resources = await getResources();
  const leaders = await getLeaders();

  if (resources && leaders) {
    console.log(resources);
    return true;
  }
  return false;
});

export const $init = createStore<boolean>(false).on(
  initialize.doneData,
  (_, init) => init,
);
