'use client';

import { AboutTab, InDevelopmentTab, SideQuests } from '@/widgets';

import { useUnit } from 'effector-react';
import { $Rtab } from '@/entities';

import { AnimatePresence } from 'framer-motion';

export const RTabSwitcher = () => {
  const tab = useUnit($Rtab);

  const getTab = (tab: string) => {
    switch (tab) {
      case 'about':
        return <AboutTab />;
      case 'side-quest':
        return <SideQuests />;
      case 'none':
        return null;
      default:
        return <InDevelopmentTab />;
    }
  };

  return <AnimatePresence>{getTab(tab)}</AnimatePresence>;
};
