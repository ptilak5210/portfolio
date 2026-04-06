import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Download } from 'lucide-react';
import { GridBackground } from '../components/ui/GridBackground';

export const Hero = () => {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);

    const roles = ["Backend Engineer", "Python Developer", "AI Specialist", "Automation Expert"];

    useEffect(() => {
        const handleTyping = () => {
            const i = loopNum % roles.length;
            const fullText = roles[i];

            setText(isDeleting
                ? fullText.substring(0, text.length - 1)
                : fullText.substring(0, text.length + 1)
            );

            setTypingSpeed(isDeleting ? 50 : 150);

            if (!isDeleting && text === fullText) {
                setTimeout(() => setIsDeleting(true), 2000);
            } else if (isDeleting && text === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum, typingSpeed]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
    };

    return (
        <section id="hero" className="relative min-h-screen flex items-center pt-10 md:pt-20 overflow-hidden">
            <div className="container-custom relative z-10">
                <div className="grid lg:grid-cols-[1fr_0.7fr] gap-6 lg:gap-8 items-center">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="text-left"
                    >
                        {/* Availability Badge */}
                        <motion.div
                            variants={itemVariants}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-xs font-mono font-bold uppercase tracking-widest mb-8"
                        >
                            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                            Open for Python & Backend Roles
                        </motion.div>

                        {/* Name */}
                        <motion.h1
                            variants={itemVariants}
                            className="text-5xl sm:text-7xl md:text-9xl font-display font-black text-slate-900 dark:text-white tracking-tighter mb-4 leading-none"
                        >
                            Tilak <br /><span className="text-gradient">Patel</span>
                        </motion.h1>

                        {/* Typewriter Role */}
                        <motion.div
                            variants={itemVariants}
                            className="text-xl md:text-2xl font-mono font-medium text-[var(--primary)] mb-6 min-h-[1.6em]"
                        >
                            {text}<span className="border-r-2 border-[var(--primary)] ml-1 animate-pulse" />
                        </motion.div>

                        {/* One-liner */}
                        <motion.p
                            variants={itemVariants}
                            className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed mb-10"
                        >
                            I build <span className="text-slate-900 dark:text-white font-bold">scalable backends</span>, <span className="text-slate-900 dark:text-white font-bold">AI-powered platforms</span>, and production-grade full-stack systems that solve <span className="text-slate-900 dark:text-white font-bold">real business problems</span>.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            variants={itemVariants}
                            className="flex flex-wrap gap-4"
                        >
                            <a
                                href="#projects"
                                className="group inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-[var(--primary)] text-black rounded-xl font-bold hover:shadow-[0_0_20px_rgba(0,212,255,0.3)] transition-all hover:-translate-y-1 text-sm sm:text-base"
                            >
                                <span>▶</span> View Projects
                            </a>

                            <a
                                href="https://resume-blond-one-35.vercel.app"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white rounded-xl font-bold bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all hover:-translate-y-1 text-sm sm:text-base"
                            >
                                <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                                Resume
                            </a>
                        </motion.div>
                    </motion.div>

                    {/* Avatar Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="relative flex justify-center lg:justify-end mb-10 md:mb-0"
                    >
                        <div className="relative w-64 h-64 md:w-80 md:h-80">
                            {/* Rotating Ring */}
                            <div className="absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,transparent,var(--primary),transparent)] animate-spin-slow opacity-100" />

                            {/* Inner Cutout (Matching Background) */}
                            <div className="absolute inset-[6px] rounded-full bg-[var(--bg)] transition-colors duration-300 z-10" />

                            {/* Avatar Inner */}
                            <div className="absolute inset-[20px] rounded-full bg-slate-200 dark:bg-slate-800 z-20 overflow-hidden shadow-2xl transition-all duration-300">
                                <img
                                    src="/Gemini_Generated_Image_8sfmh98sfmh98sfm.png"
                                    alt="Tilak Patel"
                                    fetchpriority="high"
                                    loading="eager"
                                    className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                                    onError={(e) => { e.currentTarget.src = 'https://ui-avatars.com/api/?name=Tilak+Patel&background=00d4ff&color=fff&size=512'; }}
                                />
                            </div>

                            {/* Tech Chips */}
                            <div className="absolute top-[10%] -right-4 z-30 animate-float">
                                <div className="flex items-center gap-2 px-4 py-2 bg-[var(--bg)] border border-slate-200 dark:border-slate-800 rounded-xl shadow-xl">
                                    <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                                    <span className="text-[10px] font-mono font-bold text-slate-900 dark:text-white">Python 3.12</span>
                                </div>
                            </div>

                            <div className="absolute bottom-[20%] -left-8 z-30 animate-float" style={{ animationDelay: '1s' }}>
                                <div className="flex items-center gap-2 px-4 py-2 bg-[var(--bg)] border border-slate-200 dark:border-slate-800 rounded-xl shadow-xl">
                                    <div className="w-2 h-2 bg-[var(--primary)] rounded-full" />
                                    <span className="text-[10px] font-mono font-bold text-slate-900 dark:text-white">FastAPI</span>
                                </div>
                            </div>

                            <div className="absolute bottom-[5%] -right-2 z-30 animate-float" style={{ animationDelay: '2s' }}>
                                <div className="flex items-center gap-2 px-4 py-2 bg-[var(--bg)] border border-slate-200 dark:border-slate-800 rounded-xl shadow-xl">
                                    <div className="w-2 h-2 bg-[var(--secondary)] rounded-full" />
                                    <span className="text-[10px] font-mono font-bold text-slate-900 dark:text-white">OpenAI API</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
