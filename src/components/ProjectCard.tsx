import React from 'react';
import { Project } from '../types';
import { useTranslation } from '../hooks/useTranslation';

type Props = {
  project: Project;
  index: number;
  onOpen: (p: Project) => void;
  lang: 'en' | 'tr';
};

const ProjectCard: React.FC<Props> = ({ project, index, onOpen, lang }) => {
  const { t } = useTranslation(lang);
  return (
    <div 
      data-project-id={index} 
      className="group relative bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer h-80"
      onClick={() => onOpen(project)}
    >
      {/* Background Image */}
      {project.image && (
        <div className="absolute inset-0 transition-all duration-500 group-hover:scale-110">
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
        </div>
      )}
      
      {/* Overlay that appears on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
        {/* Project Title */}
        <h3 className="text-xl font-bold text-white mb-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 drop-shadow-lg">
          {t(`projects.${index === 0 ? 'aiSummarizer' : index === 1 ? 'cvWebsite' : index === 2 ? 'noteTakingApp' : 'pdfChatAssistant'}.title`)}
        </h3>
        
        {/* Project Description */}
        <p className="text-white text-sm leading-relaxed mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100 drop-shadow-lg">
          {t(`projects.${index === 0 ? 'aiSummarizer' : index === 1 ? 'cvWebsite' : index === 2 ? 'noteTakingApp' : 'pdfChatAssistant'}.description`)}
        </p>
        
        {/* Technologies Used */}
        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-200">
          <h4 className="text-xs font-semibold uppercase tracking-wide text-white mb-2 drop-shadow-lg">
            {lang === 'tr' ? 'Kullanılan Teknolojiler' : 'Technologies Used'}
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((_, i) => (
              <span key={i} className="tag-overlay">
                {t(`projects.${index === 0 ? 'aiSummarizer' : index === 1 ? 'cvWebsite' : index === 2 ? 'noteTakingApp' : 'pdfChatAssistant'}.technologies`)[i]}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      {/* Initial content (visible when not hovering) */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 transition-all duration-500 group-hover:opacity-0">
        {/* Light overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none"></div>
        
        <div className="relative z-10">
          <h3 className="text-xl font-bold text-white mb-2 drop-shadow-lg">
            {t(`projects.${index === 0 ? 'aiSummarizer' : index === 1 ? 'cvWebsite' : index === 2 ? 'noteTakingApp' : 'pdfChatAssistant'}.title`)}
          </h3>
          <p className="text-gray-200 text-sm drop-shadow-lg">
            {lang === 'tr' ? 'Daha fazla bilgi için tıklayın' : 'Click to learn more'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard; 