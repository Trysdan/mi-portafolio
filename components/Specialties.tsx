
import React, { useState } from 'react';
import { CareerPath } from '../types';
import { Gamepad, Database, PenTool, Video } from './Icon';

const Specialties: React.FC = () => {
  const [activeTab, setActiveTab] = useState<CareerPath>(CareerPath.GAME_DEV);

  const tabs = [
    { id: CareerPath.GAME_DEV, icon: <Gamepad className="w-5 h-5" />, label: "Videojuegos" },
    { id: CareerPath.BACKEND, icon: <Database className="w-5 h-5" />, label: "Backend" },
    { id: CareerPath.DESIGN, icon: <PenTool className="w-5 h-5" />, label: "Diseño" },
    { id: CareerPath.EDITING, icon: <Video className="w-5 h-5" />, label: "Edición" },
  ];

  const content: Record<CareerPath, { title: string; desc: string; skills: string[] }> = {
    [CareerPath.GAME_DEV]: {
      title: "Programación de Videojuegos",
      desc: "Especializado en Unity3D y C#. Enfoque en mecánicas de juego, sistemas modulares y optimización de rendimiento.",
      skills: ["C#", "Unity3D", "SFML", "Love2D", "Documentación GDD"]
    },
    [CareerPath.BACKEND]: {
      title: "Desarrollo Backend y Sistemas",
      desc: "Arquitectura de soluciones robustas del lado del servidor y tutoría académica en principios de programación (C, C++, Python).",
      skills: ["C++", "Python", "Estructuras de Datos", "Algoritmos", "Git/GitHub"]
    },
    [CareerPath.DESIGN]: {
      title: "Diseño Digital",
      desc: "Creación de identidades visuales y materiales de marketing con alto impacto en redes sociales.",
      skills: ["Photoshop", "Illustrator", "Branding Visual", "Diseño de Layouts"]
    },
    [CareerPath.EDITING]: {
      title: "Edición de Video y Contenido",
      desc: "Producción de contenido audiovisual de alta calidad, enfocado en storytelling y engagement.",
      skills: ["CapCut", "Storyboarding", "Corrección de Color", "Tendencias RRSS"]
    }
  };

  return (
    <section id="specialties" className="py-20 px-6 bg-slate-100 scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Mis Enfoques Profesionales</h2>
          <p className="text-slate-600">Navega entre las pestañas para explorar mis diferentes áreas de experiencia.</p>
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
            <h3 className="text-2xl font-bold text-slate-900 mb-4">{content[activeTab].title}</h3>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              {content[activeTab].desc}
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
             <div className="w-full h-48 bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200 flex flex-col items-center justify-center text-slate-400">
                <div className="mb-2">
                  {activeTab === CareerPath.GAME_DEV && <Gamepad className="w-12 h-12" />}
                  {activeTab === CareerPath.BACKEND && <Database className="w-12 h-12" />}
                  {activeTab === CareerPath.DESIGN && <PenTool className="w-12 h-12" />}
                  {activeTab === CareerPath.EDITING && <Video className="w-12 h-12" />}
                </div>
                <span className="text-sm">Contenido próximamente</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specialties;
