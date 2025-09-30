import React from 'react';
import { SkillCategory, LanguageSkill } from '../../types';
import { commonStyles, theme } from '../../styles/theme';
import { useTranslation } from '../../hooks/useTranslation';

interface SkillsSectionProps {
  skills: SkillCategory[];
  languages: LanguageSkill[];
  lang: 'en' | 'tr';
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ skills, languages, lang }) => {
  const { t } = useTranslation(lang);

  const technicalSkills = skills?.filter(s => s.category !== 'Design & Content Creation');
  const designSkills = skills?.find(s => s.category === 'Design & Content Creation');

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
              {lang === 'tr' ? t(`skills.${skillCategory.category === 'Programming Languages' ? 'programmingLanguages' : 
                skillCategory.category === 'AI & Data Technologies' ? 'aiDataTechnologies' : 
                skillCategory.category === 'Software & Infrastructure' ? 'softwareInfrastructure' : 
                skillCategory.category === 'Optimization & Productivity Tools' ? 'optimizationProductivityTools' : 'designContentCreation'}.category`) : skillCategory.category}
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
              {lang === 'tr' ? t('skills.designContentCreation.category') : 'Design & Content Creation'}
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
            {languages?.map((lang, index) => (
              <div key={index} style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: `${theme.spacing.md} 0`,
                borderBottom: index < (languages?.length || 0) - 1 ? `1px solid ${theme.colors.border}` : 'none'
              }}>
                <span style={{ 
                  fontWeight: theme.typography.weights.semibold, 
                  color: theme.colors.text.primary, 
                  fontSize: theme.typography.sizes.lg 
                }}>
                  {lang.language}
                </span>
                <span style={{ 
                  color: theme.colors.text.muted, 
                  fontSize: theme.typography.sizes.sm, 
                  fontWeight: theme.typography.weights.medium 
                }}>
                  {lang.level}
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
