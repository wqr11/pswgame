'use client';

import { motion } from 'framer-motion';

interface TabAnimatedProps {
  children: React.ReactNode;
  className: string;
}

export const TabAnimated = ({ children, className }: TabAnimatedProps) => (
  <motion.div
    key="tab"
    initial={{ translateY: '100%', opacity: 0.9, scale: 0.95 }}
    animate={{ translateY: ['100%', 0], opacity: [0.9, 1], scale: [1.3, 1] }}
    exit={{ translateY: [0, '100%'], opacity: [1, 0], scale: [1, 1.3] }}
    transition={{
      duration: 0.4,
      type: 'spring',
      bounce: 0.25,
    }}
    className={className}
  >
    {children}
  </motion.div>
);
