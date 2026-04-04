import { useEffect, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

const CountUp = ({ to, suffix = '' }: { to: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let current = 0;
      const totalSteps = 50;
      const stepValue = to / totalSteps;
      const interval = setInterval(() => {
        current += stepValue;
        if (current >= to) {
          setCount(to);
          clearInterval(interval);
        } else {
          setCount(Math.ceil(current));
        }
      }, 30);
      return () => clearInterval(interval);
    }
  }, [isInView, to]);

  return (
    <span ref={ref} className="font-display text-gradient text-4xl md:text-5xl font-black">
      {count}
      {suffix}
    </span>
  );
};

export const StatsBar = () => {
  const stats = [
    { value: 3, suffix: '+', label: 'END-TO-END\nPROJECTS' },
    { value: 20, suffix: '+', label: 'TECHNOLOGIES USED' },
    { value: 6, suffix: '+', label: 'MONTHS\nEXPERIENCE' },
    { value: 100, suffix: '+', label: 'GITHUB COMMITS' }
  ];

  return (
    <div className="w-full border-y border-slate-300 dark:border-slate-700 bg-transparent relative z-20">
      <div className="grid grid-cols-2 md:grid-cols-4 max-w-7xl mx-auto border-x border-slate-300 dark:border-slate-700">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`py-12 px-6 text-center flex flex-col items-center justify-center border-slate-300 dark:border-slate-700 ${
              index !== stats.length - 1 ? 'md:border-r' : ''
            } ${(index === 0 || index === 1) ? 'border-b md:border-b-0' : ''} ${index % 2 === 0 ? 'border-r md:border-r' : ''}`}
          >
            <div className="mb-4">
              <CountUp to={stat.value} suffix={stat.suffix} />
            </div>
            <div className="font-mono text-[11px] md:text-xs font-bold text-slate-500 uppercase tracking-[0.2em] whitespace-pre-line leading-loose">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
