import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ReviewCard from './ReviewCard';

const reviews = [
  {
    name: "Juan Carlos Pérez",
    date: "hace 4 días",
    image: "https://sun9-26.userapi.com/impg/lpQ6hNwR752pFnNibh_3h1KUCfJlYDBg5Qr1VA/YOsVpiM-xYI.jpg?size=736x736&quality=96&sign=dd729b60bd5a52d36ea34da41508a5d0&type=album",
    text: "Vitacaps me ayudó a superar el malestar que me impedía llevar una vida activa. ¡Un gran remedio con una composición natural!",
    rating: 5,
  },
  {
    name: "María Jiménez",
    date: "hace 3 días",
    image: "https://sun9-40.userapi.com/impg/tnv-9s_z7tUqpmeeJOwmLrOnJiBU6c0uWzOA6Q/M-Tutnhm63M.jpg?size=736x736&quality=96&sign=91666027b4a5a99a37a7bbf12b208122&type=album",
    text: "Con Vitacaps pude volver a mi vida habitual. Ahora el malestar y el dolor son cosa del pasado.",
    rating: 4,
  },
  {
    name: "Carlos Ortega",
    date: "hace 6 días",
    image: "https://sun9-60.userapi.com/impg/hcq2OyGID-LVZqpc4RFYZ7RthiaCQ2GEoxMXUQ/dEDNApOvb7c.jpg?size=736x736&quality=96&sign=6e2b351b1ef013c2c46c873a7be0a161&type=album",
    text: "Después de buscar mucho, encontré Vitacaps: ¡el remedio realmente funciona! Muy recomendable.",
    rating: 5,
  },
  {
    name: "Ana López",
    date: "hace 5 días",
    image: "https://sun9-75.userapi.com/impg/AmjGMLD5e43y4_ZERCFhYJUUzia_WGTBQIoAhA/nZ4GVaeRiX4.jpg?size=736x736&quality=96&sign=49a2f92b399a1fb48b670f515accb81c&type=album",
    text: "La composición natural y la ausencia de efectos secundarios eran factores importantes para mí. ¡Vitacaps funcionó de maravilla!",
    rating: 5,
  },
  {
    name: "Roberto González",
    date: "hace 3 días",
    image: "https://sun9-16.userapi.com/impg/rtcikau-Vf6XMUxhadMB_iHa4ipNaNz9Mw4Aag/hyiIxSEGx9Y.jpg?size=1024x1024&quality=96&sign=a4ecce19a72d198b508c67650648d638&type=album",
    text: "Vitacaps ayudó a resolver el problema en pocas semanas. ¡Muchas gracias por este remedio!",
    rating: 4,
  },
  {
    name: "Lucía Fuentes",
    date: "hace 2 días",
    image: "https://sun9-59.userapi.com/impg/zdKaEej6dQbeDSC3-U_wrS6T--h1bYCjDSknuw/a_psc-KavB0.jpg?size=736x736&quality=96&sign=cce26bae4d64e6b25625b4fbecf4bc00&type=album",
    text: "Después de la primera semana de uso, noté mejoras. El dolor desapareció, me siento bien de nuevo.",
    rating: 5,
  },
  {
    name: "Felipe Vargas",
    date: "hoy",
    image: "https://sun9-26.userapi.com/impg/LCBtdjBhJT97LiqnqstbYIdUIAa1DakjPQDCIg/CYkOLiuj33o.jpg?size=751x751&quality=96&sign=d3931cae661815c315fab4db6b1dc541&type=album",
    text: "Este remedio cambió mi vida para mejor. Me olvidé de lo que es el malestar constante.",
    rating: 5,
  }
];

const CustomerReviews: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const [comment, setComment] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const displayedReviews = showAll ? reviews : reviews.slice(0, 3);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setComment('');
    setEmail('');
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white relative">
      {isSubmitted && (
        <div className="fixed top-4 right-4 p-4 bg-lime-500 text-white font-semibold rounded-md shadow-lg z-50">
          Comentario enviado para moderación
        </div>
      )}

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Reseñas de nuestros clientes
          </h2>
          <p className="text-sm text-gray-600">
            Descubre lo que dicen las personas sobre su experiencia usando Vitacaps
          </p>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {displayedReviews.map((review) => (
              <ReviewCard key={review.name} review={review} />
            ))}
          </AnimatePresence>
        </motion.div>

        {reviews.length > 3 && (
          <motion.div 
            layout
            className="text-center mt-6"
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center px-6 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
            >
              {showAll ? 'Mostrar menos' : 'Ver más reseñas'}
            </button>
          </motion.div>
        )}

        {showAll && (
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Dejar un comentario
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4 bg-gray-100 p-6 rounded-md shadow-md">
              <input
                type="email"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Tu correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <textarea
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Escribe tu comentario aquí..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                required
              />
              <button
                type="submit"
                className="w-full inline-flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-200"
              >
                Enviar
              </button>
            </form>
          </div>
        )}
      </div>
    </section>
  );
};

export default CustomerReviews;
