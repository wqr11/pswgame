'use client';

import { motion } from 'framer-motion';

import { useUnit } from 'effector-react';
import { $appScale } from '@/features/scaler/model/store';

export const TabAnimatedGame = (props: { children?: React.ReactNode; className: string }) => {
  const scale = useUnit($appScale);

  return (
    <motion.div
      key="tab"
      initial={{ translateY: '100%' }}
      animate={{ translateY: ['100%', 0], opacity: [0.4, 1], scale: [1.3, 1] }}
      exit={{ translateY: [0, '100%'], opacity: [1, 0], scale: [1, 1.3] }}
      transition={{
        duration: 0.4,
        type: 'spring',
        bounce: 0.15,
      }}
      className={props.className}
    >
      <div style={{ scale }}>{props.children}</div>
    </motion.div>
  );
};
