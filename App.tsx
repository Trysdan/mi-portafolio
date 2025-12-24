
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Specialties from './components/Specialties';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Specialties />
        <Experience />
        <Skills />
      </main>
      <Footer />
    </div>
  );
};

export default App;
