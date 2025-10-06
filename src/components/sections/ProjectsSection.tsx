import React from 'react';
import { commonStyles, theme } from '../../styles/theme';
import ProjectCard from '../ProjectCard';
import { useTranslation } from '../../hooks/useTranslation';

interface ProjectsSectionProps {
  lang: 'en' | 'tr';
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ lang }) => {
  const { t } = useTranslation(lang);

  const projectKeys = ['aiSummarizer', 'noteTakingApp', 'pdfChatAssistant', 'cvWebsite'];

  return (
    <section style={commonStyles.section} id="projects">
      <h1 style={commonStyles.sectionTitle}>{t('common.projects')}</h1>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
        gap: theme.spacing.xxxl,
        maxWidth: '1400px',
        margin: '0 auto',
        alignItems: 'stretch'
      }}>
        {projectKeys.map((projectKey, index) => {
          const project = t(`projects.${projectKey}`);
          return (
            <ProjectCard 
              key={index} 
              project={project} 
              index={index} 
              onOpen={() => {}} 
              lang={lang} 
            />
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;
