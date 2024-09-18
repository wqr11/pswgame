'use client';

import { combine, createStore, createEffect, createEvent, sample } from 'effector';

import { $resourcePool, getResourcePool, resetResourcePool, logout } from '@/entities';

const $startTime = combine($resourcePool, pool => pool?.start_reset_time ?? 0);
const $endTime = combine($resourcePool, pool => pool?.end_reset_time ?? 0);
const $totalTime = combine($startTime, $endTime, (start, end) => end - start);

export const $estimatedTime = createStore<number>(0);
export const $timerProgress = combine(
  $estimatedTime,
  $totalTime,
  (estimated, total) => Math.floor(estimated / total) * 100
);

const tick = createEvent<void>();

const startTimerInterval = createEffect<void, NodeJS.Timeout, void>(() => {
  return setInterval(tick, 1000);
});

const stopTimerInterval = createEffect<NodeJS.Timeout | null, void, void>(
  async (timerId: NodeJS.Timeout | null) => {
    if (timerId) {
      clearInterval(timerId);
    }
  }
);

const $timerId = createStore<NodeJS.Timeout | null>(null);

// set estimated time on tick and login
sample({
  clock: [tick, getResourcePool.doneData],
  source: $endTime,
  filter: end => !!end,
  // @ts-ignore
  fn: end => {
    if (end - Math.floor(new Date().getTime() / 1000) >= 0) {
      return end - Math.floor(new Date().getTime() / 1000);
    }
    return 0;
  },
  target: $estimatedTime,
});

// start on get timestamps
sample({
  clock: getResourcePool.doneData,
  target: startTimerInterval,
});

// set timerId
sample({
  source: startTimerInterval.doneData,
  target: $timerId,
});

// update resources-pool when time's up
sample({
  source: $estimatedTime,
  filter: estimated => estimated === 0,
  target: [resetResourcePool, getResourcePool],
});

// stop on logout
sample({
  clock: logout,
  source: $timerId,
  target: stopTimerInterval,
});