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

export const TabSwitcher = () => {
  const tab = useUnit($tab);

  const getTab = (key: string) => {
    switch (tab) {
      case 'resources':
        return <ResourcesTab />;
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

  return <TabAnimated>{getTab('tab')}</TabAnimated>;
};
