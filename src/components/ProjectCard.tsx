import React, { useState } from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { FaGithub, FaTimes, FaExternalLinkAlt } from 'react-icons/fa';

type Props = {
  project: any;
  index: number;
  onOpen: (p: any) => void;
  lang: 'en' | 'tr';
};

const ProjectCard: React.FC<Props> = ({ project, index, onOpen, lang }) => {
  const { t } = useTranslation(lang);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div 
        data-project-id={index} 
        className="group relative bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer h-80"
        onClick={openModal}
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
            {project.title}
          </h3>
          
          {/* Click to learn more text */}
          <p className="text-white text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100 drop-shadow-lg">
            {lang === 'tr' ? 'Daha fazla bilgi için tıklayın' : 'Click to learn more'}
          </p>
        </div>
        
        {/* Initial content (visible when not hovering) */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 transition-all duration-500 group-hover:opacity-0">
          {/* Light overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none"></div>
          
          <div className="relative z-10">
            <h3 className="text-xl font-bold text-white mb-2 drop-shadow-lg">
              {project.title}
            </h3>
            <p className="text-gray-200 text-sm drop-shadow-lg">
              {lang === 'tr' ? 'Daha fazla bilgi için tıklayın' : 'Click to learn more'}
            </p>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="relative">
              {project.image && (
                <div className="w-full h-48 bg-gray-100 flex items-center justify-center overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              )}
              <button
                onClick={closeModal}
                className="absolute top-3 right-3 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-2 transition-all duration-200"
              >
                <FaTimes className="text-gray-600" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {/* Project Title and Category */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-2xl font-bold text-gray-900">{project.title}</h2>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Description */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {lang === 'tr' ? 'Proje Açıklaması' : 'Project Description'}
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm">
                  {project.description}
                </p>
              </div>

              {/* Highlights */}
              {project.highlights && project.highlights.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {lang === 'tr' ? 'Öne Çıkan Özellikler' : 'Key Features'}
                  </h3>
                  <ul className="grid grid-cols-1 gap-1">
                    {project.highlights.map((highlight: string, i: number) => (
                      <li key={i} className="flex items-center gap-2 text-gray-700 text-sm">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Technologies */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {lang === 'tr' ? 'Kullanılan Teknolojiler' : 'Technologies Used'}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech: string, i: number) => (
                    <span 
                      key={i} 
                      className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium hover:bg-gray-200 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex gap-3">
                {project.links?.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors text-sm"
                  >
                    <FaGithub />
                    {lang === 'tr' ? 'GitHub' : 'GitHub'}
                    <FaExternalLinkAlt className="text-xs" />
                  </a>
                )}
                {project.links?.demo && project.links.demo !== "#" && (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
                  >
                    <FaExternalLinkAlt />
                    {lang === 'tr' ? 'Demo' : 'Demo'}
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard; 