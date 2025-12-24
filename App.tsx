
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Specialties from './components/Specialties';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Footer from './components/Footer';

export type Language = 'en' | 'es';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('es');

  return (
    <div className="min-h-screen">
      <Navbar lang={lang} setLang={setLang} />
      <main>
        <Hero lang={lang} />
        <Specialties lang={lang} />
        <Projects lang={lang} />
        <Experience lang={lang} />
        <Education lang={lang} />
        <Skills lang={lang} />
      </main>
      <Footer lang={lang} />
    </div>
  );
};

export default App;
