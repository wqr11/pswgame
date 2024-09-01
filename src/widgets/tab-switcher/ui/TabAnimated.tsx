'use client';

import { AnimatePresence, motion } from 'framer-motion';

const TabAnimated = ({ children }: { children: React.ReactNode }) => {
  return (
    <AnimatePresence>
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
    </AnimatePresence>
  );
};

export default TabAnimated;
