import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, Check, Star, Timer, ExternalLink } from 'lucide-react';

const CountdownTimer = () => {
  const [time, setTime] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(prevTime => {
        if (prevTime.seconds > 0) {
          return { ...prevTime, seconds: prevTime.seconds - 1 };
        } else if (prevTime.minutes > 0) {
          return { ...prevTime, minutes: prevTime.minutes - 1, seconds: 59 };
        } else if (prevTime.hours > 0) {
          return { hours: prevTime.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 23, minutes: 59, seconds: 59 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center justify-center gap-4 text-2xl font-bold">
      <div className="bg-white/20 backdrop-blur-sm p-4 rounded-lg">
        <span>{String(time.hours).padStart(2, '0')}</span>
        <span className="text-sm">hrs</span>
      </div>
      <span>:</span>
      <div className="bg-white/20 backdrop-blur-sm p-4 rounded-lg">
        <span>{String(time.minutes).padStart(2, '0')}</span>
        <span className="text-sm">min</span>
      </div>
      <span>:</span>
      <div className="bg-white/20 backdrop-blur-sm p-4 rounded-lg">
        <span>{String(time.seconds).padStart(2, '0')}</span>
        <span className="text-sm">sec</span>
      </div>
    </div>
  );
};

export const CTASection = () => (
  <section className="py-20 bg-gradient-to-br from-purple-600 via-blue-600 to-blue-800 text-white relative overflow-hidden">
    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,...')] opacity-30"></div>
    
    <motion.div 
      className="container mx-auto px-4 max-w-4xl text-center relative z-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="flex items-center justify-center gap-2 mb-4"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
      >
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-8 h-8 text-yellow-300 fill-yellow-300 animate-pulse" />
        ))}
      </motion.div>
      
      <motion.h2 
        className="text-5xl font-bold mb-8 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        Oferta Especial
      </motion.h2>
      
      <motion.div 
        className="bg-white/10 p-8 rounded-3xl backdrop-blur-lg mb-8 border border-white/20 shadow-[0_0_100px_rgba(59,130,246,0.3)]"
        initial={{ scale: 0.95, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
      >
        <div className="flex items-center justify-center gap-4 mb-6">
          <Timer className="w-8 h-8 text-yellow-300 animate-spin-slow" />
          <span className="text-2xl font-light">Tiempo restante de la oferta:</span>
        </div>

        <CountdownTimer />
        
        <div className="text-8xl font-bold mb-4 mt-8 bg-gradient-to-r from-white via-yellow-200 to-white bg-clip-text text-transparent">
          <a 
            href="https://vitacaps-hemorrhoid.fair-2sale.com/cl/2/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
          >
            <span className="text-5xl">$39,900</span> <span className="text-xl">CLP</span>
          </a>
        </div>
        <p className="text-2xl opacity-90 mb-8">Curso completo de tratamiento{' '}
          <a 
            href="https://vitacaps-hemorrhoid.fair-2sale.com/cl/2/"
            className="text-white hover:underline inline-flex items-center gap-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vitacaps 
            <ExternalLink className="w-4 h-4 text-white" />
          </a>
        </p>
        
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="flex items-center gap-3 bg-white/10 p-6 rounded-xl hover:bg-white/20 transition-all transform hover:scale-105">
            <Check className="w-8 h-8 text-green-400" />
            <span className="text-xl">Resultado rápido</span>
          </div>
          <div className="flex items-center gap-3 bg-white/10 p-6 rounded-xl hover:bg-white/20 transition-all transform hover:scale-105">
            <Check className="w-8 h-8 text-green-400" />
            <span className="text-xl">Sin efectos secundarios</span>
          </div>
          <div className="flex items-center gap-3 bg-white/10 p-6 rounded-xl hover:bg-white/20 transition-all transform hover:scale-105">
            <Check className="w-8 h-8 text-green-400" />
            <span className="text-xl">Composición natural</span>
          </div>
          <div className="flex items-center gap-3 bg-white/10 p-6 rounded-xl hover:bg-white/20 transition-all transform hover:scale-105">
            <Check className="w-8 h-8 text-green-400" />
            <span className="text-xl">Garantía de calidad</span>
          </div>
        </div>

        <motion.a 
          href="https://vitacaps-hemorrhoid.fair-2sale.com/cl/2/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-12 py-6 rounded-full text-2xl font-bold hover:from-yellow-300 hover:to-yellow-400 transition-all shadow-xl hover:shadow-2xl flex items-center mx-auto group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Ordenar ahora
          <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-2 transition-transform" />
        </motion.a>
      </motion.div>
      
      <motion.p 
        className="text-sm opacity-75"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
      >
        * La oferta es válida por tiempo limitado
      </motion.p>
    </motion.div>
  </section>
);
