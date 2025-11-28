import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';

const Work: React.FC = () => {
  return (
    <section id="work" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">Selected Work</h2>
          <p className="text-zinc-500 max-w-2xl mx-auto">
            A curated collection of projects that define our approach to design and digital storytelling.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-[300px]">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative group overflow-hidden rounded-xl bg-zinc-900 cursor-pointer border border-transparent hover:border-lime-400/50 transition-colors duration-500 ${
                project.size === 'large' ? 'md:col-span-2' : 
                project.size === 'tall' ? 'md:row-span-2' : ''
              }`}
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />
              
              <div className="absolute inset-0 flex flex-col justify-end p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="overflow-hidden">
                  <span className="inline-block text-lime-400 text-sm font-bold uppercase tracking-wider mb-2 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 delay-100">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
            <button className="px-10 py-4 border border-zinc-800 text-white font-bold tracking-widest uppercase hover:bg-lime-400 hover:text-black hover:border-lime-400 transition-all duration-300">
                View All Projects
            </button>
        </div>
      </div>
    </section>
  );
};

export default Work;