'use client';

import { motion } from 'framer-motion';
import { setRefTab } from '@/entities';

import Paperclip from '@/assets/pages/main/Paperclip.svg';

import PaperclipBg from '@/assets/pages/main/PaperclipBg.svg';

import styles from './styles/mainPageLink.module.css';

export const PageLink = () => {
  const handleClick = () => {
    setRefTab('none');
  };

  return (
    <div className="relative mx-auto mt-[32px] h-[120px] w-[120px]">
      <motion.button
        initial={{ scale: 1 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.05 }}
        className={styles.main_page_button}
        onClick={handleClick}
      >
        <Paperclip />
        <div className="absolute left-0 top-0 -z-10">
          <div className="relative">
            <span className={`${styles.glitch} absolute left-0 top-0`}>
              <Paperclip />
            </span>
            <span className={`${styles.glitch} absolute left-0 top-0`}>
              <Paperclip />
            </span>
            <span className={`${styles.glitch} absolute left-0 top-0`}>
              <Paperclip />
            </span>
          </div>
          <PaperclipBg />
        </div>
      </motion.button>
    </div>
  );
};
