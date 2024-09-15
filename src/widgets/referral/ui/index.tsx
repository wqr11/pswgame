"use client";

import axios, { isAxiosError } from "axios";
import { useQuery } from "@tanstack/react-query";
// import { useEffect } from "react";
// import { useParams } from "next/navigation";
import { useInitData } from "@telegram-apps/sdk-react";
// import { useTranslation } from "react-i18next";
// import { Languages } from "@/shared/utils/langTypes";

import SideQuests from "./sidequests";
import ReferralInfo from "./referralinfo";
import MainPageLink from "./mainpagelink";
import Missions from "./missions";
import CopySection from "./copysection";

import { RefsApiData } from "@/shared/entities";
import { AnimatePresence, motion } from "framer-motion";
import LoadingUIMain from "@/widgets/loading/[lang]/ui";

export const ReferallUi = () => {
  const initData = useInitData();
  const userId = initData?.user?.id;

  const { data: refsData } = useQuery({
    queryKey: ["refsQuery"],
    queryFn: async () => {
      try {
        const data: { data: RefsApiData } = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/v1/referrals/get_referrals/${userId}`
        );
        return data.data;
      } catch (error) {
        if (isAxiosError(error)) {
          throw new Error(error.message);
        }
      }
    },
  });

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
      {!!refsData && (
        <motion.div
          key="mainui"
          initial={{ opacity: 0, scale: 0.95, translateY: 10 }}
          animate={{ opacity: 1, scale: 1, translateY: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <MainPageLink />
          <CopySection copied={"sections.url.myUrl"} />
          <ReferralInfo
            // locale={locale}
            refPoints={refsData.data.referrals_points}
          />
          <Missions
            title={"sections.quests.inviteQuests.title"}
            refsData={refsData}
          />
          <SideQuests />
        </motion.div>
      )}
      {!refsData && <LoadingUIMain key="loading" />}
    </AnimatePresence>
  );
};
