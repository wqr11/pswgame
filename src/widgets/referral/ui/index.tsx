'use client';

import { AnimatePresence, motion } from 'framer-motion';

// import { useEffect } from "react";
// import { useParams } from "next/navigation";
// import { useTranslation } from "react-i18next";
// import { Languages } from "@/shared/utils/langTypes";

import SideQuests from './sidequests';
import ReferralInfo from './referralinfo';
import MainPageLink from './mainpagelink';
import Missions from './missions';
import CopySection from './copysection';

import { useUnit } from 'effector-react';
import { $refs } from '@/shared/entities/referrals';

import LoadingUIMain from '@/widgets/loading/[lang]/ui';

export const ReferallUi = () => {
  const refs = useUnit($refs);

  // @ts-ignore
  // const params: {
  //   params: Languages;
  // } = useParams();

  // const { t, i18n } = useTranslation("translation", {
  //   keyPrefix: "pages.main",
  // });

  // useEffect(() => {
  //   // @ts-ignore
  //   i18n.changeLanguage(params.lang);
  // }, []);

  return (
    <AnimatePresence>
      {!!refs && (
        <motion.div
          key="mainui"
          initial={{ opacity: 0, scale: 0.95, translateY: 10 }}
          animate={{ opacity: 1, scale: 1, translateY: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <MainPageLink />
          <CopySection copied={'sections.url.myUrl'} />
          <ReferralInfo
            // locale={locale}
            refPoints={refs.referrals_points}
          />
          <Missions title={'sections.quests.inviteQuests.title'} refs={refs} />
          <SideQuests />
        </motion.div>
      )}
      {!refs && <LoadingUIMain key="loading" />}
    </AnimatePresence>
  );
};
