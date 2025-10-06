import React, { useState } from 'react';
import { commonStyles, theme } from '../../styles/theme';
import PortfolioSlider from '../PortfolioSlider';
import { useTranslation } from '../../hooks/useTranslation';

interface CreativitySectionProps {
  lang: 'en' | 'tr';
}

const CreativitySection: React.FC<CreativitySectionProps> = ({ lang }) => {
  const [currentPortfolioPage, setCurrentPortfolioPage] = useState(0);
  const { t } = useTranslation(lang);

  const portfolioItems = [

    //1
    { title: 'Sports & Activities', desc: 'Rowing, theater, and active lifestyle', color: '#f9ca24', image: '/portfolio/kurek1.jpeg' },
    { title: 'Art & Drawings', desc: 'Creative drawings and artistic works', color: '#ff6b6b', image: '/portfolio/cizim2.jpeg' },
    { title: 'Sports & Activities', desc: 'Rowing, theater, and active lifestyle', color: '#f9ca24', image: '/portfolio/dans1.jpeg' },

    //2
    { title: 'Sports & Activities', desc: 'Rowing, theater, and active lifestyle', color: '#f9ca24', image: '/portfolio/spor1.jpeg' },
    { title: 'Photography', desc: 'Landscape and nature photography', color: '#4ecdc4', image: '/portfolio/manzara1.jpeg' },
    { title: 'Travel & Exploration', desc: 'Adventure and exploration moments', color: '#ff8a80', image: '/portfolio/gezi1.jpg' },

    //3
    { title: 'Art & Drawings', desc: 'Creative drawings and artistic works', color: '#ff6b6b', image: '/portfolio/cizim1.jpeg' },
    { title: 'Reading & Learning', desc: 'Books, quotes, and learning moments', color: '#a78bfa', image: '/portfolio/kitap1.jpeg' },
    { title: 'Sports & Activities', desc: 'Rowing, theater, and active lifestyle', color: '#f9ca24', image: '/portfolio/spor2.jpeg' },

    //4
    { title: 'Travel & Exploration', desc: 'Adventure and exploration moments', color: '#ff8a80', image: '/portfolio/gezi2.jpeg' },
    { title: 'Travel & Exploration', desc: 'Adventure and exploration moments', color: '#ff8a80', image: '/portfolio/ucak.jpeg' },
    { title: 'Creative Arts', desc: 'Various artistic and creative projects', color: '#ce93d8', image: '/portfolio/sanat2.jpeg' },

    //5
    { title: 'Sports & Activities', desc: 'Rowing, theater, and active lifestyle', color: '#f9ca24', image: '/portfolio/spor3.jpeg' },
    { title: 'Sports & Activities', desc: 'Rowing, theater, and active lifestyle', color: '#f9ca24', image: '/portfolio/tiyatro.jpeg' },
    { title: 'Photography', desc: 'Landscape and nature photography', color: '#4ecdc4', image: '/portfolio/manzara3.jpeg' },
    
    //6
    { title: 'Creative Arts', desc: 'Various artistic and creative projects', color: '#ce93d8', image: '/portfolio/sanat1.jpeg' },
    { title: 'Photography', desc: 'Landscape and nature photography', color: '#4ecdc4', image: '/portfolio/manzara2.jpeg' },
    { title: 'Art & Drawings', desc: 'Creative drawings and artistic works', color: '#ff6b6b', image: '/portfolio/cizim5.jpeg' },
    
    //7
    { title: 'Sports & Activities', desc: 'Rowing, theater, and active lifestyle', color: '#f9ca24', image: '/portfolio/kurek2.jpeg' },
    { title: 'Creative Arts', desc: 'Various artistic and creative projects', color: '#ce93d8', image: '/portfolio/lego.jpeg' },

    { title: 'Reading & Learning', desc: 'Books, quotes, and learning moments', color: '#a78bfa', image: '/portfolio/soz.jpeg' },
  ];

  const nextPortfolioPage = () => {
    const totalPages = Math.ceil(portfolioItems.length / 3);
    setCurrentPortfolioPage((prev) => (prev + 1) % totalPages);
  };

  const prevPortfolioPage = () => {
    const totalPages = Math.ceil(portfolioItems.length / 3);
    setCurrentPortfolioPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

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
      <div style={{
        ...commonStyles.card,
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        border: 'none',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '0 20px 40px rgba(0,0,0,0.15)'
      }}>
        {/* Background Pattern */}
        <div style={{
          position: 'absolute',
          top: '-50%',
          right: '-50%',
          width: '200%',
          height: '200%',
          background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
          animation: 'float 8s ease-in-out infinite',
          pointerEvents: 'none'
        }} />
        
        <div style={{ position: 'relative', zIndex: 10 }}>
          <h3 style={{ 
            fontSize: theme.typography.sizes.xxxxxl, 
            marginBottom: theme.spacing.lg, 
            color: 'white', 
            fontWeight: theme.typography.weights.bold,
            textShadow: '0 2px 4px rgba(0,0,0,0.3)'
          }}>
            {lang === 'tr' ? 'Yaratıcı Portföy Vitrin' : 'Creative Portfolio Showcase'}
          </h3>
          <p style={{ 
            color: 'rgba(255,255,255,0.9)', 
            marginBottom: theme.spacing.xxl, 
            lineHeight: '1.6',
            textShadow: '0 1px 2px rgba(0,0,0,0.2)'
          }}>
            {lang === 'tr' ? 'Yaratıcılığımın farklı yönlerini keşfedin - sanat, fotoğrafçılık, spor ve seyahat anılarım' : 'Explore different aspects of my creativity - art, photography, sports, and travel memories'}
          </p>
          
          <div className="py-2">
            <PortfolioSlider
              items={portfolioItems}
              page={currentPortfolioPage}
              onPrev={prevPortfolioPage}
              onNext={nextPortfolioPage}
              onSetPage={(i) => setCurrentPortfolioPage(i)}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreativitySection;
