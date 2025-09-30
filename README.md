# Esra Akıllı - Professional Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features a clean design, multilingual support (English/Turkish), and showcases professional experience in AI/ML engineering.

![Portfolio Website Preview](https://img.shields.io/badge/Status-Live-brightgreen)
![Domain](https://img.shields.io/badge/Domain-esraakilli.com-blue)

## Features

- **Modern Design**: Clean, professional layout with smooth animations
- **Responsive**: Optimized for desktop, tablet, and mobile devices
- **Multilingual**: English and Turkish language support
- **Interactive**: Smooth scrolling navigation and hover effects
- **Professional**: Comprehensive showcase of experience, education, skills, and projects
- **Fast**: Built with Vite for lightning-fast development and builds
- **TypeScript**: Full type safety and better development experience

## Tech Stack

### Frontend
- **React 18** with TypeScript
- **Vite** for build tooling and development
- **TailwindCSS** for styling
- **Framer Motion** for animations
- **React Icons** for beautiful icons
- **React Router DOM** for navigation
- **React Intersection Observer** for scroll animations

### Development Tools
- **TypeScript** for type safety
- **ESLint** for code quality
- **PostCSS** for CSS processing
- **Autoprefixer** for browser compatibility

## Project Structure

```
portfolio/
├── frontend/
│   ├── src/
│   │   ├── components/           # React components
│   │   │   ├── Header.tsx       # Navigation header
│   │   │   ├── Hero.tsx         # Main hero section
│   │   │   ├── Footer.tsx       # Footer component
│   │   │   ├── Loader.tsx       # Loading spinner
│   │   │   ├── ErrorState.tsx   # Error handling
│   │   │   ├── ProjectCard.tsx  # Project showcase cards
│   │   │   ├── PortfolioSlider.tsx # Portfolio carousel
│   │   │   └── sections/        # Page sections
│   │   │       ├── CareerSection.tsx      # Professional experience
│   │   │       ├── EducationSection.tsx   # Educational background
│   │   │       ├── ProjectsSection.tsx   # Project portfolio
│   │   │       ├── SkillsSection.tsx     # Technical skills
│   │   │       ├── ActivitiesSection.tsx # Extracurricular activities
│   │   │       └── CreativitySection.tsx  # Interests and creativity
│   │   ├── data/                # Static data
│   │   │   ├── cvData.ts        # CV information
│   │   │   └── projects.ts      # Project data
│   │   ├── hooks/               # Custom React hooks
│   │   │   ├── useCVData.ts     # CV data management
│   │   │   ├── useScrollSpy.ts  # Scroll spy functionality
│   │   │   └── useTranslation.ts # Translation system
│   │   ├── locales/             # Translation files
│   │   │   ├── en/              # English translations
│   │   │   └── tr/              # Turkish translations
│   │   ├── styles/              # Styling
│   │   │   └── theme.ts         # Theme configuration
│   │   ├── types/               # TypeScript type definitions
│   │   │   └── index.ts         # Type definitions
│   │   ├── App.tsx              # Main App component
│   │   ├── main.tsx             # Entry point
│   │   └── index.css            # Global styles
│   ├── public/                  # Static assets
│   │   ├── projects/            # Project images
│   │   ├── CV-Güncel.pdf        # CV download
│   │   └── foto.jpeg            # Profile photo
│   ├── package.json             # Dependencies and scripts
│   ├── tailwind.config.js       # TailwindCSS configuration
│   ├── vite.config.ts           # Vite configuration
│   ├── tsconfig.json            # TypeScript configuration
│   └── index.html               # HTML template
├── CV-Güncel.pdf               # Latest CV
└── README.md                   # This file
```

## Quick Start

### Prerequisites

Make sure you have the following installed:
- **Node.js 16+**
- **npm** or **yarn**

### 1. Clone the Repository

```bash
git clone https://github.com/EsraAkilli/portfolio.git
cd portfolio
```

### 2. Install Dependencies

```bash
cd frontend
npm install
```

### 3. Start Development Server

```bash
npm run dev
```

The website will be available at `http://localhost:3000`

### 4. Build for Production

```bash
npm run build
```

The build files will be in the `dist` directory.

## Live Website

Visit the live website at: **[esraakilli.com](https://esraakilli.com)**

## License

This project is licensed under the MIT License - see the LICENSE file for details.

##  Contact

**Esra Akilli**
- **Email**: akilliesra.01@gmail.com
- **LinkedIn**: [esra-akıllı](https://linkedin.com/in/esra-akıllı)
- **GitHub**: [EsraAkilli](https://github.com/EsraAkilli)
- **Website**: [esraakilli.com](https://esraakilli.com)

---

⭐ If you found this helpful, please give it a star!

Built with ❤️ using React, TypeScript, and Tailwind CSS