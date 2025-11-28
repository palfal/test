import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-zinc-950 border-t border-zinc-900">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h5 className="text-lime-400 font-bold uppercase tracking-widest mb-4">Contact Us</h5>
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Let's build <br />
              something <br />
              <span className="text-zinc-700">great.</span>
            </h2>
            
            <div className="space-y-6 mt-12">
               <a href="mailto:hello@four.studio" className="group flex items-center space-x-4 text-2xl text-white hover:text-lime-400 transition-colors">
                 <span>hello@four.studio</span>
                 <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
               </a>
               <p className="text-zinc-500 max-w-sm">
                 1209 North Orange Street,<br /> Wilmington, Delaware 19801
               </p>
            </div>
          </motion.div>

          <motion.form
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6, delay: 0.2 }}
             className="space-y-8"
             onSubmit={(e) => e.preventDefault()}
          >
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-bold text-zinc-400 uppercase tracking-wider">Name</label>
              <input 
                type="text" 
                id="name" 
                className="w-full bg-transparent border-b border-zinc-800 py-4 text-white focus:outline-none focus:border-lime-400 transition-colors text-lg placeholder-zinc-700"
                placeholder="John Doe"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-bold text-zinc-400 uppercase tracking-wider">Email</label>
              <input 
                type="email" 
                id="email" 
                className="w-full bg-transparent border-b border-zinc-800 py-4 text-white focus:outline-none focus:border-lime-400 transition-colors text-lg placeholder-zinc-700"
                placeholder="john@example.com"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-bold text-zinc-400 uppercase tracking-wider">Message</label>
              <textarea 
                id="message" 
                rows={4}
                className="w-full bg-transparent border-b border-zinc-800 py-4 text-white focus:outline-none focus:border-lime-400 transition-colors text-lg placeholder-zinc-700 resize-none"
                placeholder="Tell us about your project..."
              />
            </div>

            <button type="submit" className="w-full md:w-auto bg-white text-black px-12 py-4 font-bold uppercase tracking-widest hover:bg-lime-400 transition-colors duration-300 mt-8">
              Send Message
            </button>
          </motion.form>

        </div>
      </div>
    </section>
  );
};

export default Contact;