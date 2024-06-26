// client/src/components/AnimatedComponent.js
import React from 'react';
import { motion } from 'framer-motion';

const AnimatedComponent = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1>Welcome to NewsApp</h1>
    </motion.div>
  );
};

export default AnimatedComponent;
