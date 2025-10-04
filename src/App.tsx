import React, { useRef } from 'react';
import { commonStyles } from './styles/theme';
import { useCVData } from './hooks/useCVData';
import { useScrollSpy } from './hooks/useScrollSpy';
import { projects as projectsData } from './data/projects';

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
import Loader from './components/Loader';
import ErrorState from './components/ErrorState';

function App() {
  const [lang, setLang] = React.useState<'en' | 'tr'>('en');
  
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

  // Custom hooks
  const { cvData, loading, error } = useCVData();
  const activeSection = useScrollSpy(sectionRefs);

  // Navigation data
  const navigation = [
    { id: 'home', label: lang === 'tr' ? 'Ana Sayfa' : 'Home' },
    { id: 'career', label: lang === 'tr' ? 'Kariyer' : 'Career' },
    { id: 'education', label: lang === 'tr' ? 'Eğitim' : 'Education' },
    { id: 'projects', label: lang === 'tr' ? 'Projeler' : 'Projects' },
    { id: 'skills', label: lang === 'tr' ? 'Yetenekler' : 'Skills' },
    { id: 'activities', label: lang === 'tr' ? 'Aktiviteler' : 'Activities' },
    { id: 'creativity', label: lang === 'tr' ? 'Yaratıcılık' : 'Creativity' }
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

  if (loading) {
    return <Loader />;
  }

  if (error || !cvData) {
    return <ErrorState message={error || undefined} />
  }

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
        <Hero cvData={cvData} onDownloadCV={downloadCV} lang={lang} />
      </div>

      {/* Career Section */}
      <div ref={careerRef}>
        <CareerSection experience={cvData.experience} lang={lang} />
      </div>

      {/* Education Section */}
      <div ref={educationRef}>
        <EducationSection education={cvData.education} lang={lang} />
      </div>

      {/* Projects Section */}
      <div ref={projectsRef}>
        <ProjectsSection projects={projectsData} lang={lang} />
      </div>

      {/* Skills Section */}
      <div ref={skillsRef}>
        <SkillsSection skills={cvData.skills} languages={cvData.languages} lang={lang} />
      </div>

      {/* Extracurricular Activities Section */}
      <div ref={activitiesRef}>
        <ActivitiesSection activities={cvData.extracurricular_activities || []} lang={lang} />
      </div>

      {/* Creativity & Interests Section */}
      <div ref={creativityRef}>
        <CreativitySection interests={cvData.interests} lang={lang} />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App; 