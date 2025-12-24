
import React from 'react';
import { cvData } from '../data/cvData';
import { Language } from '../App';

interface FooterProps {
  lang: Language;
}

const Footer: React.FC<FooterProps> = ({ lang }) => {
  const labels = {
    es: { home: 'Inicio', spec: 'Especialidades', exp: 'Experiencia', built: 'Construido con' },
    en: { home: 'Home', spec: 'Specialties', exp: 'Experience', built: 'Built with' }
  };
  const l = labels[lang];

  return (
    <footer className="py-16 px-6 bg-slate-50 border-t border-slate-200">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-12">
          <div className="text-center md:text-left">
            <div className="text-3xl font-black text-slate-800 mb-4 tracking-tighter">
              Jesús <span className="text-indigo-600">Díaz</span>
            </div>
            <p className="text-slate-500 text-sm mb-6">{cvData.location}</p>
            <div className="flex gap-4 justify-center md:justify-start">
              {cvData.custom_connections.map((conn) => (
                <a 
                  key={conn.fontawesome_icon}
                  href={conn.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-indigo-600 transition-colors text-xs font-bold uppercase tracking-widest"
                >
                  {conn.fontawesome_icon}
                </a>
              ))}
            </div>
          </div>
          
          <div className="flex gap-12 text-xs font-black uppercase tracking-widest text-slate-600">
            <div className="flex flex-col gap-4">
              <a href="#" className="hover:text-indigo-600 transition-colors">{l.home}</a>
              <a href="#specialties" className="hover:text-indigo-600 transition-colors">{l.spec}</a>
            </div>
            <div className="flex flex-col gap-4">
              <a href="#experience" className="hover:text-indigo-600 transition-colors">{l.exp}</a>
              <a href="mailto:jesusdiaz.developer@gmail.com" className="hover:text-indigo-600 transition-colors">Email</a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 text-center text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">
          © {new Date().getFullYear()} — {l.built} React & Tailwind
        </div>
      </div>
    </footer>
  );
};

export default Footer;
