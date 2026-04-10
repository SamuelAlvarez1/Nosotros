import { motion } from 'framer-motion';

export const Hero = ({ config }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: 'easeOut' },
    },
  };

  return (
    <motion.section
      className="min-h-screen flex flex-col items-center justify-center px-6 py-16 relative overflow-hidden bg-gradient-to-b from-rose-50 via-white to-pink-50"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Soft background blurs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[400px] h-[400px] bg-rose-200/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] bg-pink-200/40 rounded-full blur-3xl"></div>
      </div>

      <motion.div variants={itemVariants} className="text-center max-w-2xl relative z-10">
        {/* Corazón animado */}
        <motion.div
          className="text-6xl sm:text-7xl mb-10"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          💕
        </motion.div>

        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-rose-800 mb-6 leading-tight"
          variants={itemVariants}
        >
          {config.title}
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl text-gray-500 mb-12 font-light leading-relaxed"
          variants={itemVariants}
        >
          {config.subtitle}
        </motion.p>

        {/* Scroll indicator */}
        <motion.div
          className="flex flex-col items-center gap-2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          variants={itemVariants}
        >
          <p className="text-gray-400 text-sm tracking-wide">Desliza hacia abajo</p>
          <div className="text-xl text-gray-400">↓</div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};
