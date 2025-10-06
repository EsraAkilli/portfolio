import React from 'react';
import { commonStyles, theme } from '../../styles/theme';
import { useTranslation } from '../../hooks/useTranslation';

interface EducationSectionProps {
  lang: 'en' | 'tr';
}

const EducationSection: React.FC<EducationSectionProps> = ({ lang }) => {
  const { t } = useTranslation(lang);

  const educationKeys = ['highSchool', 'mathematicsEngineering', 'industrialEngineering'];

  const getLogoPath = (institution: string) => {
    if (institution.includes('Istanbul Technical University') || institution.includes('İstanbul Teknik Üniversitesi')) {
      return '/itu-logo.png';
    }
    if (institution.includes('Istanbul Ataturk Science High School') || institution.includes('İstanbul Atatürk Fen Lisesi')) {
      return '/iafl-logo.png';
    }
    return null;
  };

  const getDegreeIcon = (degree: string) => {
    if (degree.includes('Industrial Engineering')) return;
    if (degree.includes('Mathematics Engineering')) return;
    if (degree.includes('High School')) return;
    return ;
  };

  return (
    <section style={commonStyles.section} id="education">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          {t('common.education')}
        </h1>
      </div>

      {/* Horizontal Timeline Container */}
      <div className="relative max-w-7xl mx-auto">
        {/* Horizontal Timeline Line with Nodes */}
        <div className="relative flex justify-between items-center mb-8">
          {/* Timeline Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full transform -translate-y-1/2"></div>
          
          {/* Timeline Nodes */}
          {educationKeys.map((eduKey, index) => {
            const edu = t(`education.${eduKey}`);
            const logoPath = getLogoPath(edu.institution);
            
            return (
              <div key={index} className="relative z-10">
                {/* Timeline Node */}
                <div className="relative">
                  {/* Outer Ring */}
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-1">
                    {/* Inner Circle */}
                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center shadow-xl">
                      {logoPath ? (
                        <img 
                          src={logoPath} 
                          alt={edu.institution}
                          className="w-10 h-10 object-contain"
                        />
                      ) : (
                        <span className="text-xl">
                          {getDegreeIcon(edu.degree)}
                        </span>
                      )}
                    </div>
                  </div>
                  {/* Glow Effect */}
                  <div className="absolute inset-0 w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-30 blur-md"></div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Content Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {educationKeys.map((eduKey, index) => {
            const edu = t(`education.${eduKey}`);
            
            return (
              <div key={index} className="relative">
                {/* Content Card */}
                <div className="h-full">
                  <div className="group relative bg-white rounded-2xl border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:scale-105 h-full flex flex-col">
                    {/* Gradient Border Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                    
                    <div className="relative p-6 flex flex-col h-full">
                      {/* Year Badge */}
                      <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold mb-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                        <span className="mr-1"></span>
                        {edu.years}
                      </div>

                      {/* Degree Title */}
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {edu.degree}
                      </h3>

                      {/* Institution */}
                      <p className="text-base font-semibold text-blue-600 mb-3">
                        {edu.institution}
                      </p>

                      {/* GPA and Honors */}
                      <div className="mb-4 space-y-1">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                          <span className="text-gray-700 text-sm font-medium">
                            <strong>GPA:</strong> {edu.gpa?.split(':')[1]?.split(',')[0]?.trim() || 'N/A'}
                          </span>
                        </div>
                        {edu.gpa?.includes('Honor') && (
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                            <span className="text-gray-700 text-sm font-medium">
                              <strong>{lang === 'tr' ? 'Onur Listesi' : 'Honor List'}</strong>
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Focus Areas */}
                      <div className="mb-3 flex-grow">
                        <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2 flex items-center">
                          <span className="mr-1"></span>
                          {lang === 'tr' ? 'Odak Alanları' : 'Focus Areas'}
                        </h4>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          {edu.focus}
                        </p>
                      </div>

                      {/* Graduation Project */}
                      {edu.project && (
                        <div className="bg-gray-50 rounded-lg p-3 border-l-4 border-blue-500 mt-auto">
                          <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1 flex items-center">
                            <span className="mr-1"></span>
                            {lang === 'tr' ? 'Mezuniyet Projesi' : 'Graduation Project'}
                          </h4>
                          <p className="text-gray-700 text-sm font-medium">
                            {edu.project}
                          </p>
                        </div>
                      )}
                    </div>
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

export default EducationSection;
