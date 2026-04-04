import React, { useState } from 'react';
import { projects } from '../data/projects';
import { ProjectCard } from '../components/ui/ProjectCard';
import { motion, AnimatePresence } from 'motion/react';

type FilterType = 'All' | 'Python' | 'AI' | 'Full Stack';

export const Projects = () => {
  const [filter, setFilter] = useState<FilterType>('All');

  const filteredProjects = projects.filter(
    (project) => filter === 'All' || project.category === filter
  );

  const filters: FilterType[] = ['All', 'Python', 'AI', 'Full Stack'];

  return (
    <section id="projects" className="section-padding bg-transparent transition-colors duration-300">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <div>
            <span className="text-[var(--primary)] font-mono text-xs font-bold uppercase tracking-[0.3em] mb-4 block">
              // featured_projects.py
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-black text-slate-900 dark:text-white mb-4 tracking-tighter">
              Selected <span className="text-gradient">Works</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl font-medium">
              A selection of my recent work, focusing on solving complex problems with AI and scalable backend architectures.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 bg-slate-100 dark:bg-slate-900/50 p-1 rounded-2xl border border-slate-200 dark:border-slate-800">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-6 py-2 rounded-xl text-xs font-mono font-bold uppercase tracking-widest transition-all ${
                  filter === f
                    ? 'bg-white dark:bg-slate-800 text-[var(--primary)] shadow-sm'
                    : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
