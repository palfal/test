import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Work from './components/Work';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-zinc-950 min-h-screen text-zinc-100 selection:bg-lime-400 selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Work />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;