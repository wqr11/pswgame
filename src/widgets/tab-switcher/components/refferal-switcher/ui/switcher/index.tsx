'use client';

import { AnimatePresence } from 'framer-motion';

import { ReferralAboutTab, InDevelopmentTabReferral } from '@/widgets';

import { useUnit } from 'effector-react';
import { $refTab, ReferralTabType } from '@/entities';

export const RefTabSwitcher = () => {
  const tab = useUnit($refTab);

  const getTab = (tab: ReferralTabType) => {
    switch (tab) {
      case 'about':
        return <ReferralAboutTab />;
      // case 'side-quests':
      //   return <SideQuests />;
      case 'none':
        return null;
      default:
        return <InDevelopmentTabReferral />;
    }
  };

  return <AnimatePresence>{getTab(tab)}</AnimatePresence>;
};
