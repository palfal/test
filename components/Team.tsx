import React from 'react';
import { motion } from 'framer-motion';
import { TEAM } from '../constants';

const Team: React.FC = () => {
  return (
    <section id="team" className="py-24 bg-zinc-950 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-lime-500/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">The Minds Behind <span className="text-lime-400">Four</span></h2>
          <div className="h-1 w-20 bg-lime-400" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              <div className="relative overflow-hidden rounded-lg aspect-[3/4] mb-6 border border-zinc-800 group-hover:border-lime-400/50 transition-colors duration-500">
                 {/* Grayscale to color on hover effect */}
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="flex items-end justify-between border-b border-zinc-800 pb-4 group-hover:border-lime-400 transition-colors duration-300">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-lime-400 transition-colors duration-300">{member.name}</h3>
                  <p className="text-sm text-zinc-500 group-hover:text-zinc-400 transition-colors">{member.role}</p>
                </div>
                <div className="w-2 h-2 rounded-full bg-zinc-800 group-hover:bg-lime-400 transition-colors duration-300 shadow-[0_0_10px_rgba(163,230,53,0)] group-hover:shadow-[0_0_10px_rgba(163,230,53,0.8)]" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;