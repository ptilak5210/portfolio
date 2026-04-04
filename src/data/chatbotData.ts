export interface ChatbotResponse {
  keywords: string[];
  response: string;
  category: 'projects' | 'skills' | 'experience' | 'contact' | 'general';
}

export const CHATBOT_DATA: ChatbotResponse[] = [
  {
    keywords: ['project', 'work', 'portfolio', 'build', 'made'],
    category: 'projects',
    response: "Tilak has built several production-grade systems:\n\n• **AI Resume Analyzer**: Flask/React platform with NLP for ATS scoring.\n• **HRFlow**: Full-stack HR management system with FastAPI and React 19.\n• **SalesAI**: WhatsApp CRM using Node.js and Gemini API for automation.\n\nYou can see more details in the Projects section of this site!",
  },
  {
    keywords: ['skill', 'tech', 'language', 'stack', 'tool', 'python', 'react'],
    category: 'skills',
    response: "Tilak's technical arsenal is divided into:\n\n• **Backend**: Python (Django, Flask, FastAPI), Node.js, Express.\n• **Frontend**: React.js, TypeScript, Tailwind CSS.\n• **Databases**: PostgreSQL, MySQL, Supabase, Redis.\n• **AI & Tools**: OpenAI/Gemini APIs, Docker, Git, n8n Automation.",
  },
  {
    keywords: ['experience', 'journey', 'intern', 'job', 'work', 'mca', 'education'],
    category: 'experience',
    response: "Tilak is currently an **MCA student** at Monark University (2024-2026). \n\nHis professional experience includes:\n• **Python Developer Intern** at Vedanco IT Solution (Oct 2025 – Present).\n• **Python Developer Intern** at Xipra Technology (Mar 2024 – Sep 2024).\n\nHe specializes in building scalable backends and AI integrations.",
  },
  {
    keywords: ['contact', 'email', 'phone', 'reach', 'hire', 'linkedin', 'github'],
    category: 'contact',
    response: "You can reach Tilak through these channels:\n\n• **Email**: ptilak5210@gmail.com\n• **Phone**: +91 7490961147\n• **LinkedIn**: linkedin.com/in/tilak-patel\n• **GitHub**: github.com/ptilak5210\n\nHe's currently open for Python and Backend roles!",
  },
  {
    keywords: ['hi', 'hello', 'hey', 'who are you', 'help'],
    category: 'general',
    response: "Hello! I'm Tilak's AI assistant. I can tell you about his projects, skills, professional experience, or how to contact him. What would you like to know?",
  },
];

export const FALLBACK_RESPONSE = "I'm not sure I understand that. You can ask me about Tilak's **projects**, **skills**, **experience**, or **contact** information!";

export const QUICK_OPTIONS = [
  { label: "Show projects", value: "projects" },
  { label: "Technical skills", value: "skills" },
  { label: "Experience summary", value: "experience" },
  { label: "Contact info", value: "contact" },
];
