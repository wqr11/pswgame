'use client';

import { AnimatePresence, motion } from 'framer-motion';

import { useEffect } from 'react';
// import { useParams } from "next/navigation";
// import { useTranslation } from "react-i18next";
// import { Languages } from "@/shared/utils/langTypes";

import { useUnit } from 'effector-react';
import { $refs, getRefsFx } from '@/entities';

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
  const getReferrals = useUnit(getRefsFx);

  useEffect(() => {
    getReferrals(99281932);
  }, [getReferrals]);

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
      {!!refs ? (
        <motion.div
          key="mainui"
          initial={{ opacity: 0, scale: 0.95, translateY: 10 }}
          animate={{ opacity: 1, scale: 1, translateY: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="items-center flex justify-center flex-col"
        >
          <MainPageLink />
          <CopySection copied={'sections.url.myUrl'} />
          <ReferralInfo
            // locale={locale}
            refPoints={refs.referrals_points}
          />
          <Missions
            title={'sections.quests.inviteQuests.title'}
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
