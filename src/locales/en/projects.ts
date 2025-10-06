export const projects = {
  aiSummarizer: {
    title: "AI-Powered Research Summarizer",
    description: "Interactive research assistant that fetches academic papers from ArXiv, analyzes relevance using NLP techniques (TF-IDF & LSA), generates summaries via OpenAI or Ollama LLMs, and evaluates results with ROUGE scores.",
    category: "AI/ML",
    status: "Production",
    technologies: ["Python", "Sentence Transformers", "ArXiv API", "TF-IDF", "LSA", "OpenAI", "Ollama", "Streamlit", "ROUGE"],
    highlights: ["ArXiv integration", "TF-IDF & LSA analysis", "LLM summarization", "ROUGE evaluation"],
    links: { demo: "#", github: "#" }
  },
  
  noteTakingApp: {
    title: "Full-Stack Note Taking & Editing App",
    description: "Comprehensive web application for note creation, editing, and management. Features real-time collaboration, markdown support, and advanced search capabilities.",
    category: "Full Stack",
    status: "Production",
    technologies: ["PHP", "Vue.js", "MySQL", "Laravel", "JavaScript", "CSS3", "HTML5"],
    highlights: ["Realtime collaboration", "Full-text search", "Role-based access"],
    links: { demo: "#", github: "#" }
  },
  
  pdfChatAssistant: {
    title: "PDF Chat Assistant (RAG-Powered)",
    description: "A simple and modular RAG assistant that allows you to chat with a general-purpose LLM and upload PDF documents for contextual querying using chatbot.",
    category: "AI/ML",
    status: "Production",
    technologies: ["Python", "Flask", "Streamlit", "Ollama API", "PyMuPDF", "scikit-learn", "Requests"],
    highlights: ["RAG-powered Q&A", "PDF document upload", "General-purpose LLM chat", "Modular architecture"],
    links: { demo: "#", github: "#" }
  },
  
  cvWebsite: {
    title: "Personal CV Website",
    description: "Modern, responsive personal portfolio website built with React and TypeScript. Features clean architecture, SOLID principles, and a professional design showcasing skills and experience.",
    category: "Web Development",
    status: "Production",
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "CSS-in-JS", "Responsive Design"],
    highlights: ["Clean Architecture", "SOLID Principles", "Responsive Design", "TypeScript"],
    links: { demo: "#", github: "#" }
  }
};
