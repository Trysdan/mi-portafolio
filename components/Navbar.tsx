
import React from 'react';
import { Language } from '../App';

interface NavbarProps {
  lang: Language;
  setLang: (l: Language) => void;
}

const Navbar: React.FC<NavbarProps> = ({ lang, setLang }) => {
  const labels = {
    es: { about: 'Sobre mí', spec: 'Especialidades', proj: 'Proyectos', exp: 'Experiencia', edu: 'Educación', skill: 'Habilidades', contact: 'Contacto' },
    en: { about: 'About', spec: 'Specialties', proj: 'Projects', exp: 'Experience', edu: 'Education', skill: 'Skills', contact: 'Contact' }
  };

  const l = labels[lang];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#about" className="text-xl font-black tracking-tighter text-slate-800 hover:text-indigo-600 transition-colors">
          JD<span className="text-indigo-600">.</span>
        </a>
        <div className="hidden lg:flex space-x-6 text-[11px] font-black uppercase tracking-widest">
          <a href="#about" className="text-slate-500 hover:text-indigo-600 transition-colors">{l.about}</a>
          <a href="#specialties" className="text-slate-500 hover:text-indigo-600 transition-colors">{l.spec}</a>
          <a href="#projects" className="text-slate-500 hover:text-indigo-600 transition-colors">{l.proj}</a>
          <a href="#experience" className="text-slate-500 hover:text-indigo-600 transition-colors">{l.exp}</a>
          <a href="#education" className="text-slate-500 hover:text-indigo-600 transition-colors">{l.edu}</a>
          <a href="#skills" className="text-slate-500 hover:text-indigo-600 transition-colors">{l.skill}</a>
        </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
            className="text-[10px] font-black tracking-widest px-3 py-1 bg-slate-100 rounded-lg hover:bg-indigo-100 transition-colors uppercase border border-slate-200"
          >
            {lang === 'es' ? 'EN' : 'ES'}
          </button>
          <a 
            href="mailto:jesusdiaz.developer@gmail.com"
            className="bg-slate-900 text-white px-6 py-2 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-indigo-600 transition-all shadow-md hover:shadow-indigo-200 active:scale-95"
          >
            {l.contact}
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
