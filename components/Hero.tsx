
import React from 'react';
import { cvData } from '../data/cvData';
import { Language } from '../App';
import { GithubIcon, LinkedinIcon, Gamepad, Database, CodeIcon, LayersIcon } from './Icon';

interface HeroProps {
  lang: Language;
}

const Hero: React.FC<HeroProps> = ({ lang }) => {
  const labels = {
    es: { 
      availability: 'Disponible para nuevos proyectos', 
      download: 'Descargar CV', 
      dev: 'Programación', 
      games: 'Videojuegos', 
      back: 'Backend', 
      multi: 'Multimedia',
      cvFile: 'Jesus_Daniel_Diaz_Perez_CV_ES.pdf'
    },
    en: { 
      availability: 'Available for new projects', 
      download: 'Download CV', 
      dev: 'Programming', 
      games: 'Games', 
      back: 'Backend', 
      multi: 'Multimedia',
      cvFile: 'Jesus_Daniel_Diaz_Perez_CV_EN.pdf'
    }
  };

  const l = labels[lang];

  return (
    <section id="about" className="pt-40 pb-24 px-6 scroll-mt-20">
      <div className="max-w-6xl mx-auto text-center flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-5 py-2 mb-10 text-[10px] md:text-xs font-black tracking-[0.15em] text-emerald-600 uppercase bg-emerald-50/50 rounded-full border border-emerald-100">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          {l.availability}
        </div>

        <h1 className="mb-10 tracking-tighter leading-tight select-none text-center">
          <div className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-[95px] font-black flex flex-wrap justify-center gap-x-4">
            <span className="text-slate-900">Jesús Daniel</span>
            <span className="text-indigo-600">Díaz Pérez</span>
          </div>
        </h1>

        <p className="text-xl md:text-2xl font-medium text-slate-500 mb-8 max-w-3xl mx-auto italic">
          "{cvData.headline[lang]}"
        </p>

        <p className="text-lg text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
          {cvData.professional_summary[lang][0]}
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-20">
          {cvData.social_networks.map((social) => (
            <a 
              key={social.network}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-4 bg-white border border-slate-200 rounded-2xl hover:border-indigo-600 hover:text-indigo-600 hover:shadow-2xl transition-all text-slate-700 font-bold active:scale-95"
            >
              {social.network === 'GitHub' ? <GithubIcon className="w-5 h-5" /> : <LinkedinIcon className="w-5 h-5" />}
              {social.network}
            </a>
          ))}
          <a 
            href={`/${l.cvFile}`}
            download={l.cvFile}
            className="flex items-center gap-2 px-8 py-4 bg-slate-900 text-white border border-slate-900 rounded-2xl hover:bg-indigo-600 hover:border-indigo-600 hover:shadow-2xl transition-all font-bold active:scale-95"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            {l.download}
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-5xl">
          <SpecialtyCard id="specialties" Icon={CodeIcon} title="C# / C++" sub={l.dev} />
          <SpecialtyCard id="specialties" Icon={Gamepad} title="Unity3D" sub={l.games} />
          <SpecialtyCard id="specialties" Icon={Database} title="Python" sub={l.back} />
          <SpecialtyCard id="specialties" Icon={LayersIcon} title="Ps / CapCut" sub={l.multi} />
        </div>
      </div>
    </section>
  );
};

const SpecialtyCard = ({ id, Icon, title, sub }: any) => (
  <a href={`#${id}`} className="flex flex-col items-center p-8 bg-white rounded-3xl shadow-sm border border-slate-100 hover:border-indigo-600 hover:shadow-xl transition-all group relative overflow-hidden">
    <div className="absolute top-0 right-0 p-2 opacity-5 group-hover:opacity-10 transition-opacity">
       <Icon className="w-16 h-16" />
    </div>
    <Icon className="w-10 h-10 text-indigo-500 mb-4 group-hover:scale-110 transition-transform" />
    <div className="text-xl font-bold text-slate-800 mb-1">{title}</div>
    <div className="text-[10px] text-slate-400 uppercase tracking-[0.2em] font-black">{sub}</div>
  </a>
);

export default Hero;
