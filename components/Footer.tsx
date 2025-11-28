import React from 'react';
import { Instagram, Twitter, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-12 border-t border-zinc-900">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0">
          <h3 className="text-2xl font-bold text-white tracking-tighter">FOUR.</h3>
          <p className="text-zinc-600 text-sm mt-2">© {new Date().getFullYear()} Four Studio. All Rights Reserved.</p>
        </div>
        
        <div className="flex space-x-6">
           <a href="#" className="text-zinc-500 hover:text-white transition-colors"><Instagram size={20} /></a>
           <a href="#" className="text-zinc-500 hover:text-white transition-colors"><Twitter size={20} /></a>
           <a href="#" className="text-zinc-500 hover:text-white transition-colors"><Linkedin size={20} /></a>
           <a href="#" className="text-zinc-500 hover:text-white transition-colors"><Github size={20} /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;