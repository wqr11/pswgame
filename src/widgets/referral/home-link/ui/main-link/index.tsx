'use client';

import { motion } from 'framer-motion';

import Paperclip from '@/shared/assets/Paperclip.svg';
import PaperclipBg from '@/shared/assets/Paperclip-bg.svg';

import { useRouter } from 'next/navigation';

import styles from './styles/mainPageLink.module.css';

export const MainPageLink = () => {
  const router = useRouter();
  return (
    <div className="relative mx-auto mt-[32px] h-[120px] w-[120px]">
      <motion.button
        initial={{ scale: 1 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.05 }}
        className={styles.main_page_button}
        onClick={(e: React.PointerEvent<HTMLButtonElement>) => {
          e.preventDefault();
          router.push(`/game`);
        }}
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
