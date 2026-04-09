import { useEffect } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';

export const SuccessScreen = ({ config }) => {
  useEffect(() => {
    // Trigger confetti animation
    const duration = 3000;
    const animationEnd = Date.now() + duration;

    const randomInRange = (min, max) => Math.random() * (max - min) + min;

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        clearInterval(interval);
        return;
      }

      const particleCount = 50 * (timeLeft / duration);

      // Launch confetti from center
      confetti({
        particleCount,
        angle: randomInRange(55, 125),
        spread: randomInRange(50, 70),
        origin: { x: 0.5, y: 0.5 },
        startVelocity: randomInRange(10, 20),
        decay: randomInRange(0.75, 0.95),
        gravity: randomInRange(0.5, 1),
        colors: ['#ec4899', '#f472b6', '#fbcfe8', '#fce7f3', '#fff'],
      });
    }, 250);

    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <motion.section
      className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-12 sm:py-16 md:py-20 bg-gradient-to-br from-rose-50 via-white to-pink-100"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="max-w-2xl w-full text-center">
        {/* Celebration emojis */}
        <div className="flex justify-center gap-4 sm:gap-6 mb-8 sm:mb-10 md:mb-12 text-4xl sm:text-5xl md:text-6xl">
          <motion.div
            animate={{ y: [0, -20, 0], rotate: [0, 10, -10, 0] }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              repeatDelay: 1,
            }}
          >
            💕
          </motion.div>
          <motion.div
            animate={{ y: [0, -20, 0], rotate: [0, -10, 10, 0] }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              repeatDelay: 1.2,
            }}
          >
            🎉
          </motion.div>
          <motion.div
            animate={{ y: [0, -20, 0], rotate: [0, 10, -10, 0] }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              repeatDelay: 1.4,
            }}
          >
            ✨
          </motion.div>
        </div>

        {/* Success message */}
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent mb-4 sm:mb-6 md:mb-8"
          variants={itemVariants}
        >
          {config.successMessage}
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-8 sm:mb-10 md:mb-12 font-light"
          variants={itemVariants}
        >
          {config.successSubtitle}
        </motion.p>

        {/* Decorative divider */}
        <motion.div
          className="w-24 h-1 bg-gradient-to-r from-rose-300 to-rose-500 rounded-full mx-auto mb-10 sm:mb-12 md:mb-14"
          variants={itemVariants}
        />

        {/* Final image if available */}
        {config.finalImagePath && (
          <motion.div
            className="mb-10 sm:mb-12 md:mb-14"
            variants={itemVariants}
          >
            <motion.div
              className="rounded-xl overflow-hidden shadow-2xl"
              whileHover={{ scale: 1.05, rotateZ: 2 }}
              transition={{ duration: 0.4 }}
            >
              <img
                src={config.finalImagePath}
                alt="Us Together"
                className="w-full h-64 sm:h-80 md:h-96 object-cover"
                onError={(e) => {
                  e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"%3E%3Crect fill="%23f3f4f6" width="400" height="400"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" dy=".3em" fill="%23999" font-size="20"%3EUltimate moment%3C/text%3E%3C/svg%3E';
                }}
              />
            </motion.div>
          </motion.div>
        )}

        {/* Additional message */}
        <motion.div
          className="bg-rose-50 border-2 border-rose-200 rounded-xl p-6 sm:p-8 md:p-10"
          variants={itemVariants}
        >
          <p className="text-gray-800 text-base sm:text-lg md:text-xl leading-relaxed">
            Aquí es donde comienza nuestro nuevo capítulo juntos. Te quiero infinitamente. 💫
          </p>
        </motion.div>

        {/* Floating elements */}
        <motion.div
          className="absolute top-10 sm:top-20 left-5 sm:left-10 text-3xl sm:text-4xl"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          🌹
        </motion.div>

        <motion.div
          className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 text-3xl sm:text-4xl"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
        >
          💐
        </motion.div>
      </motion.div>
    </motion.section>
  );
};
