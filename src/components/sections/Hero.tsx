import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ChevronDown } from 'lucide-react';

export const Hero = () => {
  // Función para desplazamiento suave
  const smoothScroll = () => {
    const scrollDistance = window.innerHeight; // Desplazamiento hacia abajo una pantalla
    let scrollPosition = window.scrollY;
    const targetPosition = scrollPosition + scrollDistance;

    const scrollStep = (timestamp) => {
      const currentTime = timestamp || 0;
      const timeElapsed = currentTime - startTime;

      // Aumentar el desplazamiento proporcionalmente
      const scrollProgress = easeInOutQuad(timeElapsed, scrollPosition, scrollDistance, 500);

      window.scrollTo(0, scrollProgress);

      if (timeElapsed < 500) {
        window.requestAnimationFrame(scrollStep);
      }
    };

    const easeInOutQuad = (t, b, c, d) => {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };

    const startTime = performance.now();
    window.requestAnimationFrame(scrollStep);
  };

  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden w-full">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 overflow-hidden w-full"></div>
      <div className="absolute inset-0 bg-black/50 overflow-hidden w-full"></div>
      <div className="absolute inset-0 overflow-hidden w-full">
        <img 
          src="https://sun9-28.userapi.com/impg/P2V_1NOmZXCphbKEdUKY0TEM94wnoVWMfqRD3A/Ie5TtO2XOpI.jpg?size=1280x720&quality=96&sign=ab40f026e8c4ec09cd61032c9d2d1e7a&type=album"
          alt="Fondo"
          className="w-full h-full object-cover opacity-40"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center overflow-hidden w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <Heart className="w-16 h-16 text-blue-400 mx-auto mb-8" />
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Camino hacia la salud
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8">
            La historia de Marta Sanz Serrano, quien cambió su vida a los 43 años
          </p>
          <motion.button
            onClick={smoothScroll} // Llamar a la función de desplazamiento al hacer clic
            className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-8 py-4 rounded-full hover:from-yellow-300 hover:to-yellow-400 transition-all shadow-xl hover:shadow-2xl font-bold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Leer la historia
            <Heart className="w-5 h-5" />
          </motion.button>

          <motion.div 
            className="mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChevronDown className="w-8 h-8 text-yellow-400 mx-auto" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent w-full"></div>
    </section>
  );
};
