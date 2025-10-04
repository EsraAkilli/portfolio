export interface PersonalInfo {
  name: string;
  title?: string;
  bio?: string;
}

export interface Contact {
  email: string;
  linkedin: string;
  github: string;
}

export interface Experience {
  position: string;
  company: string;
  location: string;
  duration: string;
  achievements: string[];
  technologies?: string[];
}

export interface Education {
  degree: string;
  institution: string;
  years: string;
  gpa?: string;
  focus: string;
  project?: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface LanguageSkill {
  language: string;
  level: string;
}

export interface InterestCategory {
  category: string;
  description: string;
  items: string[];
}

export interface ExtracurricularActivity {
  title: string;
  description: string;
  duration?: string;
  role?: string;
  organization?: string;
  type?: string;
  achievements?: string[];
}

export interface Project {
  title: string;
  description: string;
  category: string;
  status: string;
  technologies: string[];
  image?: string;
  highlights?: string[];
  links?: {
    demo?: string;
    github?: string;
  };
}

export interface CVData {
  personal_info: PersonalInfo;
  contact: Contact;
  experience: Experience[];
  education: Education[];
  skills: SkillCategory[];
  languages: LanguageSkill[];
  interests: InterestCategory[];
  extracurricular_activities: ExtracurricularActivity[];
}

export interface NavigationItem {
  id: string;
  label: string;
}

export type Language = 'en' | 'tr';

export interface PortfolioItem {
  title: string;
  desc: string;
  color: string;
  icon: string;
}
