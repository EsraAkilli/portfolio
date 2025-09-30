import React from 'react';
import { ExtracurricularActivity } from '../../types';
import { commonStyles, theme } from '../../styles/theme';
import { useTranslation } from '../../hooks/useTranslation';

interface ActivitiesSectionProps {
  activities: ExtracurricularActivity[];
  lang: 'en' | 'tr';
}

const ActivitiesSection: React.FC<ActivitiesSectionProps> = ({ activities: _, lang }) => {
  const { t } = useTranslation(lang);

  // Get activities data from translation files
  const activitiesData = [
    t('activities.upSchool'),
    t('activities.mathematicsCommunity'),
    t('activities.academicActivities')
  ];

  return (
    <section style={commonStyles.section} id="activities">
      <h1 style={commonStyles.sectionTitle}>{t('common.activities')}</h1>
      <div style={{ padding: theme.spacing.xl }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: theme.spacing.xl }}>
          {activitiesData.map((activity, idx) => {
            const skills = activity.skills_gained?.length ? activity.skills_gained : (activity.type ? [activity.type] : []);
            return (
              <div key={idx} style={{
                backgroundColor: theme.colors.white,
                borderRadius: theme.borderRadius.xl,
                border: `1px solid ${theme.colors.border}`,
                padding: theme.spacing.xl,
                boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)'
              }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: theme.spacing.lg }}>
                  <div>
                    <h3 style={{ 
                      fontSize: theme.typography.sizes.lg, 
                      fontWeight: theme.typography.weights.semibold, 
                      color: theme.colors.text.primary,
                      marginBottom: theme.spacing.sm
                    }}>
                      {activity.title}
                    </h3>
                    {activity.organization && (
                      <p style={{ 
                        color: theme.colors.primary, 
                        fontWeight: theme.typography.weights.medium,
                        marginBottom: theme.spacing.xs
                      }}>
                        {activity.organization}
                      </p>
                    )}
                    {activity.role && (
                      <p style={{ 
                        color: theme.colors.text.secondary, 
                        fontSize: theme.typography.sizes.sm,
                        marginBottom: theme.spacing.xs
                      }}>
                        {activity.role}
                      </p>
                    )}
                    {activity.duration && (
                      <div style={{ display: 'flex', alignItems: 'center', gap: theme.spacing.xs, marginTop: theme.spacing.sm }}>
                        <span style={{ 
                          fontSize: theme.typography.sizes.sm, 
                          color: theme.colors.text.light 
                        }}></span>
                        <span style={{ 
                          color: theme.colors.text.muted, 
                          fontSize: theme.typography.sizes.sm,
                          fontWeight: theme.typography.weights.medium
                        }}>
                          {activity.duration}
                        </span>
                      </div>
                    )}
                  </div>

                </div>
                
                {activity.description && (
                  <p style={{ 
                    color: theme.colors.text.secondary, 
                    marginBottom: theme.spacing.md,
                    lineHeight: '1.6'
                  }}>
                    {activity.description}
                  </p>
                )}
                
                {activity.achievements && activity.achievements.length > 0 && (
                  <ul style={{ 
                    listStyle: 'disc', 
                    paddingLeft: theme.spacing.xl, 
                    color: theme.colors.text.secondary, 
                    marginBottom: theme.spacing.md,
                    lineHeight: '1.6'
                  }}>
                    {activity.achievements.map((achievement: string, i: number) => (
                      <li key={i} style={{ marginBottom: theme.spacing.sm }}>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                )}
                
                {skills.length > 0 && (
                  <div style={{ marginTop: theme.spacing.lg }}>
                    <h4 style={{ 
                      color: theme.colors.text.primary, 
                      fontWeight: theme.typography.weights.semibold, 
                      marginBottom: theme.spacing.md 
                    }}>
                      {lang === 'tr' ? 'Kazanılan Yetenekler:' : 'Skills Gained:'}
                    </h4>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: theme.spacing.sm }}>
                                          {activity.skills_gained?.map((skill: string, i: number) => (
                      <span key={i} className="tag-secondary">{skill}</span>
                    ))}
                    </div>
                  </div>
                )}
                
                {activity.technologies && (
                  <div style={{ marginTop: theme.spacing.lg }}>
                    <h4 style={{ 
                      color: theme.colors.text.primary, 
                      fontWeight: theme.typography.weights.semibold, 
                      marginBottom: theme.spacing.md 
                    }}>
                      {lang === 'tr' ? 'Kullanılan Teknolojiler:' : 'Technologies Used:'}
                    </h4>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: theme.spacing.sm }}>
                                          {activity.technologies.map((tech: string, i: number) => (
                      <span key={i} className="tag-secondary">{tech}</span>
                    ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;
