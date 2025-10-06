import React, { useRef } from 'react';
import { commonStyles } from './styles/theme';
import { useScrollSpy } from './hooks/useScrollSpy';
import { useTranslation } from './hooks/useTranslation';

// Components
import Header from './components/Header';
import Hero from './components/Hero';
import CareerSection from './components/sections/CareerSection';
import EducationSection from './components/sections/EducationSection';
import ProjectsSection from './components/sections/ProjectsSection';
import SkillsSection from './components/sections/SkillsSection';
import ActivitiesSection from './components/sections/ActivitiesSection';
import CreativitySection from './components/sections/CreativitySection';
import Footer from './components/Footer';

function App() {
  const [lang, setLang] = React.useState<'en' | 'tr'>('en');
  const { t } = useTranslation(lang);
  
  // Refs for each section
  const homeRef = useRef<HTMLDivElement>(null);
  const careerRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const activitiesRef = useRef<HTMLDivElement>(null);
  const creativityRef = useRef<HTMLDivElement>(null);

  const sectionRefs = {
    home: homeRef,
    career: careerRef,
    education: educationRef,
    projects: projectsRef,
    skills: skillsRef,
    activities: activitiesRef,
    creativity: creativityRef
  };

  const activeSection = useScrollSpy(sectionRefs);

  // Navigation data
  const navigation = [
    { id: 'home', label: t('common.home') },
    { id: 'career', label: t('common.career') },
    { id: 'education', label: t('common.education') },
    { id: 'projects', label: t('common.projects') },
    { id: 'skills', label: t('common.skills') },
    { id: 'activities', label: t('common.activities') },
    { id: 'creativity', label: t('common.creativity') }
  ];

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const ref = sectionRefs[sectionId as keyof typeof sectionRefs];
    if (ref?.current) {
      const offsetTop = ref.current.offsetTop - 100; // Header height + extra padding
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  // Download CV function
  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/CV-Güncel.pdf';
    link.download = 'Esra_Akilli_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div style={commonStyles.container}>
      {/* Fixed Header */}
      <Header 
        nav={navigation} 
        activeId={activeSection} 
        onNavClick={scrollToSection} 
        lang={lang} 
        onToggleLang={() => setLang(prev => prev === 'tr' ? 'en' : 'tr')} 
      />

      {/* Home Section */}
      <div ref={homeRef}>
        <Hero onDownloadCV={downloadCV} lang={lang} />
      </div>

      {/* Career Section */}
      <div ref={careerRef}>
        <CareerSection lang={lang} />
      </div>

      {/* Education Section */}
      <div ref={educationRef}>
        <EducationSection lang={lang} />
      </div>

      {/* Projects Section */}
      <div ref={projectsRef}>
        <ProjectsSection lang={lang} />
      </div>

      {/* Skills Section */}
      <div ref={skillsRef}>
        <SkillsSection lang={lang} />
      </div>

      {/* Extracurricular Activities Section */}
      <div ref={activitiesRef}>
        <ActivitiesSection lang={lang} />
      </div>

      {/* Creativity & Interests Section */}
      <div ref={creativityRef}>
        <CreativitySection lang={lang} />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App; 