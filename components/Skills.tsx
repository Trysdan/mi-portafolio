
import React from 'react';
import { cvData } from '../data/cvData';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 px-6 bg-slate-900 text-white scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Arsenal Técnico</h2>
          <p className="text-slate-400">Una lista detallada de herramientas y lenguajes que domino.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {cvData.skills.map((skill, index) => (
            <div key={index} className="p-8 rounded-3xl bg-slate-800 border border-slate-700 hover:border-indigo-500 transition-colors">
              <h3 className="text-indigo-400 font-bold uppercase tracking-widest text-sm mb-6">{skill.label}</h3>
              <div className="flex flex-wrap gap-3">
                {skill.details.split(', ').map((item) => (
                  <span key={item} className="px-4 py-2 bg-slate-700 rounded-xl text-sm font-medium hover:bg-slate-600 transition-colors">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
