'use client';

import { AnimatePresence } from 'framer-motion';

import { ReferralAboutTab, InDevelopmentTab, SideQuests } from '@/widgets';

import { useUnit } from 'effector-react';
import { $RefTab, ReferralTabType } from '@/entities';

export const RefTabSwitcher = () => {
  const tab = useUnit($RefTab);

  const getTab = (tab: ReferralTabType) => {
    switch (tab) {
      case 'about':
        return <ReferralAboutTab />;
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
