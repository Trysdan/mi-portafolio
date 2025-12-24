
import React from 'react';
import { cvData } from '../data/cvData';
import { Language } from '../App';
import { GithubIcon, ExternalLink, Folder } from './Icon';

interface ProjectsProps {
  lang: Language;
}

const Projects: React.FC<ProjectsProps> = ({ lang }) => {
  const labels = {
    es: { title: "Proyectos Destacados", subtitle: "Una selección de mis trabajos más recientes en desarrollo y sistemas.", viewCode: "Ver Código", viewLive: "Demo" },
    en: { title: "Featured Projects", subtitle: "A curated selection of my latest work in development and systems.", viewCode: "Code", viewLive: "Live Demo" }
  };

  const l = labels[lang];

  return (
    <section id="projects" className="py-24 px-6 bg-white scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center md:text-left">
          <h2 className="text-4xl font-black text-slate-900 mb-4">{l.title}</h2>
          <p className="text-lg text-slate-500 max-w-2xl">{l.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {cvData.projects.map((project, index) => (
            <div key={index} className="group relative bg-slate-50 rounded-[2.5rem] p-8 border border-slate-100 hover:border-indigo-200 transition-all hover:shadow-2xl hover:shadow-indigo-100 overflow-hidden">
              <div className="flex justify-between items-start mb-8">
                <div className="p-4 bg-white rounded-2xl shadow-sm group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  <Folder className="w-8 h-8" />
                </div>
                <div className="flex gap-4">
                  {project.github_url && (
                    <a href={project.github_url} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-indigo-600 transition-colors">
                      <GithubIcon className="w-6 h-6" />
                    </a>
                  )}
                  {project.live_url && (
                    <a href={project.live_url} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-indigo-600 transition-colors">
                      <ExternalLink className="w-6 h-6" />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-indigo-600 transition-colors">{project.title}</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">
                {project.description[lang]}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-4 py-1.5 bg-white border border-slate-200 rounded-full text-xs font-bold text-slate-500 uppercase tracking-wider group-hover:border-indigo-100 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors">
                    {tag}
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

export default Projects;
