import React from 'react';
import { commonStyles, theme } from '../../styles/theme';
import { useTranslation } from '../../hooks/useTranslation';

interface SkillsSectionProps {
  lang: 'en' | 'tr';
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ lang }) => {
  const { t } = useTranslation(lang);

  const skillKeys = ['programmingLanguages', 'aiDataTechnologies', 'softwareInfrastructure', 'optimizationProductivityTools', 'designContentCreation'];
  const technicalSkills = skillKeys.slice(0, 4).map(key => t(`skills.${key}`));
  const designSkills = t('skills.designContentCreation');

  return (
    <section style={commonStyles.section} id="skills">
      <h1 style={commonStyles.sectionTitle}>{t('common.skills')}</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: theme.spacing.xxl }}>
        
        {/* Technical Skills */}
        {technicalSkills?.map((skillCategory, index) => (
          <div key={index} style={commonStyles.card}>
            <h3 style={{
              fontSize: theme.typography.sizes.xxxl,
              marginBottom: theme.spacing.lg,
              color: theme.colors.text.primary,
              borderBottom: `2px solid ${theme.colors.primary}`,
              paddingBottom: theme.spacing.sm,
              fontWeight: theme.typography.weights.semibold
            }}>
              {skillCategory.category}
            </h3>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: theme.spacing.sm
            }}>
              {skillCategory.items?.map((skill, i) => (
                <span key={i} className="tag-secondary">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
        
        {/* Design & Content Creation Card */}
        {designSkills && (
          <div style={commonStyles.card}>
            <h3 style={{
              fontSize: theme.typography.sizes.xxxl,
              marginBottom: theme.spacing.lg,
              color: theme.colors.text.primary,
              borderBottom: `2px solid ${theme.colors.primary}`,
              paddingBottom: theme.spacing.sm,
              fontWeight: theme.typography.weights.semibold
            }}>
              {designSkills.category}
            </h3>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: theme.spacing.sm
            }}>
              {designSkills.items?.map((skill, i) => (
                <span key={i} className="tag-secondary">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Languages Card */}
        <div style={commonStyles.card}>
          <h3 style={{ 
            fontSize: theme.typography.sizes.xxxl, 
            marginBottom: theme.spacing.xl, 
            color: theme.colors.text.primary, 
            fontWeight: theme.typography.weights.semibold,
            borderBottom: `2px solid ${theme.colors.primary}`,
            paddingBottom: theme.spacing.sm
          }}>{lang === 'tr' ? 'Diller' : 'Languages'}</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: theme.spacing.md }}>
            {t('common.languages')?.map((langItem: any, index: number) => (
              <div key={index} style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: `${theme.spacing.md} 0`,
                borderBottom: index < (t('common.languages')?.length || 0) - 1 ? `1px solid ${theme.colors.border}` : 'none'
              }}>
                <span style={{ 
                  fontWeight: theme.typography.weights.semibold, 
                  color: theme.colors.text.primary, 
                  fontSize: theme.typography.sizes.lg 
                }}>
                  {langItem.language}
                </span>
                <span style={{ 
                  color: theme.colors.text.muted, 
                  fontSize: theme.typography.sizes.sm, 
                  fontWeight: theme.typography.weights.medium 
                }}>
                  {langItem.level}
                </span>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default SkillsSection;
