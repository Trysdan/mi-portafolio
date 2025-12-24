
import React, { useState } from 'react';
import { CareerPath } from '../types';
import { Language } from '../App';
import { Gamepad, Database, PenTool, Video } from './Icon';

interface SpecialtiesProps {
  lang: Language;
}

const Specialties: React.FC<SpecialtiesProps> = ({ lang }) => {
  const [activeTab, setActiveTab] = useState<CareerPath>(CareerPath.GAME_DEV);

  const labels = {
    es: { title: "Mis Enfoques Profesionales", desc: "Navega entre las pestañas para explorar mis diferentes áreas de experiencia.", game: "Videojuegos", back: "Backend", design: "Diseño", edit: "Edición" },
    en: { title: "My Professional Focus", desc: "Browse through the tabs to explore my different areas of expertise.", game: "Game Dev", back: "Backend", design: "Design", edit: "Editing" }
  };

  const l = labels[lang];

  const tabs = [
    { id: CareerPath.GAME_DEV, icon: <Gamepad className="w-5 h-5" />, label: l.game },
    { id: CareerPath.BACKEND, icon: <Database className="w-5 h-5" />, label: l.back },
    { id: CareerPath.DESIGN, icon: <PenTool className="w-5 h-5" />, label: l.design },
    { id: CareerPath.EDITING, icon: <Video className="w-5 h-5" />, label: l.edit },
  ];

  const content: Record<CareerPath, { title: { en: string; es: string }; desc: { en: string; es: string }; skills: string[] }> = {
    [CareerPath.GAME_DEV]: {
      title: { en: "Game Development", es: "Programación de Videojuegos" },
      desc: { en: "Specialized in Unity3D and C#. Focus on gameplay mechanics, modular systems, and performance optimization.", es: "Especializado en Unity3D y C#. Enfoque en mecánicas de juego, sistemas modulares y optimización de rendimiento." },
      skills: ["C#", "Unity3D", "SFML", "Love2D", "GDD Documentation"]
    },
    [CareerPath.BACKEND]: {
      title: { en: "Backend & Systems", es: "Desarrollo Backend y Sistemas" },
      desc: { en: "Architecting robust server-side solutions and academic mentoring in programming principles.", es: "Arquitectura de soluciones robustas del lado del servidor y tutoría académica en principios de programación (C, C++, Python)." },
      skills: ["C++", "Python", "Data Structures", "Algorithms", "Git/GitHub"]
    },
    [CareerPath.DESIGN]: {
      title: { en: "Digital Design", es: "Diseño Digital" },
      desc: { en: "Creation of visual identities and marketing materials with high impact on social networks.", es: "Creación de identidades visuales y materiales de marketing con alto impacto en redes sociales." },
      skills: ["Photoshop", "Illustrator", "Visual Branding", "Layout Design"]
    },
    [CareerPath.EDITING]: {
      title: { en: "Video & Content Editing", es: "Edición de Video y Contenido" },
      desc: { en: "Production of high-quality audiovisual content, focused on storytelling and engagement.", es: "Producción de contenido audiovisual de alta calidad, enfocado en storytelling y engagement." },
      skills: ["CapCut", "Storyboarding", "Color Correction", "Social Media Trends"]
    }
  };

  return (
    <section id="specialties" className="py-20 px-6 bg-slate-100 scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">{l.title}</h2>
          <p className="text-slate-600">{l.desc}</p>
        </div>

        <div className="bg-white rounded-3xl p-2 shadow-sm border border-slate-200 mb-8 flex flex-wrap gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 flex items-center justify-center gap-3 py-3 px-6 rounded-2xl transition-all font-medium ${
                activeTab === tab.id 
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-200" 
                  : "text-slate-600 hover:bg-slate-50"
              }`}
            >
              {tab.icon}
              <span className="hidden sm:inline">{tab.label}</span>
            </button>
          ))}
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-200 min-h-[300px] flex flex-col md:flex-row gap-12 animate-fadeIn">
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">{content[activeTab].title[lang]}</h3>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              {content[activeTab].desc[lang]}
            </p>
            <div className="flex flex-wrap gap-2">
              {content[activeTab].skills.map((skill) => (
                <span key={skill} className="px-3 py-1 bg-indigo-50 text-indigo-700 text-xs font-bold uppercase rounded-md">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="md:w-1/3 flex items-center justify-center">
             <div className="w-full h-48 bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200 flex flex-col items-center justify-center text-slate-400 group hover:border-indigo-300 transition-colors">
                <div className="mb-2">
                  {activeTab === CareerPath.GAME_DEV && <Gamepad className="w-12 h-12 text-indigo-500" />}
                  {activeTab === CareerPath.BACKEND && <Database className="w-12 h-12 text-indigo-500" />}
                  {activeTab === CareerPath.DESIGN && <PenTool className="w-12 h-12 text-indigo-500" />}
                  {activeTab === CareerPath.EDITING && <Video className="w-12 h-12 text-indigo-500" />}
                </div>
                <span className="text-sm font-bold text-slate-500">{activeTab.replace('_', ' ')}</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specialties;
