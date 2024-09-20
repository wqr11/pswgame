'use client';

import { AnimatePresence, motion } from 'framer-motion';

import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { useUnit } from 'effector-react';
import { $refs, getRefs } from '@/entities';

import {
  Missions,
  MainPageLink,
  CopySection,
  ReferralInfo,
  LoadingUIMain,
  SideQuestsButton,
} from '@/widgets';

export const ReferralUI = () => {
  const refs = useUnit($refs);
  const getReferrals = useUnit(getRefs);

  useEffect(() => {
    getReferrals();
  }, [getReferrals]);

  const { t } = useTranslation('translation', {
    keyPrefix: 'referral.pages.main',
  });

  return (
    <AnimatePresence>
      {!!refs ? (
        <motion.div
          key="mainui"
          initial={{ opacity: 0, scale: 0.95, translateY: 10 }}
          animate={{ opacity: 1, scale: 1, translateY: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="items-center flex justify-center flex-col"
        >
          <MainPageLink />
          <CopySection copied={t('sections.url.myUrl')} />
          <ReferralInfo refPoints={refs.referrals_points} />
          <Missions
            title={t('sections.quests.inviteQuests.title')}
            refs={refs}
          />
          <SideQuestsButton />
        </motion.div>
      ) : (
        <LoadingUIMain key="loading" />
      )}
    </AnimatePresence>
  );
};
