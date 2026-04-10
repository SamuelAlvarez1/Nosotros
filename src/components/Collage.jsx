import { motion } from 'framer-motion';

export function Collage({ config }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, rotate: -5 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  if (!config.memories || config.memories.length === 0) {
    return null;
  }

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white via-rose-50/30 to-pink-50/20">
      <div className="max-w-6xl mx-auto">
        {/* Título decorativo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-rose-400 via-pink-400 to-rose-500 bg-clip-text text-transparent mb-4">
            Nuestros Momentos Especiales
          </h2>
          <div className="flex justify-center gap-2 text-2xl">
            <span>💕</span>
            <span>✨</span>
            <span>💕</span>
          </div>
        </motion.div>

        {/* Grid de imágenes tipo collage */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[250px]"
        >
          {config.memories.map((memory, index) => {
            // Variar tamaños para efecto de collage más dinámico
            const sizeClasses = [
              'col-span-1 row-span-1',
              'col-span-2 row-span-1 md:col-span-1 md:row-span-2',
              'col-span-1 row-span-1',
              'col-span-1 row-span-2 md:col-span-1 md:row-span-1',
              'col-span-1 row-span-1',
              'col-span-2 md:col-span-2 row-span-1',
              'col-span-1 row-span-1',
              'col-span-1 row-span-1',
              'col-span-2 md:col-span-1 row-span-1',
            ];

            const sizeClass = sizeClasses[index % sizeClasses.length];

            return (
              <motion.div
                key={memory.id}
                variants={itemVariants}
                className={`${sizeClass} relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300`}
              >
                {/* Imagen de fondo */}
                <img
                  src={`${import.meta.env.BASE_URL}${memory.imagePath}`}
                  alt={`Memory ${memory.id}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />

                {/* Placeholder si falla la imagen */}
                <div
                  className="absolute inset-0 bg-gradient-to-br from-rose-200 via-pink-200 to-rose-300 flex items-center justify-center text-4xl"
                  style={{ display: 'none' }}
                >
                  💕
                </div>

                {/* Overlay con texto */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-4 text-white">
                  {memory.date && (
                    <p className="text-sm font-semibold mb-2">📅 {memory.date}</p>
                  )}
                  {memory.text && (
                    <p className="text-sm line-clamp-3">{memory.text}</p>
                  )}
                </div>

                {/* Marco tipo Polaroid para fotos */}
                {memory.type === 'photo' && (
                  <div className="absolute inset-0 border-8 border-white/30 pointer-events-none rounded-xl" />
                )}

                {/* Decoración de stickers */}
                {memory.type === 'sticker' && (
                  <div className="absolute -top-2 -right-2 text-3xl animate-bounce">
                    ✨
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* Decoración de flores flotantes */}
        <div className="absolute top-20 left-10 text-4xl opacity-20 animate-float">
          🌹
        </div>
        <div className="absolute bottom-40 right-10 text-4xl opacity-20 animate-float" style={{ animationDelay: '2s' }}>
          🌸
        </div>
      </div>
    </section>
  );
}
