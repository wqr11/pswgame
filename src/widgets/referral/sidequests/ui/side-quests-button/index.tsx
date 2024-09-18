'use client';

import { useUnit } from 'effector-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { setRefTab, $RefTab } from '@/entities';

import SideQuestsBorder from '../assets/side-quests-border.svg?url';

// import { useTranslation } from 'react-i18next';

export const SideQuestsButton = () => {
  // const { t } = useTranslation('translation', {
  //   keyPrefix: 'pages.main.sections.quests.inviteQuests',
  // });

  const tab = useUnit($RefTab);

  const handleClick = () => {
    setRefTab(tab === 'side-quests' ? 'none' : 'side-quests');
  };

  return (
    <motion.button
      initial={{ scale: 1 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.05 }}
      className="mb-10 mt-auto"
      onClick={handleClick}
    >
      <div className="relative">
        <Image
          src={SideQuestsBorder}
          width={186}
          height={29}
          style={{ objectFit: 'fill', width: '100%', height: '29px' }}
          alt="side-quests-border"
          loading="eager"
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
