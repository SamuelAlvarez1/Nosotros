import { useState, useRef } from 'react';
import { motion } from 'framer-motion';

export const FinalQuestion = ({ config, onYes }) => {
  const [noButtonPos, setNoButtonPos] = useState({ x: 0, y: 0 });
  const noButtonRef = useRef(null);

  const handleNoHover = () => {
    const randomX = (Math.random() - 0.5) * 300;
    const randomY = (Math.random() - 0.5) * 200;
    setNoButtonPos({ x: randomX, y: randomY });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <motion.section
      className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-12 sm:py-16 md:py-20 bg-gradient-to-br from-rose-100 via-pink-50 to-white"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.div
        className="max-w-2xl w-full text-center"
        variants={itemVariants}
      >
        {/* Big heart emoji */}
        <motion.div
          className="text-6xl sm:text-7xl md:text-8xl mb-8"
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          💖
        </motion.div>

        {/* Main question */}
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-rose-900 mb-8 sm:mb-10 md:mb-12 leading-tight"
          variants={itemVariants}
        >
          {config.finalQuestion}
        </motion.h2>

        {/* Decorative line */}
        <motion.div
          className="w-32 h-1 bg-gradient-to-r from-rose-300 to-rose-500 rounded-full mx-auto mb-12 sm:mb-14 md:mb-16"
          variants={itemVariants}
        />

        {/* Buttons container */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 justify-center items-center relative"
          variants={itemVariants}
        >
          {/* YES Button */}
          <motion.button
            onClick={onYes}
            className="btn-primary w-full sm:w-auto min-w-max relative z-10"
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            {config.yesButtonText}
          </motion.button>

          {/* NO Button (moving) */}
          <motion.div
            ref={noButtonRef}
            animate={{
              x: noButtonPos.x,
              y: noButtonPos.y,
            }}
            transition={{
              type: 'spring',
              stiffness: 200,
              damping: 20,
            }}
            className="relative"
          >
            <button
              onMouseEnter={handleNoHover}
              onTouchStart={handleNoHover}
              className="btn-secondary w-full sm:w-auto min-w-max cursor-not-allowed opacity-70 hover:opacity-80"
              disabled
            >
              {config.noButtonText}
            </button>
          </motion.div>
        </motion.div>

        {/* Small hint text */}
        <motion.p
          className="text-gray-500 text-sm mt-6 sm:mt-8 md:mt-10 italic"
          variants={itemVariants}
        >
          (No hay opción de "no" 😉)
        </motion.p>
      </motion.div>

      {/* Background decorations */}
      <motion.div
        className="absolute top-20 left-5 sm:left-10 text-3xl sm:text-4xl"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      >
        ✨
      </motion.div>

      <motion.div
        className="absolute bottom-20 right-5 sm:right-10 text-3xl sm:text-4xl"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        🌹
      </motion.div>
    </motion.section>
  );
};
