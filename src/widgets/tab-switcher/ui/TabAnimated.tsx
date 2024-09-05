'use client';

import { motion } from 'framer-motion';

const TabAnimated = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ translateY: '100%', opacity: 0.8 }}
      animate={{
        translateY: 0,
        opacity: 1,
      }}
      transition={{ duration: 0.5, ease: 'circInOut' }}
      exit={{ translateY: '100%', opacity: 0.8 }}
    >
      {children}
    </motion.div>
  );
};

export default TabAnimated;
