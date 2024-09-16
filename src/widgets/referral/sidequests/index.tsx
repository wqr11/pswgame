'use client';

import { motion } from 'framer-motion';

// import { setTab } from "@/shared/model";

import Image from 'next/image';

// import { useTranslation } from 'react-i18next';

export const SideQuests = () => {
  // const { t } = useTranslation('translation', {
  //   keyPrefix: 'pages.main.sections.quests.inviteQuests',
  // });

  // const handleClick = () => {
  //   setTab("side-quests");
  // };

  return (
    <motion.button
      initial={{ scale: 1 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.05 }}
      className="mb-10 mt-auto"
      // onClick={handleClick}
    >
      <div className="relative">
        <Image
          src="/pages/main/quests/side-quests-border.svg"
          width={186}
          height={29}
          style={{ objectFit: 'fill', width: '100%', height: '29px' }}
          alt="side-quests-border"
          priority
        />
        <h6 className="absolute left-0 top-0 w-full text-lg uppercase text-[#FFE350]">
          {/* {t("sideQuestsButton")} */}
          {/* {t('soon')} */}
          Soon
        </h6>
      </div>
    </motion.button>
  );
};
