'use client';

import { ResourcesTab, AboutTab, LeaderboardTab, InDevelopmentTab } from '@/widgets';

import { useUnit } from 'effector-react';
import { $tab } from '@/entities/tab';

import { AnimatePresence } from 'framer-motion';

export const TabSwitcher = () => {
  const tab = useUnit($tab);

  const getTab = (tab: string) => {
    switch (tab) {
      case 'resources':
        return <ResourcesTab />;
      case 'leaderboard':
        return <LeaderboardTab />;
      case 'about':
        return <AboutTab />;
      case 'none':
        return null;
      default:
        return <InDevelopmentTab />;
    }
  };

  return (
    <AnimatePresence
      mode="popLayout"
      initial={false}
    >
      {getTab(tab)}
    </AnimatePresence>
  );
};
