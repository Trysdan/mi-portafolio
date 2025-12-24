
import React from 'react';
import { cvData } from '../data/cvData';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 px-6 bg-white scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Experiencia Laboral</h2>
        
        <div className="space-y-12">
          {cvData.experience.map((exp, index) => (
            <div key={index} className="relative pl-8 border-l-2 border-slate-100 group">
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-slate-200 group-hover:bg-indigo-600 transition-colors border-4 border-white"></div>
              
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">{exp.position}</h3>
                  <div className="text-indigo-600 font-medium">{exp.company}</div>
                </div>
                <div className="text-sm font-semibold text-slate-400 mt-2 md:mt-0 uppercase tracking-wider">
                  {exp.start_date} — {exp.end_date}
                </div>
              </div>
              
              <div className="text-slate-600 leading-relaxed space-y-2">
                {exp.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex gap-3">
                    <span className="text-indigo-400 mt-1.5">•</span>
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
