import { motion } from 'framer-motion';

export function Collage({ config }) {
  if (!config.memories || config.memories.length === 0) {
    return null;
  }

  // Rotaciones aleatorias fijas por índice para efecto Polaroid
  const rotations = [-3, 2, -2, 3, -1, 2, -3, 1, -2];

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-pink-50/20 via-white to-rose-50/30 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Título de sección */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-rose-800 mb-3">
            {config.collageTitle || 'Nuestros Momentos'}
          </h2>
          <p className="text-gray-400 text-base sm:text-lg font-light">
            {config.collageSubtitle || 'Un pedacito de nosotros'}
          </p>
        </motion.div>

        {/* Grid Polaroid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {config.memories.map((memory, index) => (
            <motion.div
              key={memory.id}
              initial={{ opacity: 0, y: 40, rotate: rotations[index % rotations.length] * 2 }}
              whileInView={{ opacity: 1, y: 0, rotate: rotations[index % rotations.length] }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              whileHover={{ rotate: 0, scale: 1.05, zIndex: 10 }}
              className="relative cursor-default"
              style={{ zIndex: 1 }}
            >
              {/* Polaroid frame */}
              <div className="bg-white p-2 pb-10 sm:p-3 sm:pb-12 rounded shadow-lg hover:shadow-2xl transition-shadow duration-300">
                {/* Imagen */}
                <div className="aspect-square overflow-hidden bg-gray-100 rounded-sm relative">
                  <img
                    src={`${import.meta.env.BASE_URL}${memory.imagePath}`}
                    alt={memory.text || `Momento ${memory.id}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextElementSibling.style.display = 'flex';
                    }}
                  />
                  {/* Placeholder */}
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-rose-100 to-pink-200 flex items-center justify-center text-4xl sm:text-5xl"
                    style={{ display: 'none' }}
                  >
                    💕
                  </div>
                </div>

                {/* Caption */}
                <p className="absolute bottom-2 sm:bottom-3 left-3 right-3 text-xs sm:text-sm text-gray-500 text-center font-light truncate">
                  {memory.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
