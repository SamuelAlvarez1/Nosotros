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

  return (
    <motion.section
      className="min-h-screen flex flex-col items-center justify-center px-6 py-20 relative overflow-hidden bg-gradient-to-b from-rose-50 via-pink-50 to-rose-100"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      {/* Soft background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-rose-200/30 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-xl w-full text-center relative z-10">
        {/* Corazón grande palpitante */}
        <motion.div
          className="text-7xl sm:text-8xl md:text-9xl mb-8"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          💖
        </motion.div>

        {/* La pregunta */}
        <motion.h2
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-rose-900 mb-14 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {config.finalQuestion}
        </motion.h2>

        {/* Botones */}
        <motion.div
          className="flex flex-col gap-8 items-center relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {/* SÍ - Botón principal enorme */}
          <motion.button
            onClick={onYes}
            className="btn-yes"
            whileHover={{ scale: 1.05, boxShadow: '0 25px 50px rgba(236, 72, 153, 0.35)' }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            {config.yesButtonText}
          </motion.button>

          {/* NO - Botón que huye */}
          <motion.div
            ref={noButtonRef}
            animate={{ x: noButtonPos.x, y: noButtonPos.y }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            className="relative"
          >
            <button
              onMouseEnter={handleNoHover}
              onTouchStart={handleNoHover}
              className="btn-no-small"
              disabled
            >
              {config.noButtonText}
            </button>
          </motion.div>
        </motion.div>

        {/* Pista */}
        <motion.p
          className="text-gray-400 text-sm mt-10 italic"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2 }}
        >
          (No hay opción de "no" 😉)
        </motion.p>
      </div>
    </motion.section>
  );
};
