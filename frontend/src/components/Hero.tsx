import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { CVData } from '../types';
import { useTranslation } from '../hooks/useTranslation';

type Props = {
  cvData: CVData;
  onDownloadCV: () => void;
  lang: 'en' | 'tr';
};

const Hero: React.FC<Props> = ({ cvData, onDownloadCV, lang }) => {
  const { t } = useTranslation(lang);
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50 min-h-[32rem] flex items-center justify-center py-16 mt-16">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-indigo-200 rounded-full blur-3xl"></div>
      </div>

      <div className="text-center max-w-4xl z-10 px-6">
        {/* Avatar with better shadow */}
        <div className="w-44 h-44 mx-auto rounded-full shadow-2xl mb-4 overflow-hidden">
          <img src="/foto.jpeg" alt="Esra Akıllı" className="w-full h-full object-cover" />
        </div>

        {/* Name with better typography */}
        <h1 className="text-4xl font-bold tracking-tight text-blue-600 mb-4">
          {cvData.personal_info?.name || 'ESRA AKILLI'}
        </h1>
        
        {/* Title with accent color */}
        <p className="text-xl text-slate-600 font-medium mb-6">
          {t('common.hero.title')}
        </p>
        
        {/* Description with better readability */}
        <p className="text-gray-600 leading-relaxed mb-8 text-lg max-w-3xl mx-auto">
          {t('common.hero.description')}
        </p>

        {/* Social icons with better spacing */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <a className="w-12 h-12 rounded-full grid place-items-center bg-blue-600 text-white shadow-lg hover:scale-110 hover:bg-blue-700 transition-all duration-200"
             href={`https://linkedin.com/in/${cvData.contact?.linkedin}`} target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={20} />
          </a>
          <a className="w-12 h-12 rounded-full grid place-items-center bg-gray-800 text-white shadow-lg hover:scale-110 hover:bg-gray-900 transition-all duration-200"
             href={cvData.contact?.github} target="_blank" rel="noopener noreferrer">
            <FaGithub size={20} />
          </a>
          <a className="w-12 h-12 rounded-full grid place-items-center bg-red-500 text-white shadow-lg hover:scale-110 hover:bg-red-600 transition-all duration-200"
             href={`mailto:${cvData.contact?.email}`}>
            <FaEnvelope size={20} />
          </a>
        </div>

        {/* Download button with better styling */}
        <button 
          onClick={onDownloadCV} 
          className="px-8 py-3 bg-white text-gray-700 font-semibold rounded-full shadow-lg hover:bg-gray-50 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 border border-gray-200"
        >
          {t('common.downloadCV')}
        </button>
      </div>
    </div>
  );
};

export default Hero; 