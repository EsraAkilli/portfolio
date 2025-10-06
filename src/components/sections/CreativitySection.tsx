import React from 'react';
import { commonStyles, theme } from '../../styles/theme';
// import PortfolioSlider from '../PortfolioSlider';
import { useTranslation } from '../../hooks/useTranslation';

interface CreativitySectionProps {
  lang: 'en' | 'tr';
}

const CreativitySection: React.FC<CreativitySectionProps> = ({ lang }) => {
  // const [currentPortfolioPage, setCurrentPortfolioPage] = useState(0);
  const { t } = useTranslation(lang);

  // const portfolioItems = [
  //   { title: 'Digital Art & Design', desc: 'Adobe Creative Suite projects', color: '#ff6b6b', icon: '🎨' },
  //   { title: 'Video Production', desc: 'YouTube educational content', color: '#4ecdc4', icon: '🎬' },
  //   { title: 'Animation Work', desc: 'Script writing & animation', color: '#45b7d1', icon: '🎞️' },
  //   { title: 'Technical Writing', desc: 'Medium articles & content', color: '#f9ca24', icon: '✍️' }
  // ];

  // const nextPortfolioPage = (count: number) => {
  //   setCurrentPortfolioPage((prev) => (prev + 1) % Math.max(count, 1));
  // };

  // const prevPortfolioPage = (count: number) => {
  //   setCurrentPortfolioPage((prev) => (prev - 1 + Math.max(count, 1)) % Math.max(count, 1));
  // };

  return (
    <section style={commonStyles.section} id="creativity">
      <h1 style={commonStyles.sectionTitle}>{t('common.creativeSideInterests')}</h1>
      
      {/* Interest Categories */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: theme.spacing.xxl, marginBottom: theme.spacing.xxxxl }}>
        {['creativeArtistic', 'technicalLearning', 'activeWellness'].map((interestKey, index) => {
          const interestCategory = t(`interests.${interestKey}`);
          return (
          <div key={index} style={{
            ...commonStyles.card,
            background: index === 0 ? 'linear-gradient(135deg, #fef3c7 0%, #fed7aa 100%)' :
                       index === 1 ? 'linear-gradient(135deg, #dbeafe 0%, #e0e7ff 100%)' :
                       'linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%)',
            border: 'none',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              top: theme.spacing.lg,
              right: theme.spacing.lg,
              fontSize: theme.typography.sizes.xxxxxxxl,
              opacity: 0.3
            }}>
              {index === 0 ? '🎨' : index === 1 ? '💡' : '🌱'}
            </div>
            
            <h3 style={{
              fontSize: theme.typography.sizes.xxxxl,
              marginBottom: theme.spacing.md,
              color: theme.colors.text.primary,
              fontWeight: theme.typography.weights.semibold
            }}>
              {interestCategory.category}
            </h3>
            <p style={{
              color: theme.colors.text.secondary,
              marginBottom: theme.spacing.lg,
              lineHeight: '1.6',
              fontStyle: 'italic',
              fontSize: theme.typography.sizes.base
            }}>
              {interestCategory.description}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: theme.spacing.sm }}>
              {interestCategory.items?.map((interest: string, i: number) => (
                <span key={i} style={{
                  padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
                  borderRadius: '20px',
                  fontSize: theme.typography.sizes.sm,
                  fontWeight: theme.typography.weights.medium,
                  color: index === 0 ? '#92400e' : index === 1 ? '#1e40af' : '#166534',
                  background: index === 0 ? '#fef3c7' : index === 1 ? '#dbeafe' : '#dcfce7',
                  border: `1px solid ${index === 0 ? '#f59e0b' : index === 1 ? '#3b82f6' : '#22c55e'}`,
                  transition: 'all 0.3s ease',
                  cursor: 'default',
                  display: 'inline-block',
                  transform: 'translateY(0)',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
                }}>
                  {interest}
                </span>
              ))}
            </div>
          </div>
        );
        })}
      </div>

      {/* Creative Portfolio Showcase */}
      {/* <div style={commonStyles.card}>
        <h3 style={{ 
          fontSize: theme.typography.sizes.xxxxxl, 
          marginBottom: theme.spacing.lg, 
          color: theme.colors.text.primary, 
          fontWeight: theme.typography.weights.semibold 
        }}>
          {t('common.creativePortfolioShowcase')}
        </h3>
        <p style={{ 
          color: theme.colors.text.secondary, 
          marginBottom: theme.spacing.xxl, 
          lineHeight: '1.6' 
        }}>
                      {t('common.creativePortfolioDescription')}
        </p>
        
        <div className="py-2">
          <PortfolioSlider
            items={portfolioItems}
            page={currentPortfolioPage}
            onPrev={() => prevPortfolioPage(2)}
            onNext={() => nextPortfolioPage(2)}
            onSetPage={(i) => setCurrentPortfolioPage(i)}
          />
        </div>
      </div> */}
    </section>
  );
};

export default CreativitySection;
