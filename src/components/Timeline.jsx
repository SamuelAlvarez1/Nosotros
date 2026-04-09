import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const MemoryCard = ({ memory, index }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'start 0.2'],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [50, 0]);

  const isPhoto = memory.type === 'photo';
  const rotation = index % 2 === 0 ? -3 : 3;

  return (
    <motion.div
      ref={ref}
      style={{ opacity, scale, y }}
      className="flex flex-col items-center mb-12 sm:mb-16 md:mb-20"
    >
      {isPhoto ? (
        // Polaroid Photo Card
        <motion.div
          className={`card-polaroid w-full max-w-xs sm:max-w-sm p-3 sm:p-4 bg-white`}
          style={{ rotate: rotation }}
          whileHover={{ rotate: 0, scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <div className="overflow-hidden rounded-sm bg-gray-100 mb-4">
            <motion.img
              src={memory.imagePath}
              alt={`Memory ${memory.id}`}
              className="w-full h-48 sm:h-56 md:h-64 object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.4 }}
              onError={(e) => {
                e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23f3f4f6" width="400" height="300"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" dy=".3em" fill="%23999" font-size="18"%3EImage placeholder%3C/text%3E%3C/svg%3E';
              }}
            />
          </div>

          <div className="space-y-2">
            <p className="text-xs sm:text-sm text-gray-500 font-light">
              {memory.date}
            </p>
            <p className="text-sm sm:text-base text-gray-800 font-light leading-relaxed">
              {memory.text}
            </p>
          </div>
        </motion.div>
      ) : (
        // Floating Sticker Card
        <motion.div
          className="w-full max-w-xs"
          animate={{ y: [0, -20, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: index * 0.2,
          }}
          whileHover={{ scale: 1.2 }}
        >
          <motion.img
            src={memory.imagePath}
            alt={`Sticker ${memory.id}`}
            className="w-32 sm:w-40 md:w-48 h-auto mx-auto drop-shadow-lg"
            onError={(e) => {
              e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"%3E%3Crect fill="%23f3f4f6" rx="20" width="200" height="200"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" dy=".3em" fill="%23999" font-size="16"%3ESticker%3C/text%3E%3C/svg%3E';
            }}
          />
          <p className="text-center mt-4 text-sm sm:text-base text-gray-700 font-light max-w-xs mx-auto px-4">
            {memory.text}
          </p>
          <p className="text-center mt-2 text-xs text-gray-500">
            {memory.date}
          </p>
        </motion.div>
      )}
    </motion.div>
  );
};

export const Timeline = ({ config }) => {
  const containerRef = useRef(null);

  return (
    <section
      ref={containerRef}
      className="min-h-screen py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-b from-white to-rose-50"
    >
      <motion.h2
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-rose-900 mb-12 sm:mb-16 md:mb-20"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Nuestros Momentos Especiales
      </motion.h2>

      <div className="max-w-2xl mx-auto">
        {/* Timeline center line */}
        <div className="absolute left-1/2 w-1 h-full bg-gradient-to-b from-rose-200 via-rose-300 to-rose-200 transform -translate-x-1/2 hidden sm:block" />

        {config.memories.map((memory, index) => (
          <MemoryCard
            key={memory.id}
            memory={memory}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};
