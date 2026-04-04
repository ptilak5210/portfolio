import React from 'react';
import { motion } from 'motion/react';
import { FileText, Download, Eye } from 'lucide-react';

export const Resume = () => {
  const stats = [
    { value: 'MCA', label: 'Education' },
    { value: '6+', label: 'Months Experience' },
    { value: '20+', label: 'Tech Stack' },
  ];

  return (
    <section id="resume" className="section-padding bg-transparent transition-colors duration-300">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl bg-white dark:bg-[#0d0d1a] border border-slate-200 dark:border-slate-800 p-10 md:p-14 text-center shadow-lg dark:shadow-none"
          >
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-20 h-20 bg-slate-100 dark:bg-slate-800 rounded-3xl mb-8 mx-auto shadow-inner">
              <FileText className="w-9 h-9 text-slate-600 dark:text-slate-300" />
            </div>

            {/* Name */}
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-3 tracking-tight">
              Tilak Patel
            </h2>

            {/* Roles */}
            <p className="text-sm font-mono text-[var(--primary)] mb-6 tracking-widest uppercase">
              Python Developer · Backend Engineer · Web Automation
            </p>

            {/* Description */}
            <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg mb-10 max-w-lg mx-auto leading-relaxed">
              Download my full resume to learn about my complete experience
              in Python development, backend engineering, and AI-powered automation.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <a
                href="https://resume-blond-one-35.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white rounded-full font-bold text-base hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-violet-500/20"
              >
                <Download className="w-5 h-5" />
                Download Resume
              </a>

              <a
                href="https://resume-blond-one-35.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white rounded-full font-bold text-base hover:-translate-y-1 hover:border-[var(--primary)] transition-all duration-300"
              >
                <Eye className="w-5 h-5" />
                View Online
              </a>
            </div>

            {/* Divider */}
            <div className="border-t border-slate-100 dark:border-slate-800 mb-10" />

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-2xl md:text-3xl font-black text-[var(--primary)] mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-medium uppercase tracking-widest">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
