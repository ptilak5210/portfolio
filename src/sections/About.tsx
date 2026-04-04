import { CheckCircle2 } from 'lucide-react';

export const About = () => {
  const highlights = [
    {
      title: "Who I am",
      description: "Results-driven Python Developer with production-level experience building full-stack applications using Django, Flask, FastAPI, and React."
    },
    {
      title: "What I do",
      description: "I specialize in engineering secure REST APIs, integrating AI/ML APIs, and optimizing backend performance for scalable systems."
    },
    {
      title: "My Experience",
      description: "Proven ability to automate business workflows and deliver end-to-end projects across multiple professional internships."
    }
  ];

  return (
    <section id="about" className="section-padding bg-transparent transition-colors duration-300">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <span className="text-[var(--primary)] font-mono text-xs font-bold uppercase tracking-[0.3em] mb-4 block">
              // about_me.py
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-black text-slate-900 dark:text-white mb-8 tracking-tighter">
              The <span className="text-gradient">Journey</span>
            </h2>
            <div className="space-y-6 text-lg text-slate-600 dark:text-slate-400 font-medium">
              <p>I am a results-driven Python Developer with production-level experience building full-stack applications using Django, Flask, FastAPI, and React.</p>
              <p>My core focus lies in engineering secure REST APIs, integrating cutting-edge AI/ML APIs, and optimizing backend performance to support scalable and resilient systems.</p>
              <p>Across multiple professional internships, I've demonstrated a proven ability to automate complex business workflows and deliver impactful end-to-end projects from conception to deployment.</p>
            </div>
          </div>
          
          <div className="flex flex-col gap-4">
            {[
              { label: "Currently Studying", value: "Master of Computer Applications (MCA)" },
              { label: "Experience", value: "6 Months · Vedanco IT Solution" },
              { label: "Specialization", value: "Backend Architecture & AI Integration" },
              { label: "Location", value: "Gujarat, India" },
              { label: "GitHub", value: "@ptilak5210", isLink: true }
            ].map((info, idx) => (
              <div 
                key={idx}
                className="bg-white dark:bg-black/20 backdrop-blur-sm border border-slate-200 dark:border-slate-800 border-l-[3px] border-l-transparent hover:border-l-[var(--primary)] p-6 rounded-lg transition-all duration-300 hover:translate-x-2 shadow-sm dark:shadow-none hover:shadow-[-4px_0_15px_rgba(0,212,255,0.1)] group"
              >
                <div className="font-mono text-xs text-slate-400 dark:text-slate-500 uppercase mb-2 tracking-widest">{info.label}</div>
                {info.isLink ? (
                  <a href="https://github.com/ptilak5210" target="_blank" rel="noopener noreferrer" className="text-lg font-medium text-slate-900 dark:text-slate-100 group-hover:text-[var(--primary)] transition-colors">
                    {info.value}
                  </a>
                ) : (
                  <div className="text-lg font-medium text-slate-900 dark:text-slate-100">{info.value}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
