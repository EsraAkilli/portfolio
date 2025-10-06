export const projects = {
  aiSummarizer: {
    title: "AI Destekli Araştırma Özetleyici",
    description: "ArXiv'den akademik makaleleri getiren, NLP teknikleri (TF-IDF & LSA) veya sentence transformer'lar kullanarak ilgili analiz eden, OpenAI veya Ollama LLM'leri ile özetler üreten ve ROUGE skorları ile profesyonel APA tarzı referanslarla sonuçları değerlendiren etkileşimli araştırma asistanı.",
    category: "AI/ML",
    technologies: ["Python", "Sentence Transformers", "ArXiv API", "OpenAI", "Ollama", "Streamlit"],
    highlights: ["ArXiv entegrasyonu", "TF-IDF & LSA işleme", "Kosinüs benzerlik skorlaması", "Sentence transformer'lar", "LLM özetleme", "ROUGE değerlendirmesi"],
    image: "/projects/ai-powered-summarizer.png",
    links: { demo: "#", github: "https://github.com/EsraAkilli/ai-powered-research-summarizer-project" }
  },
  
  noteTakingApp: {
    title: "Full-Stack Not Alma ve Düzenleme Uygulaması",
    description: "Not oluşturma, düzenleme ve yönetimi için kapsamlı web uygulaması. Gerçek zamanlı işbirliği, markdown desteği ve gelişmiş arama özelliklerine sahip.",
    category: "Full Stack",
    technologies: ["PHP", "Vue.js", "MySQL", "Laravel", "JavaScript", "CSS3", "HTML5"],
    highlights: ["Gerçek zamanlı işbirliği", "Tam metin arama", "Rol tabanlı erişim"],
    image: "/projects/notetalks.png",
    links: { demo: "#", github: "https://github.com/EsraAkilli/notable" }
  },
  
  pdfChatAssistant: {
    title: "PDF Chat Asistanı (RAG Destekli)",
    description: "Genel amaçlı LLM ile sohbet etmenizi ve chatbot kullanarak bağlamsal sorgulama için PDF belgelerini yüklemenizi sağlayan basit ve modüler RAG asistanı.",
    category: "AI/ML",
    technologies: ["Python", "Flask", "Streamlit", "Ollama API", "PyMuPDF", "scikit-learn", "Requests"],
    highlights: ["RAG destekli S&C", "PDF belge yükleme", "LLM sohbeti", "Basit vektör deposu"],
    image: "/projects/pdf-chat-assistant.png",
    links: { demo: "#", github: "https://github.com/EsraAkilli/pdf-chat-assistant" }
  },
  
  cvWebsite: {
    title: "Kişisel CV Web Sitesi",
    description: "React ve TypeScript ile geliştirilmiş modern, responsive kişisel portföy web sitesi. Temiz mimari, SOLID prensipleri ve becerileri ve deneyimi sergileyen profesyonel tasarım özelliklerine sahip.",
    category: "Web Geliştirme",
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "CSS-in-JS", "Responsive Design"],
    highlights: ["Temiz Mimari", "SOLID Prensipleri"],
    image: "/projects/website.png",
    links: { demo: "#", github: "https://github.com/EsraAkilli/portfolio" }
  }
};
