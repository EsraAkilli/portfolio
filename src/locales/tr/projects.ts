export const projects = {
  aiSummarizer: {
    title: "AI Destekli Araştırma Özetleyici",
    description: "ArXiv'den akademik makaleleri getiren, NLP teknikleri (TF-IDF & LSA) kullanarak ilgili analiz eden, OpenAI veya Ollama LLM'leri ile özetler üreten ve ROUGE skorları ile sonuçları değerlendiren etkileşimli araştırma asistanı.",
    category: "AI/ML",
    status: "Üretim",
    technologies: ["Python", "Sentence Transformers", "ArXiv API", "TF-IDF", "LSA", "OpenAI", "Ollama", "Streamlit", "ROUGE"],
    highlights: ["ArXiv entegrasyonu", "TF-IDF & LSA analizi", "LLM özetleme", "ROUGE değerlendirmesi"],
    links: { demo: "#", github: "#" }
  },
  
  noteTakingApp: {
    title: "Full-Stack Not Alma ve Düzenleme Uygulaması",
    description: "Not oluşturma, düzenleme ve yönetimi için kapsamlı web uygulaması. Gerçek zamanlı işbirliği, markdown desteği ve gelişmiş arama özelliklerine sahip.",
    category: "Full Stack",
    status: "Üretim",
    technologies: ["PHP", "Vue.js", "MySQL", "Laravel", "JavaScript", "CSS3", "HTML5"],
    highlights: ["Gerçek zamanlı işbirliği", "Tam metin arama", "Rol tabanlı erişim"],
    links: { demo: "#", github: "#" }
  },
  
  pdfChatAssistant: {
    title: "PDF Chat Asistanı (RAG Destekli)",
    description: "Genel amaçlı LLM ile sohbet etmenizi ve chatbot kullanarak bağlamsal sorgulama için PDF belgelerini yüklemenizi sağlayan basit ve modüler RAG asistanı.",
    category: "AI/ML",
    status: "Üretim",
    technologies: ["Python", "Flask", "Streamlit", "Ollama API", "PyMuPDF", "scikit-learn", "Requests"],
    highlights: ["RAG destekli S&C", "PDF belge yükleme", "Genel amaçlı LLM sohbeti", "Modüler mimari"],
    links: { demo: "#", github: "#" }
  },
  
  cvWebsite: {
    title: "Kişisel CV Web Sitesi",
    description: "React ve TypeScript ile geliştirilmiş modern, responsive kişisel portföy web sitesi. Temiz mimari, SOLID prensipleri ve becerileri ve deneyimi sergileyen profesyonel tasarım özelliklerine sahip.",
    category: "Web Geliştirme",
    status: "Üretim",
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "CSS-in-JS", "Responsive Design"],
    highlights: ["Temiz Mimari", "SOLID Prensipleri", "Responsive Tasarım", "TypeScript"],
    links: { demo: "#", github: "#" }
  }
};
