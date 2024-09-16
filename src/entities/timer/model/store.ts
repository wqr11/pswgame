'use client';

import { combine, createStore, createEffect, createEvent, sample } from 'effector';

import { $resourcePool } from '@/entities/resources-pool';

import { loggedIn, logout } from '@/entities/auth';

const $startTime = combine($resourcePool, pool => pool?.start_reset_time);
const $endTime = combine($resourcePool, pool => pool?.end_reset_time);
const $totalTime = combine($startTime, $endTime, (start, end) => {
  if (!!start && !!end) {
    return end - start;
  }
  throw new Error('Start OR End Timestamp for timer IS NOT known');
});
export const $estimatedTime = createStore<number>(0);

export const $timerProgress = combine($estimatedTime, $totalTime, (estimated, total) => {
  if (!!estimated && !!total) {
    return (estimated / total) * 100;
  }
  throw new Error('EstimatedTime OR TotalTime Timestamp for timer IS NOT known');
});

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
  clock: [tick, loggedIn],
  source: $endTime,
  filter: end => !!end,
  // @ts-ignore
  fn: end => end - new Date().getTime() / 1000,
  target: $estimatedTime,
});

// set timerId
sample({
  source: startTimerInterval.doneData,
  target: $timerId,
});

// start on login
sample({
  clock: loggedIn,
  target: startTimerInterval,
});

// stop on logout
sample({
  clock: logout,
  source: $timerId,
  target: stopTimerInterval,
});
