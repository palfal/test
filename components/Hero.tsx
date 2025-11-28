import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Layers, Palette, MousePointer2, PenTool, Move3d } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-zinc-950 pt-20">
      {/* Background Gradients */}
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-lime-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px]" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_80%)] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-left relative z-20"
        >
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "80px" }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="h-1 bg-lime-400 mb-8"
          />
          <h1 className="text-6xl md:text-8xl font-bold leading-none tracking-tighter mb-6 text-white">
            WE ARE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-green-300">
              FOUR
            </span>.
          </h1>
          <p className="text-xl text-zinc-400 max-w-md leading-relaxed mb-8">
            A digital design collective crafting functional, beautiful, and human-centered experiences for the modern web.
          </p>
          <div className="flex gap-4">
             <a href="#work" className="px-8 py-3 bg-lime-400 text-black font-bold uppercase tracking-wider hover:bg-lime-500 transition-all transform hover:translate-y-[-2px] hover:shadow-[0_0_20px_rgba(163,230,53,0.4)]">
               View Work
             </a>
             <a href="#contact" className="px-8 py-3 border border-zinc-700 text-white font-bold uppercase tracking-wider hover:bg-zinc-800 transition-all">
               Get in touch
             </a>
          </div>
        </motion.div>

        {/* Animated Creative Elements */}
        <div className="relative h-[400px] md:h-[600px] w-full flex items-center justify-center perspective-1000">
          
          {/* Main Rotating Hub */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="relative w-80 h-80 border border-zinc-800/60 rounded-full flex items-center justify-center"
          >
             <div className="w-60 h-60 border border-dashed border-zinc-700/50 rounded-full" />
             {/* Orbiting Satellite */}
             <div className="absolute w-3 h-3 bg-lime-400 rounded-full top-0 left-1/2 -translate-x-1/2 shadow-[0_0_15px_rgba(163,230,53,0.8)]" />
          </motion.div>

          {/* Floating UI: Layers Panel */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: [-10, 10, -10], opacity: 1 }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
            className="absolute top-[20%] right-4 md:right-12 w-48 bg-zinc-900/80 backdrop-blur-md border border-zinc-700/50 p-4 rounded-xl shadow-2xl z-20"
          >
            <div className="flex items-center gap-2 mb-3 border-b border-zinc-800 pb-2">
                <Layers size={14} className="text-lime-400" />
                <span className="text-[10px] text-zinc-400 font-mono uppercase tracking-widest">Layers</span>
            </div>
            <div className="space-y-2">
                <div className="h-8 w-full bg-zinc-800 rounded flex items-center px-2 gap-2 border border-zinc-700">
                    <div className="w-2 h-2 rounded-full bg-purple-500" />
                    <div className="h-1.5 w-20 bg-zinc-600 rounded-full" />
                </div>
                <div className="h-8 w-full bg-zinc-800/50 rounded flex items-center px-2 gap-2 border border-zinc-700/50">
                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                    <div className="h-1.5 w-12 bg-zinc-600 rounded-full" />
                </div>
            </div>
          </motion.div>

          {/* Floating UI: Color Palette */}
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: [10, -10, 10], opacity: 1 }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute bottom-[20%] left-0 md:left-8 w-40 bg-zinc-900/80 backdrop-blur-md border border-zinc-700/50 p-3 rounded-xl shadow-2xl z-30"
          >
             <div className="flex items-center gap-2 mb-3">
                <Palette size={14} className="text-purple-400" />
                <span className="text-[10px] text-zinc-400 font-mono uppercase tracking-widest">Palette</span>
            </div>
             <div className="grid grid-cols-2 gap-2">
               <div className="h-12 rounded-lg bg-lime-400 shadow-lg shadow-lime-400/20" />
               <div className="h-12 rounded-lg bg-purple-600" />
               <div className="h-12 rounded-lg bg-zinc-100" />
               <div className="h-12 rounded-lg bg-zinc-800 border border-zinc-700" />
             </div>
          </motion.div>

          {/* Floating Tool Icons */}
          <motion.div
            animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 left-10 p-3 bg-zinc-800 rounded-full border border-zinc-700 text-lime-400 z-10"
          >
             <PenTool size={20} />
          </motion.div>

           <motion.div
            animate={{ x: [0, -15, 0], y: [0, 15, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-32 right-10 p-3 bg-zinc-800 rounded-full border border-zinc-700 text-purple-400 z-10"
          >
             <Move3d size={20} />
          </motion.div>

          {/* Cursor Animation */}
          <motion.div
             animate={{ 
               x: [0, 120, 60, 0], 
               y: [0, -80, 40, 0] 
             }}
             transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
             className="absolute top-1/2 left-1/2 z-40 pointer-events-none"
          >
              <MousePointer2 className="text-white drop-shadow-xl fill-black stroke-[1.5px]" size={28} />
              <div className="ml-5 mt-1 px-3 py-1 bg-lime-400 text-black text-[10px] font-bold rounded-full shadow-lg">
                  Designer
              </div>
          </motion.div>

          {/* Big Number Background */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] md:text-[25rem] font-bold text-zinc-900 pointer-events-none select-none -z-10"
          >
            4
          </motion.div>
        </div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-zinc-500"
      >
        <ArrowDown size={24} />
      </motion.div>
    </section>
  );
};

export default Hero;