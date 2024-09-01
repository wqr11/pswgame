'use client';

import { createStore, createEvent } from "effector";

import { KingdomType, TabType } from "../types";

export const setTab = createEvent<TabType>();

export const $tab = createStore<TabType>('none')
  .on(setTab, (_, data) => data);

export const setKingdom = createEvent<KingdomType>();

export const $kingdom = createStore<KingdomType | null>(null)
  .on(setKingdom, (_, data) => data);