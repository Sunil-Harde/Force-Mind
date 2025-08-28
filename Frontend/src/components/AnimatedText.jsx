import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const AnimatedText = ({ text, className = '' }) => {
  const words = text.split(' ');


  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const child = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.04 * i + 2.2,
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    }),
  };

  return (
    <motion.div
      className={`flex flex-wrap overflow-hidden ${className}`}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="mr-2"
          variants={child}
          custom={index} // 👈 use custom index for delay
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedText;
