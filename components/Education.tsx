
import React from 'react';
import { cvData } from '../data/cvData';
import { Language } from '../App';

interface EducationProps {
  lang: Language;
}

const Education: React.FC<EducationProps> = ({ lang }) => {
  return (
    <section id="education" className="py-20 px-6 bg-slate-50 scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
          {lang === 'es' ? 'Formación Académica' : 'Education'}
        </h2>
        
        <div className="grid gap-6">
          {cvData.education.map((edu, index) => {
            const degree = typeof edu.degree === 'string' ? edu.degree : edu.degree[lang];
            const area = typeof edu.area === 'string' ? edu.area : edu.area[lang];
            const endDate = typeof edu.end_date === 'string' ? edu.end_date : edu.end_date[lang];

            return (
              <div key={index} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div>
                    <div className="inline-block px-3 py-1 bg-indigo-50 text-indigo-700 text-[10px] font-black uppercase tracking-wider rounded-full mb-3">
                      {degree}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-1">{area}</h3>
                    <p className="text-indigo-600 font-medium mb-2">{edu.institution}</p>
                    <p className="text-slate-500 text-sm flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                      {edu.location}
                    </p>
                  </div>
                  <div className="text-sm font-bold text-slate-400 uppercase tracking-widest bg-slate-50 px-4 py-2 rounded-xl">
                    {edu.start_date} — {endDate}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;
