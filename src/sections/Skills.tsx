import { useState } from 'react';
import { skills } from '../data/skills';
import { Code2, Layout, Database, Cpu } from 'lucide-react';

export const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const categories = [
    { id: 'backend', title: 'Backend', icon: Code2, color: 'text-[var(--primary)]', bg: 'bg-[var(--primary)]/10' },
    { id: 'frontend', title: 'Frontend', icon: Layout, color: 'text-[var(--secondary)]', bg: 'bg-[var(--secondary)]/10' },
    { id: 'database', title: 'Database', icon: Database, color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
    { id: 'ai-tools', title: 'AI & Tools', icon: Cpu, color: 'text-purple-500', bg: 'bg-purple-500/10' },
  ];

  return (
    <section id="skills" className="section-padding bg-transparent transition-colors duration-300">
      <div className="container-custom">
        <div className="mb-20">
          <span className="text-[var(--primary)] font-mono text-xs font-bold uppercase tracking-[0.3em] mb-4 block">
            // tech_stack.json
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-black text-slate-900 dark:text-white mb-6 tracking-tighter">
            Technical <span className="text-gradient">Arsenal</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl font-medium">
            A specialized set of tools and technologies focused on building high-performance Python backends, AI integrations, and web automation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat) => (
            <div 
              key={cat.id}
              className="p-10 bg-white dark:bg-white/5 backdrop-blur-sm border border-slate-200 dark:border-slate-800/50 rounded-[2.5rem] hover:border-[var(--primary)]/30 transition-all duration-500 hover:shadow-2xl shadow-sm dark:shadow-none group"
            >
              <div className={`w-14 h-14 ${cat.bg} rounded-2xl flex items-center justify-center mb-8 border border-white/10 group-hover:scale-110 transition-transform duration-500`}>
                <cat.icon className={`w-7 h-7 ${cat.color}`} />
              </div>
              <h3 className="text-2xl font-display font-black text-slate-900 dark:text-white mb-8 tracking-tight">{cat.title}</h3>
              <div className="space-y-4">
                {skills
                  .filter((s) => s.category === cat.id)
                  .map((skill) => (
                    <div
                      key={skill.id}
                      onMouseEnter={() => setHoveredSkill(skill.name)}
                      onMouseLeave={() => setHoveredSkill(null)}
                      className={`px-5 py-3 rounded-2xl border transition-all cursor-default font-mono text-xs font-bold uppercase tracking-widest ${
                        hoveredSkill === skill.name
                          ? 'border-[var(--primary)]/50 bg-[var(--primary)]/10 text-[var(--primary)] translate-x-2'
                          : 'border-slate-200/50 dark:border-slate-800/50 bg-slate-100/50 dark:bg-slate-800/30 text-slate-600 dark:text-slate-400'
                      }`}
                    >
                      <span>{skill.name}</span>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>



      </div>
    </section>
  );
};
