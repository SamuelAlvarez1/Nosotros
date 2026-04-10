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
      className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-12 relative overflow-hidden bg-gradient-to-br from-rose-50 via-white to-pink-100"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Background floral decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-rose-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-300 rounded-full blur-3xl"></div>
      </div>

      <motion.div variants={itemVariants} className="text-center max-w-3xl relative z-10">
        {/* Decorative elements top */}
        <motion.div
          className="mb-8 flex justify-center gap-3 text-3xl sm:text-4xl"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span>🌹</span>
          <span>💕</span>
          <span>🌹</span>
        </motion.div>

        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-rose-500 via-pink-500 to-rose-500 bg-clip-text text-transparent mb-6 leading-tight"
          variants={itemVariants}
        >
          {config.title}
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-10 font-light leading-relaxed"
          variants={itemVariants}
        >
          {config.subtitle}
        </motion.p>

        <motion.div
          className="flex gap-2 justify-center mb-8"
          variants={itemVariants}
        >
          <div className="w-16 h-1 bg-gradient-to-r from-rose-300 to-rose-500 rounded-full"></div>
          <div className="w-16 h-1 bg-gradient-to-r from-pink-300 to-pink-500 rounded-full"></div>
          <div className="w-16 h-1 bg-gradient-to-r from-rose-300 to-rose-500 rounded-full"></div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="flex flex-col items-center gap-2 mt-12"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <p className="text-gray-600 text-sm">Desliza hacia abajo</p>
          <div className="text-2xl">👇</div>
        </motion.div>
      </motion.div>

      {/* Animated hearts decoration */}
      <motion.div
        className="absolute bottom-20 left-8 text-4xl sm:text-5xl md:text-6xl"
        animate={{ y: [0, -15, 0], rotate: [0, 5, -5, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        💕
      </motion.div>

      <motion.div
        className="absolute top-20 right-8 text-4xl sm:text-5xl md:text-6xl"
        animate={{ y: [0, 15, 0], rotate: [0, -5, 5, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        🌹
      </motion.div>

      <motion.div
        className="absolute top-1/3 left-1/4 text-3xl opacity-70"
        animate={{ y: [0, -20, 0], rotate: 360 }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        ✨
      </motion.div>

      <motion.div
        className="absolute bottom-1/3 right-1/4 text-3xl opacity-70"
        animate={{ y: [0, 20, 0], rotate: -360 }}
        transition={{ duration: 7, repeat: Infinity }}
      >
        ✨
      </motion.div>
    </motion.section>
  );
};
