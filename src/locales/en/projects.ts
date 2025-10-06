export const projects = {
  aiSummarizer: {
    title: "AI-Powered Research Summarizer",
    description: "Interactive research assistant that fetches academic papers from ArXiv, analyzes their relevance using NLP techniques (TF-IDF & LSA) or sentence transformers, generates summaries via OpenAI or Ollama LLMs, and evaluates the results with ROUGE scores and professional APA-style references.",
    category: "AI/ML",
    technologies: ["Python", "Sentence Transformers", "ArXiv API", "OpenAI", "Ollama", "Streamlit"],
    highlights: ["ArXiv integration", "TF-IDF & LSA processing", "Cosine similarity scoring", "Sentence transformers", "LLM summarization", "ROUGE evaluation"],
    image: "/projects/ai-powered-summarizer.png",
    links: { demo: "#", github: "https://github.com/EsraAkilli/ai-powered-research-summarizer-project" }
  },
  
  noteTakingApp: {
    title: "Full-Stack Note Taking & Editing App",
    description: "Comprehensive web application for note creation, editing, and management. Features real-time collaboration, markdown support, and advanced search capabilities.",
    category: "Full Stack",
    technologies: ["PHP", "Vue.js", "MySQL", "Laravel", "JavaScript", "CSS3", "HTML5"],
    highlights: ["Realtime collaboration", "Full-text search", "Role-based access"],
    image: "/projects/notetalks.png",
    links: { demo: "#", github: "https://github.com/EsraAkilli/notable" }
  },
  
  pdfChatAssistant: {
    title: "PDF Chat Assistant (RAG-Powered)",
    description: "A simple and modular RAG assistant that allows you to chat with a general-purpose LLM and upload PDF documents for contextual querying using chatbot.",
    category: "AI/ML",
    technologies: ["Python", "Flask", "Streamlit", "Ollama API", "PyMuPDF", "scikit-learn", "Requests"],
    highlights: ["RAG-powered Q&A", "PDF document upload", "LLM chat", "Simple vector store"],
    image: "/projects/pdf-chat-assistant.png",
    links: { demo: "#", github: "https://github.com/EsraAkilli/pdf-chat-assistant" }
  },
  
  cvWebsite: {
    title: "Personal CV Website",
    description: "Modern, responsive personal portfolio website built with React and TypeScript. Features clean architecture, SOLID principles, and a professional design showcasing skills and experience.",
    category: "Web Development",
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "CSS-in-JS", "Responsive Design"],
    highlights: ["Clean Architecture", "SOLID Principles"],
    image: "/projects/website.png",
    links: { demo: "#", github: "https://github.com/EsraAkilli/portfolio" }
  }
};
