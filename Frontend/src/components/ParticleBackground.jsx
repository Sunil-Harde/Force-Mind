import { useEffect } from 'react';
import { motion } from 'framer-motion';

const ParticleBackground = () => {
  const particles = Array(30).fill(0);

  const particleVariants = {
    initial: {
      opacity: 0,
      y: -100,
    },
    animate: (i) => ({
      opacity: [0, 0.3, 0],
      y: [0, Math.random() * 200 - 100],
      x: [0, Math.random() * 100 - 50],
      transition: {
        duration: Math.random() * 10 + 10,
        repeat: Infinity,
        repeatType: 'reverse',
        delay: i * 0.5,
      },
    }),
  };

  return (
    <div className=" absolute inset-0 overflow-hidden pointer-events-none ">
      {particles.map((_, i) => (
        <motion.div
          key={i}
          custom={i}
          variants={particleVariants}
          initial="initial"
          animate="animate"
          className="absolute rounded-full bg-primary"
          style={{
            width: Math.random() * 5 + 1,
            height: Math.random() * 5 + 1,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
  );
};

export default ParticleBackground;