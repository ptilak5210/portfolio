import { Skill } from '../types';

export const skills: Skill[] = [
  // Backend
  { id: 'b1', name: 'Python', category: 'backend' },
  { id: 'b2', name: 'Django', category: 'backend' },
  { id: 'b3', name: 'Flask', category: 'backend' },
  { id: 'b4', name: 'FastAPI', category: 'backend' },
  { id: 'b5', name: 'Node.js', category: 'backend' },
  { id: 'b6', name: 'Express', category: 'backend' },
  
  // Frontend
  { id: 'f1', name: 'React.js', category: 'frontend' },
  { id: 'f2', name: 'TypeScript', category: 'frontend' },
  { id: 'f3', name: 'JavaScript', category: 'frontend' },
  { id: 'f4', name: 'HTML5/CSS3', category: 'frontend' },
  
  // Database
  { id: 'd1', name: 'PostgreSQL', category: 'database' },
  { id: 'd2', name: 'MySQL', category: 'database' },
  { id: 'd3', name: 'Supabase', category: 'database' },
  { id: 'd4', name: 'Redis', category: 'database' },
  { id: 'd5', name: 'SQLite', category: 'database' },
  
  // AI / Tools
  { id: 'a1', name: 'OpenAI API', category: 'ai-tools' },
  { id: 'a2', name: 'Gemini API', category: 'ai-tools' },
  { id: 'a3', name: 'n8n Automation', category: 'ai-tools' },
  { id: 'a4', name: 'Docker', category: 'ai-tools' },
  { id: 'a5', name: 'Git/GitHub', category: 'ai-tools' },
];
