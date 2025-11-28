import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-zinc-950 border-t border-zinc-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
           <motion.div
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
           >
             <h4 className="text-lime-400 font-bold uppercase tracking-widest mb-2">Capabilities</h4>
             <h2 className="text-4xl md:text-5xl font-bold text-white">What We Do</h2>
           </motion.div>
           <motion.p 
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6, delay: 0.2 }}
             className="text-zinc-400 max-w-md mt-6 md:mt-0"
           >
             We combine strategy, design, and technology to build brands that lead their categories.
           </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 border border-zinc-900 bg-zinc-900/30 hover:bg-zinc-900 hover:border-lime-400/30 transition-all duration-300 rounded-lg"
            >
              <div className="w-12 h-12 bg-zinc-800 rounded-lg flex items-center justify-center mb-6 group-hover:bg-lime-400 group-hover:text-black transition-colors duration-300">
                <service.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed group-hover:text-zinc-300">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;