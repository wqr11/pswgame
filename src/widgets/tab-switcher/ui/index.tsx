'use client';

import {
  ResourcesTab,
  AboutTab,
  LeaderboardTab,
  InDevelopmentTab,
} from '@/widgets';

import { useUnit } from 'effector-react';
import { $tab } from '@/shared/entities/tab';

import TabAnimated from './TabAnimated';
import { AnimatePresence } from 'framer-motion';

export const TabSwitcher = () => {
  const tab = useUnit($tab);

  const getTab = (key: string) => {
    switch (tab) {
      case 'resources':
        return <ResourcesTab key={key} />;
      case 'leaderboard':
        return <LeaderboardTab />;
      case 'about':
        return <AboutTab />;
      case 'none':
        return;
      default:
        return <InDevelopmentTab />;
    }
  };

  return (
    <AnimatePresence>
      <TabAnimated>{getTab('tab')}</TabAnimated>
    </AnimatePresence>
  );
};
