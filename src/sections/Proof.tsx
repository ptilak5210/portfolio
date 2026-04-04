import React from 'react';
import { motion } from 'motion/react';
import { Code2, GitBranch, Briefcase, Layers } from 'lucide-react';
import { StatCard } from '../components/ui/StatCard';

export const Proof = () => {
  const stats = [
    { icon: Layers, label: 'End-to-End Projects', value: 3, suffix: '+', delay: 0.1 },
    { icon: Code2, label: 'Technologies Used', value: 20, suffix: '+', delay: 0.2 },
    { icon: Briefcase, label: 'Professional Internships', value: 2, suffix: '', delay: 0.3 },
    { icon: GitBranch, label: 'GitHub Commits', value: 100, suffix: '+', delay: 0.4 },
  ];

  return (
    <section id="proof" className="section-padding bg-slate-50 dark:bg-slate-900/50 transition-colors duration-300">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
            Proof of Work
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Consistency and technical excellence backed by real data and active contributions.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>

        {/* GitHub Visual Proof */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white dark:bg-slate-900 p-8 md:p-12 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/3 text-center lg:text-left">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">GitHub Activity</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                I maintain a consistent coding streak, focusing on production-grade Python backends and AI-powered automation.
              </p>

              {/* Live GitHub Stats Card */}
              <div className="mb-4">
                <img
                  src="https://github-readme-stats.vercel.app/api?username=ptilak5210&show_icons=true&theme=transparent&hide_border=true&title_color=8b5cf6&icon_color=06b6d4&text_color=64748b&bg_color=00000000&hide=prs"
                  alt="GitHub Stats"
                  className="w-full rounded-xl dark:hidden"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
                <img
                  src="https://github-readme-stats.vercel.app/api?username=ptilak5210&show_icons=true&theme=transparent&hide_border=true&title_color=8b5cf6&icon_color=06b6d4&text_color=94a3b8&bg_color=00000000&hide=prs"
                  alt="GitHub Stats"
                  className="w-full rounded-xl hidden dark:block"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
              </div>

              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <div className="px-4 py-2 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700">
                  <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest block mb-1">Top Language</span>
                  <span className="text-sm font-bold text-blue-600 dark:text-blue-400">Python</span>
                </div>
                <div className="px-4 py-2 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700">
                  <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest block mb-1">GitHub</span>
                  <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400">@ptilak5210</span>
                </div>
              </div>
            </div>

            <div className="lg:w-2/3 w-full flex flex-col gap-4">
              {/* Live Contribution Graph */}
              <div className="bg-slate-50 dark:bg-slate-800/50 rounded-3xl p-6 border border-slate-100 dark:border-slate-800 overflow-hidden">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">Contribution Graph</span>
                  <span className="text-xs text-slate-400 dark:text-slate-500">Live · Past 12 Months</span>
                </div>
                <img
                  src="https://ghchart.rshah.org/8b5cf6/ptilak5210"
                  alt="Tilak Patel's GitHub Contribution Chart"
                  className="w-full rounded-lg dark:invert dark:hue-rotate-180 dark:brightness-90"
                  onError={(e) => { e.currentTarget.alt = 'GitHub chart loading...'; }}
                />
              </div>

              {/* Live Top Languages */}
              <img
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=ptilak5210&layout=compact&theme=transparent&hide_border=true&title_color=8b5cf6&text_color=64748b&bg_color=00000000&langs_count=6"
                alt="Top Languages"
                className="w-full rounded-xl dark:hidden"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
              <img
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=ptilak5210&layout=compact&theme=transparent&hide_border=true&title_color=8b5cf6&text_color=94a3b8&bg_color=00000000&langs_count=6"
                alt="Top Languages"
                className="w-full rounded-xl hidden dark:block"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
