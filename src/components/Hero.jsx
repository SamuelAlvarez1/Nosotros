import { motion } from 'framer-motion';

export const Hero = ({ config }) => {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <motion.section
      className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 bg-gradient-to-br from-rose-50 via-white to-pink-50"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={itemVariants} className="text-center max-w-2xl">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-rose-900 mb-6"
          variants={itemVariants}
        >
          {config.title}
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl text-gray-600 mb-8 font-light"
          variants={itemVariants}
        >
          {config.subtitle}
        </motion.p>

        <motion.div
          className="w-24 h-1 bg-gradient-to-r from-rose-300 to-rose-500 rounded-full mx-auto"
          variants={itemVariants}
        />
      </motion.div>

      {/* Animated hearts decoration */}
      <motion.div
        className="absolute bottom-10 left-10 text-4xl sm:text-5xl"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        💕
      </motion.div>

      <motion.div
        className="absolute top-20 right-10 text-3xl sm:text-4xl"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        🌹
      </motion.div>
    </motion.section>
  );
};
