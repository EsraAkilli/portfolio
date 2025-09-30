import { CVData } from '../types';

export const cvData: CVData = {
  personal_info: {
    name: "ESRA AKILLI",
    title: "AI & ML Engineer | Management Trainee",
    bio: "AI-focused engineer with a strong dual background in Mathematics and Industrial Engineering, currently contributing to AI and ML projects at TOM Bank's Generative AI Team. Passionate about applying LLMs, machine learning models, and NLP techniques to build intelligent systems that solve real-world problems. Eager to continue shaping innovative AI solutions at the intersection of data science, software engineering, and business value."
  },
  contact: {
    email: "akilliesra.01@gmail.com",
    linkedin: "esra-akıllı",
    github: "https://github.com/EsraAkilli"
  },
  experience: [
    {
      position: "Management Trainee - Generative AI Team",
      company: "TOM Bank",
      duration: "Aug 2024 - Present",
      location: "Istanbul, Turkey",
      achievements: [
        "Designing an ML-powered estimation system for Jira story points, evaluated with multiple scoring techniques, while implementing event/log streaming and structured logging with structlog",
        "Enriching development tasks using LLMs for semantic understanding and context-aware task generation",
        "Delivering internal technical presentations on Transformers Architecture, Spring AI, and LLM integration strategies",
        "Published AI/ML-focused articles on the company's official Medium account, translating complex concepts into accessible content for both technical and business readers",
        "Optimized LLM-driven workflows by applying prompt engineering methods and leveraging LangChain and Hugging Face integrations",
        "Developed a text-to-SQL prototype using Spring AI, enabling natural language querying for non-technical users",
        "Created a demo project analyzing software design principles in AI applications, with a focus on clean architecture and maintainability",
        "Contributed to the modernization of digital banking systems through backend services management with Spring Boot, RESTful API design, and ensuring clean code standards",
        "Monitored microservices using Rancher & Kibana, improved test coverage with SonarQube and Postman collections",
        "Oversaw CI/CD workflows via Jenkins, streamlining model deployment and release management"
      ],
      technologies: ["Python", "XGBoost", "Random Forest", "LLMs", "Spring AI", "Hugging Face", "Spring Boot", "RESTful APIs", "Jenkins", "SonarQube", "Rancher", "Kibana", "Postman"]
    },
    {
      position: "Backend Developer Intern",
      company: "MACELLAN",
      duration: "Aug 2023 - Aug 2024",
      location: "Istanbul, Turkey",
      achievements: [
        "Developed and tested robust Laravel APIs, achieving high code quality and test coverage",
        "Created a financial forecasting project and contributed to dynamic user interfaces with Vue.js",
        "Participated in Agile sprints, product demos, and stakeholder reviews"
      ],
      technologies: ["Laravel", "PHP", "Vue.js", "REST APIs", "Agile"]
    },
    {
      position: "Engineer Intern - Production Planning and Control",
      company: "TUSAŞ-Turkish Aerospace (TAI)",
      duration: "July 2022 - Aug 2022",
      location: "Ankara, Turkey",
      achievements: [
        "Gained hands-on experience in aerospace production planning and control systems",
        "Worked with industrial engineering methodologies in a high-tech aerospace environment"
      ],
      technologies: ["Production Planning", "Control Systems", "Industrial Engineering"]
    }
  ],
  education: [
    {
      degree: "Bachelor of Industrial Engineering",
      institution: "Istanbul Technical University",
      years: "2021-2025",
      gpa: "GPA: 3.12/4.00, 2022-2023 Honor List",
      project: "AI-Powered Research Summarizer",
      focus: "Operations research, optimization, data analytics, and machine learning applications in industrial systems"
    },
    {
      degree: "Bachelor of Mathematics Engineering",
      institution: "Istanbul Technical University", 
      years: "2019-2024",
      gpa: "GPA: 3.16/4.00, 2020-2021 High Honor List",
      project: "Full-stack web application for note-taking and editing",
      focus: "Advanced mathematical modeling, statistical analysis, and computational mathematics"
    },
    {
      degree: "High School Diploma",
      institution: "Istanbul Ataturk Science High School",
      years: "2015-2019",
      gpa: "GPA: 3.8/4, Certificate of Honor",
      project: "",
      focus: "Science and mathematics specialization"
    }
  ],
  skills: [
    {
      category: "Programming Languages",
      items: ["Python", "Java (Spring Boot)", "SQL", "PHP (Laravel)", "Vue.js", "HTML/CSS", "MATLAB"]
    },
    {
      category: "AI & Data Technologies",
      items: ["Generative AI", "NLP", "LLMs", "RAG", "Statistical Data Analysis", "Data Processing", "Scikit-learn", "Hugging Face Hub & Transformers", "Ollama"]
    },
    {
      category: "Software & Infrastructure",
      items: ["RESTful API Design", "Microservices", "CI/CD", "Jenkins", "Git", "Bitbucket", "Swagger", "Postman", "SonarQube", "Rancher", "Elasticsearch", "Kibana", "SQLite"]
    },
    {
      category: "Optimization & Productivity Tools",
      items: ["GAMS", "OpenSolver", "MS Office", "AutoCAD"]
    },
    {
      category: "Design & Content Creation",
      items: ["Adobe Photoshop", "Illustrator", "After Effects", "DaVinci Resolve", "Canva"]
    }
  ],
  languages: [
    {"language": "Turkish", "level": "Native"},
    {"language": "English", "level": "Professional Working"}
  ],
  interests: [
    {
      category: "Creative & Artistic",
      items: ["Drawing & Animation", "Mobile Games", "Digital Art", "Video Production", "Content Creation", "Photography"],
      description: "Passionate about visual storytelling and digital content creation"
    },
    {
      category: "Technical & Learning",
      items: ["Tech Blogging", "AI Research", "Open Source Contributing", "Technical Writing"],
      description: "Actively sharing knowledge and contributing to the tech community"
    },
    {
      category: "Active & Wellness",
      items: ["Walking", "Reformer Pilates", "Swing Jazz", "Cooking"],
      description: "Maintaining work-life balance through active lifestyle and creative pursuits"
    }
  ],
  extracurricular_activities: [
    {
      title: "UP School & Akbank: AI First Developer Program",
      organization: "Online, Turkey",
      duration: "June 2024 - September 2024",
      type: "Professional Development",
      description: "AI-focused professional development program",
      achievements: [
        "Gained practical experience in Generative AI, AI-Driven Development, and AI Ethics",
        "Built projects such as a Cat Facts App, Movie Recommendation System, and a Video Transcriber"
      ]
    },
    {
      title: "Mathematics and Mathematics Engineering Community Leader",
      organization: "ITU Student Community",
      duration: "May 2020 - August 2023",
      type: "Leadership & Community",
      description: "Student community leadership role",
      achievements: [
        "Established a student-led platform to promote awareness of applied and theoretical mathematics",
        "Led content strategy and publication of academic/technical material across platforms",
        "Produced educational YouTube videos (Bu Ne Bilimsizliktir?), handling scripts and animation"
      ]
    },
    {
      title: "Academic Activities & Leadership",
      organization: "Istanbul Technical University",
      duration: "2020-2021",
      type: "Academic Leadership",
      description: "Academic leadership activities",
      achievements: [
        "Sector Events at ITU Mathematics Engineering (April 2021 - June 2021)",
        "Student Coach and Private Lesson Teacher (January 2020 - June 2021)",
        "ITU Fine Arts Club: Club and Social Media Team Member",
        "ITU EMK Club: Development Committee Member"
      ]
    }
  ]
};
