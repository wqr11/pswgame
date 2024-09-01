'use client';

import { motion } from 'framer-motion';

import {
  ResourcesTab,
  AboutTab,
  AugmentationsTab,
  LeaderboardTab,
  InDevelopmentTab,
} from '@/widgets';

import { useUnit } from 'effector-react';
import { $tab } from '@/shared/model';

import TabAnimated from './TabAnimated';

const TabSwitcher = () => {
  const tab = useUnit($tab);

  const getTab = (key: string) => {
    switch (tab) {
      case 'resources':
        return <ResourcesTab key={key} />;
      case 'augmentations':
        return <AugmentationsTab key={key} />;
      case 'leaderboard':
        return <LeaderboardTab key={key} />;
      case 'about':
        return <AboutTab key={key} />;
      case 'none':
        return;
      case undefined:
        return;
      default:
        return <InDevelopmentTab key={key} />;
    }
  };

  return <TabAnimated>{getTab('tab')}</TabAnimated>;
};

export default TabSwitcher;
