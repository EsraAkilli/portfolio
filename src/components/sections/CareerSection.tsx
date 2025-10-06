import React from 'react';
import { commonStyles, theme } from '../../styles/theme';
import { useTranslation } from '../../hooks/useTranslation';

interface CareerSectionProps {
  lang: 'en' | 'tr';
}

const CareerSection: React.FC<CareerSectionProps> = ({ lang }) => {
  const { t } = useTranslation(lang);

  return (
    <section style={commonStyles.section} id="career">
      <h1 style={commonStyles.sectionTitle}>{t('common.professionalExperience')}</h1>
      <div style={{ position: 'relative' }}>
        {/* Timeline line */}
        <div style={{
          position: 'absolute',
          left: '20px',
          top: '0',
          bottom: '0',
          width: '3px',
          background: `linear-gradient(to bottom, ${theme.colors.primary}, ${theme.colors.secondary})`,
          borderRadius: '2px'
        }} />
        
        {['tomBank', 'macellan', 'tusas'].map((expKey, index) => {
          const exp = t(`experience.${expKey}`);
          
          return (
          <div key={index} style={{
            marginLeft: '60px',
            marginBottom: theme.spacing.xxxxl,
            position: 'relative'
          }}>
            {/* Timeline dot */}
            <div style={{
              position: 'absolute',
              left: '-47px',
              top: '15px',
              width: '16px',
              height: '16px',
              backgroundColor: theme.colors.primary,
              borderRadius: theme.borderRadius.full,
              border: `4px solid ${theme.colors.white}`,
              boxShadow: `0 0 0 3px ${theme.colors.primary}`
            }} />
            
            <div style={commonStyles.card}>
              <div style={{ marginBottom: theme.spacing.xl }}>
                <h3 style={{ 
                  fontSize: theme.typography.sizes.xxxxxl, 
                  color: theme.colors.text.primary, 
                  marginBottom: theme.spacing.sm, 
                  fontWeight: theme.typography.weights.semibold 
                }}>
                  {exp.position}
                </h3>
                <p style={{ 
                  fontSize: theme.typography.sizes.xxxl, 
                  color: theme.colors.primary, 
                  fontWeight: theme.typography.weights.semibold, 
                  marginBottom: theme.spacing.xs 
                }}>
                  {exp.company}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: theme.spacing.md, marginTop: theme.spacing.sm, paddingLeft: '0' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: theme.spacing.xs }}>
                    <span style={{ 
                      fontSize: theme.typography.sizes.sm, 
                      color: theme.colors.text.light 
                    }}></span>
                    <span style={{ 
                      color: theme.colors.text.muted, 
                      fontSize: theme.typography.sizes.base,
                      fontWeight: theme.typography.weights.medium
                    }}>
                      {exp.location}
                    </span>
                  </div>
                  <div style={{ 
                    width: '1px', 
                    height: '16px', 
                    backgroundColor: theme.colors.border 
                  }}></div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: theme.spacing.xs }}>
                    <span style={{ 
                      fontSize: theme.typography.sizes.sm, 
                      color: theme.colors.text.light 
                    }}></span>
                    <span style={{ 
                      color: theme.colors.text.muted, 
                      fontSize: theme.typography.sizes.base,
                      fontWeight: theme.typography.weights.medium
                    }}>
                      {exp.duration}
                    </span>
                  </div>
                </div>
              </div>
              
              <ul style={{ paddingLeft: '0', listStyle: 'none', marginBottom: theme.spacing.xl }}>
                {exp.achievements?.map((achievement: string, i: number) => (
                  <li key={i} style={{
                    marginBottom: theme.spacing.md,
                    paddingLeft: theme.spacing.xl,
                    position: 'relative',
                    lineHeight: '1.6',
                    color: theme.colors.text.secondary
                  }}>
                    <span style={{
                      position: 'absolute',
                      left: '0',
                      color: theme.colors.text.light,
                      fontSize: '8px',
                      top: '8px'
                    }}>●</span>
                    {achievement}
                  </li>
                ))}
              </ul>

              {/* Technologies */}
              {exp.technologies && (
                <div>
                  <h4 style={{ 
                    fontSize: theme.typography.sizes.lg, 
                    color: theme.colors.text.primary, 
                    marginBottom: theme.spacing.md, 
                    fontWeight: theme.typography.weights.semibold 
                  }}>
                    {lang === 'tr' ? 'Kullanılan Teknolojiler:' : 'Technologies Used:'}
                  </h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: theme.spacing.sm }}>
                    {exp.technologies.map((tech: string, i: number) => (
                      <span key={i} className="tag-secondary">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        );
        })}
      </div>
    </section>
  );
};

export default CareerSection;
