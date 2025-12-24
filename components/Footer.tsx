
import React from 'react';
import { cvData } from '../data/cvData';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6 bg-white border-t border-slate-100">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <div className="text-2xl font-bold text-slate-800 mb-2">
            Jesús <span className="text-indigo-600">Díaz</span>
          </div>
          <p className="text-slate-500 text-sm">{cvData.location}</p>
        </div>
        
        <div className="flex gap-8 text-sm font-medium text-slate-600">
          <a href="#" className="hover:text-indigo-600 transition-colors">Inicio</a>
          <a href="#specialties" className="hover:text-indigo-600 transition-colors">Especialidades</a>
          <a href="#experience" className="hover:text-indigo-600 transition-colors">Experiencia</a>
        </div>

        <div className="text-sm text-slate-400">
          © {new Date().getFullYear()} — Construido con React & Tailwind
        </div>
      </div>
    </footer>
  );
};

export default Footer;
