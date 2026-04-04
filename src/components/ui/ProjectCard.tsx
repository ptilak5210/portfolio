import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, ChevronDown, ChevronUp } from 'lucide-react';
import { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const getGradientAndEmoji = (id: string) => {
    switch (id) {
      case '1':
        return { emoji: '🧠', gradient: 'from-[#0a1628] to-[#1a0a2e] dark:from-[#0a1628] dark:to-[#1a0a2e]' };
      case '2':
        return { emoji: '👥', gradient: 'from-[#1a0a2e] to-[#0a1628] dark:from-[#1a0a2e] dark:to-[#0a1628]' };
      case '3':
        return { emoji: '💬', gradient: 'from-[#0a2a1a] to-[#1a1a0a] dark:from-[#0a2a1a] dark:to-[#1a1a0a]' };
      default:
        return { emoji: '🚀', gradient: 'from-[#1a1a2e] to-[#0f3460] dark:from-[#1a1a2e] dark:to-[#0f3460]' };
    }
  };

  const { emoji, gradient } = getGradientAndEmoji(project.id);

  return (
    <motion.div
      layout
      className="group bg-white dark:bg-white/5 backdrop-blur-sm rounded-[2rem] overflow-hidden border border-slate-200 dark:border-slate-800/50 hover:border-[var(--primary)]/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.15),_0_0_20px_rgba(0,212,255,0.1)] shadow-sm dark:shadow-none flex flex-col h-full"
    >
      <div className={`h-48 md:h-56 bg-gradient-to-br ${gradient} flex items-center justify-center relative overflow-hidden`}>
        <div className="absolute inset-0 bg-white/5 dark:bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
        
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 z-0"
          />
        ) : (
          <span className="text-6xl md:text-7xl group-hover:scale-110 transition-transform duration-700 relative z-10 filter drop-shadow-xl">
            {emoji}
          </span>
        )}

        <div className="absolute top-4 right-4 z-20">
          <span className="px-4 py-1.5 bg-black/50 backdrop-blur-md rounded-full text-[10px] font-mono font-bold text-white uppercase tracking-[0.2em] border border-white/10 shadow-xl">
            {project.category}
          </span>
        </div>
      </div>

      <div className="p-8">
        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="text-[9px] font-mono font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest bg-slate-100 dark:bg-slate-800/50 px-3 py-1 rounded-lg border border-slate-200 dark:border-slate-700/50"
            >
              {tech}
            </span>
          ))}
        </div>

        <h3 className="text-2xl font-display font-black text-slate-900 dark:text-white mb-3 tracking-tighter group-hover:text-[var(--primary)] transition-colors">
          {project.title}
        </h3>
        <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed font-medium text-sm">
          {project.description}
        </p>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-2 text-xs font-mono font-bold text-[var(--primary)] hover:text-[var(--secondary)] transition-colors mb-6 uppercase tracking-widest"
        >
          {isExpanded ? (
            <>
              Hide Details <ChevronUp className="w-4 h-4" />
            </>
          ) : (
            <>
              Show Details <ChevronDown className="w-4 h-4" />
            </>
          )}
        </button>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden mb-6"
            >
              <div className="space-y-6 pt-6 border-t border-slate-200 dark:border-slate-800">
                <div>
                  <h4 className="text-[10px] font-mono font-bold text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] mb-2">Problem</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">{project.problem}</p>
                </div>
                <div>
                  <h4 className="text-[10px] font-mono font-bold text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] mb-2">Solution</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">{project.solution}</p>
                </div>
                <div className="bg-emerald-500/5 p-4 rounded-2xl border border-emerald-500/10">
                  <h4 className="text-[10px] font-mono font-bold text-emerald-500 uppercase tracking-[0.2em] mb-2">Impact</h4>
                  <p className="text-sm text-emerald-600 dark:text-emerald-400 leading-relaxed font-bold">{project.impact}</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex gap-6 pt-6 border-t border-slate-200 dark:border-slate-800">
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-mono font-bold text-slate-900 dark:text-white hover:text-[var(--primary)] transition-colors uppercase tracking-widest"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
          )}
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-mono font-bold text-slate-900 dark:text-white hover:text-[var(--primary)] transition-colors uppercase tracking-widest"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};
