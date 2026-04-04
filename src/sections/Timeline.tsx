import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, Code, Briefcase, Rocket } from 'lucide-react';

interface TimelineItem {
  id: number;
  title: string;
  description: string;
  phase: string;
  icon: React.ElementType;
}

const timelineData: TimelineItem[] = [
  {
    id: 1,
    title: "Bachelor of Commerce (B.Com)",
    description: "Completed undergraduate studies at Anjana Patidar Commerce College, Idar. Built a strong foundation in analytical thinking and business fundamentals.",
    phase: "2021 – 2023",
    icon: BookOpen,
  },
  {
    id: 2,
    title: "Python Developer",
    description: "Worked at Xipra Technology, Himmatnagar. Developed 3+ Python web applications and implemented automation scripts that reduced manual task time significantly.",
    phase: "Mar 2024 – Sep 2024",
    icon: Code,
  },
  {
    id: 3,
    title: "Master of Computer Applications (MCA)",
    description: "Currently pursuing MCA at Monark University, Ahmedabad. Specializing in full-stack development, AI systems, and backend engineering.",
    phase: "2024 – 2026",
    icon: BookOpen,
  },
  {
    id: 4,
    title: "Python Developer",
    description: "Working at Vedanco IT Solution, Gandhinagar. Building production-grade backend systems using Django & FastAPI, and optimizing database performance.",
    phase: "Oct 2025 – Present",
    icon: Briefcase,
  },
];

export const Timeline = () => {
  return (
    <section id="timeline" className="section-padding bg-transparent transition-colors duration-300">
      <div className="container-custom">
        <div className="text-center mb-20">
          <span className="text-[var(--primary)] font-mono text-xs font-bold uppercase tracking-[0.3em] mb-4 block">
            // career_log.txt
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-black text-slate-900 dark:text-white mb-6 tracking-tighter">
            Professional <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-medium">
            A timeline of my growth, from my B.Com studies to building production-ready Python backends and AI systems.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--primary)] to-[var(--secondary)] -translate-x-1/2 hidden md:block" />
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--primary)] to-[var(--secondary)] md:hidden" />

          <div className="space-y-16">
            {timelineData.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`relative flex items-center justify-between md:justify-normal w-full ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Content Card */}
                <div className="w-full md:w-[45%] pl-12 md:pl-0">
                  <div className="card-glow-border p-8 bg-white dark:bg-white/5 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-2xl transition-all duration-500 hover:shadow-xl shadow-sm dark:shadow-none group">
                    <span className="text-[10px] font-mono font-bold text-[var(--primary)] uppercase tracking-[0.2em] mb-3 block">
                      {item.phase}
                    </span>
                    <h3 className="text-2xl font-display font-black text-slate-900 dark:text-white mb-3 tracking-tight group-hover:text-[var(--primary)] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium text-sm md:text-base">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Dot */}
                <div className="absolute left-0 md:left-1/2 -translate-x-1/2 z-10">
                  <div className="w-5 h-5 rounded-full bg-[var(--primary)] shadow-[0_0_12px_rgba(0,212,255,0.8)] border-4 border-white dark:border-[#06060f]" />
                </div>

                {/* Spacer for Desktop */}
                <div className="hidden md:block w-[45%]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
