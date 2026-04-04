import React, { useEffect, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  icon: LucideIcon;
  label: string;
  value: number;
  suffix?: string;
  delay?: number;
}

export const StatCard: React.FC<StatCardProps> = ({ icon: Icon, label, value, suffix = '', delay = 0 }) => {
  const [count, setCount] = useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000; // 2 seconds
      const increment = end / (duration / 16); // 60fps

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="p-8 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center"
    >
      <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-2xl flex items-center justify-center mb-6">
        <Icon className="w-6 h-6" />
      </div>
      <div className="text-4xl font-bold text-slate-900 dark:text-white mb-2">
        {count}{suffix}
      </div>
      <div className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest">
        {label}
      </div>
    </motion.div>
  );
};
