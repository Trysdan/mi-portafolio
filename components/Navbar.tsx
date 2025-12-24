
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#about" className="text-xl font-black tracking-tighter text-slate-800 hover:text-indigo-600 transition-colors">
          JD<span className="text-indigo-600">.</span>
        </a>
        <div className="hidden md:flex space-x-8 text-sm font-bold uppercase tracking-widest">
          <a href="#about" className="text-slate-500 hover:text-indigo-600 transition-colors">Sobre mí</a>
          <a href="#specialties" className="text-slate-500 hover:text-indigo-600 transition-colors">Especialidades</a>
          <a href="#experience" className="text-slate-500 hover:text-indigo-600 transition-colors">Experiencia</a>
          <a href="#skills" className="text-slate-500 hover:text-indigo-600 transition-colors">Habilidades</a>
        </div>
        <div>
          <a 
            href="mailto:jesusdiaz.developer@gmail.com"
            className="bg-slate-900 text-white px-6 py-2 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-indigo-600 transition-all shadow-md hover:shadow-indigo-200 active:scale-95"
          >
            Contacto
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
