'use client';

import { motion } from 'framer-motion';

import { useUnit } from 'effector-react';
import { $RefTab } from '@/entities';
import { setRefTab } from '@/entities';

import styles from '../styles/AboutUs.module.css';

export const AboutUs = () => {
  const tab = useUnit($RefTab);

  const handleClick = () => {
    setRefTab(tab === 'about' ? 'none' : 'about');
  };

  return (
    <motion.button
      initial={{ scale: 1 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.05 }}
      className="h-full w-fit px-16"
      onClick={handleClick}
    >
      <h6 className={`${styles.about_us} text-base font-normal uppercase`}>О нас</h6>
    </motion.button>
  );
};
