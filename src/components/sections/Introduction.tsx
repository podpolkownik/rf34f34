import React from 'react';
import { motion } from 'framer-motion';
import { User, Activity, Clock } from 'lucide-react';

export const Introduction = () => {
  const stats = [
    { icon: User, label: "Edad", value: "45 años" },
    { icon: Activity, label: "Estilo de vida", value: "Activo" },
    { icon: Clock, label: "Inicio de la historia", value: "Hace 6 meses" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <img
              src="https://sun6-21.userapi.com/impg/r4t0qeoWXvoS8fWNrtXhpVGMzBk7DRZEnEvWlA/Vw7KOM7FWag.jpg?size=1024x1024&quality=96&sign=952f3eacb6afa5061b1c765a85207a1b&type=album"
              alt="Marta Sanz Serrano"
              className="w-48 h-48 rounded-full object-cover mx-auto shadow-xl border-4 border-white"
            />
          </motion.div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Conozcan a Marta</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Una mujer activa que se enfrentó a un problema inesperado, pero encontró la fuerza no solo para superarlo, sino también para ayudar a otros.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-blue-50 p-8 rounded-xl text-center"
            >
              <stat.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <div className="text-sm text-gray-600 mb-2">{stat.label}</div>
              <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="relative">
            <img
              src="https://sun9-15.userapi.com/impg/wI6R4Z_70m-y5whOdVy-vv_QidNEVGO9mlLCmw/Mlx3fChT1F0.jpg?size=1280x720&quality=96&sign=ca43fd20603bd95404d379754e45af91&type=album"
              alt="Vida activa"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">Dolor del que no se habla: mi experiencia personal</h3>
            <div className="space-y-8">
              <div>
                <p className="text-lg font-semibold text-gray-800 mb-3">Las primeras señales de alerta aparecieron inesperadamente:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Picazón leve en la zona íntima</li>
                  <li>Incomodidad al caminar</li>
                  <li>Ligera sensación de ardor después de ir al baño</li>
                </ul>
              </div>
              
              <div>
                <p className="text-lg font-semibold text-gray-800 mb-3">Una semana después, la situación empeoró:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Gotas de sangre en el papel higiénico</li>
                  <li>Dolor agudo al ir al baño</li>
                  <li>Imposibilidad de sentarse cómodamente</li>
                  <li>Deseo constante de rascar la zona afectada</li>
                </ul>
              </div>

              <div>
                <p className="text-lg font-semibold text-gray-800 mb-3">La vida cotidiana se convirtió en un verdadero infierno:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>No podía estar sentada más de 10 minutos</li>
                  <li>Tuve que dejar de comer mi comida favorita</li>
                  <li>Miedo constante de salir de casa</li>
                  <li>Despertaba por la noche debido al dolor intenso</li>
                  <li>Empecé a usar solo ropa holgada</li>
                  <li>Apareció una depresión debido a las molestias constantes</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
