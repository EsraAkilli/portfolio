import React from 'react';
import { Education } from '../../types';
import { commonStyles, theme } from '../../styles/theme';
import { useTranslation } from '../../hooks/useTranslation';

interface EducationSectionProps {
  education: Education[];
  lang: 'en' | 'tr';
}

const EducationSection: React.FC<EducationSectionProps> = ({ education, lang }) => {
  const { t } = useTranslation(lang);

  return (
    <section style={commonStyles.section} id="education">
      <h1 style={commonStyles.sectionTitle}>{t('common.education')}</h1>
      {education?.map((edu, index) => (
        <div key={index} style={commonStyles.card}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: theme.spacing.xxxl }}>
            <div style={{ flex: 1 }}>
              <h3 style={{ 
                fontSize: theme.typography.sizes.xxxxxxl, 
                color: theme.colors.text.primary, 
                marginBottom: theme.spacing.md, 
                fontWeight: theme.typography.weights.semibold 
              }}>
                {edu.degree}
              </h3>
              <p style={{ 
                fontSize: theme.typography.sizes.xxxl, 
                color: theme.colors.primary, 
                marginBottom: theme.spacing.sm, 
                fontWeight: theme.typography.weights.medium 
              }}>
                {edu.institution}
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: theme.spacing.md, marginBottom: theme.spacing.lg }}>
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
                    {edu.years}
                  </span>
                </div>
              </div>
              
              {/* GPA and Honor List - Above focus */}
              <div style={{ marginBottom: theme.spacing.lg }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: theme.spacing.sm, marginBottom: theme.spacing.sm }}>
                  <span style={{ 
                    width: '6px', 
                    height: '6px', 
                    backgroundColor: theme.colors.text.light, 
                    borderRadius: theme.borderRadius.full 
                  }} />
                  <span style={{ color: theme.colors.text.secondary, fontWeight: theme.typography.weights.medium }}>
                    <strong>GPA:</strong> {edu.gpa?.split(':')[1]?.split(',')[0]?.trim() || 'N/A'}
                  </span>
                </div>
                {edu.gpa?.includes('Honor') && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: theme.spacing.sm }}>
                    <span style={{ 
                      width: '6px', 
                      height: '6px', 
                      backgroundColor: theme.colors.text.light, 
                      borderRadius: theme.borderRadius.full 
                    }} />
                    <span style={{ color: theme.colors.text.secondary, fontWeight: theme.typography.weights.medium }}>
                      <strong>Honor List</strong>
                    </span>
                  </div>
                )}
              </div>
              
              <p style={{ color: theme.colors.text.muted, lineHeight: '1.6', marginBottom: theme.spacing.md }}>
                <strong>{lang === 'tr' ? 'Dersler:' : 'Courses:'}</strong> {lang === 'tr' ? t(`education.${index === 0 ? 'industrialEngineering' : index === 1 ? 'mathematicsEngineering' : 'highSchool'}.focus`) : edu.focus}
              </p>
              {edu.project && (
                <p style={{ color: theme.colors.text.muted, lineHeight: '1.6', marginBottom: theme.spacing.lg }}>
                  <strong>{lang === 'tr' ? 'Mezuniyet Projesi:' : 'Graduation Project:'}</strong> {lang === 'tr' ? t(`education.${index === 0 ? 'industrialEngineering' : index === 1 ? 'mathematicsEngineering' : 'highSchool'}.project`) : edu.project}
                </p>
              )}
            </div>
            

          </div>
        </div>
      ))}
    </section>
  );
};

export default EducationSection;
