export interface Project {
  id: string;
  title: string;
  description: string;
  problem: string;
  solution: string;
  impact: string;
  techStack: string[];
  image: string;
  liveLink?: string;
  githubLink?: string;
  category: 'Python' | 'AI' | 'Full Stack';
}

export interface Skill {
  id: string;
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'ai-tools';
  icon?: string;
}
