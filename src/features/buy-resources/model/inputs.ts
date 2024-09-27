'use client';

import { createStore, createEvent, sample } from 'effector';

import { ResourceType, $tab } from '@/entities';

export const toggleModal = createEvent<void>();
export const $modalShown = createStore<boolean>(false).on(toggleModal, state => !state);

export const setResourceBuyAmount = createEvent<number>();
export const $buyResourceAmount = createStore<number>(0).on(
  setResourceBuyAmount,
  (_, range) => range
);

export const setChosenResourceKey = createEvent<ResourceType>();
export const $chosenResourceKey = createStore<ResourceType | null>(null).on(
  setChosenResourceKey,
  (_, resource) => resource
);

// close the modal on tab change
sample({
  clock: $tab,
  fn: () => false,
  target: $modalShown,
});
