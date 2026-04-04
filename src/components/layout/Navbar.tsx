import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sun, Moon } from 'lucide-react';

interface NavbarProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export const Navbar = ({ theme, toggleTheme }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const navLinks = [
    { name: 'Home', href: '#hero', num: '01' },
    { name: 'About', href: '#about', num: '02' },
    { name: 'Skills', href: '#skills', num: '03' },
    { name: 'Projects', href: '#projects', num: '04' },
    { name: 'Resume', href: '#resume', num: '05' },
    { name: 'Contact', href: '#contact', num: '06' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`sticky top-0 z-50 w-full transition-all duration-300 border-b ${
          isScrolled
            ? 'bg-white/95 dark:bg-[#06060f]/95 backdrop-blur-lg border-slate-200 dark:border-slate-800/50 shadow-sm'
            : 'bg-transparent border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex justify-between items-center transition-all duration-300 ${isScrolled ? 'h-16' : 'h-24'}`}>

            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="#hero" className="flex items-center gap-3 group">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] blur-sm opacity-60 group-hover:opacity-100 transition-opacity duration-300 scale-110" />
                  <img
                    src="/Gemini_Generated_Image_8sfmh98sfmh98sfm.png"
                    alt="Tilak Patel"
                    className="relative w-10 h-10 rounded-full object-cover object-top border-2 border-[var(--primary)]/70"
                  />
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-white dark:border-[#06060f] animate-pulse" />
                </div>
                <div className="flex flex-col leading-none">
                  <span className="text-base font-black text-slate-900 dark:text-white tracking-tight group-hover:text-[var(--primary)] transition-colors duration-300">
                    Tilak Patel
                  </span>
                  <span className="text-[10px] font-mono text-[var(--primary)] tracking-widest uppercase opacity-70">
                    Python Dev
                  </span>
                </div>
              </a>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex flex-1 justify-end items-center mr-8">
              <div className="flex items-center space-x-8">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-[15px] font-medium text-slate-600 dark:text-slate-300 hover:text-[var(--primary)] dark:hover:text-[var(--primary)] transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Right side: theme + hamburger */}
            <div className="flex items-center gap-3">
              <button
                onClick={toggleTheme}
                className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-800/50 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>

              {/* Hamburger - mobile only */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-[5px] rounded-xl bg-slate-100 dark:bg-slate-800/50 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
                aria-label="Toggle menu"
              >
                <motion.span
                  animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-5 h-[2px] bg-slate-700 dark:bg-white rounded-full block"
                />
                <motion.span
                  animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                  transition={{ duration: 0.2 }}
                  className="w-5 h-[2px] bg-slate-700 dark:bg-white rounded-full block"
                />
                <motion.span
                  animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-5 h-[2px] bg-slate-700 dark:bg-white rounded-full block"
                />
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 h-full w-[70%] max-w-[280px] bg-white dark:bg-[#0d0d1a] z-50 md:hidden flex flex-col shadow-2xl border-l border-slate-200 dark:border-slate-800"
            >
              {/* Close button only */}
              <div className="flex items-center justify-end p-5 border-b border-slate-100 dark:border-slate-800/60">
                <button
                  onClick={() => setMenuOpen(false)}
                  className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-[var(--primary)] transition-colors text-base font-bold"
                >
                  ✕
                </button>
              </div>

              {/* Nav Links */}
              <nav className="flex flex-col px-4 py-6 gap-1 flex-1">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06, duration: 0.3 }}
                    className="group flex items-center gap-3 px-4 py-3.5 rounded-2xl hover:bg-slate-50 dark:hover:bg-white/5 transition-all duration-200"
                  >
                    <span className="text-base font-bold text-slate-800 dark:text-white group-hover:text-[var(--primary)] transition-colors">
                      {link.name}
                    </span>
                  </motion.a>
                ))}
              </nav>

              {/* Footer */}
              <div className="px-6 py-6 border-t border-slate-100 dark:border-slate-800/60">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <img
                      src="/Gemini_Generated_Image_8sfmh98sfmh98sfm.png"
                      alt="Tilak Patel"
                      className="w-9 h-9 rounded-full object-cover object-top border-2 border-[var(--primary)]/50"
                    />
                    <span className="absolute bottom-0 right-0 w-2 h-2 bg-emerald-400 rounded-full border border-white dark:border-[#0d0d1a]" />
                  </div>
                  <div>
                    <p className="text-sm font-black text-slate-900 dark:text-white leading-none">Tilak Patel</p>
                    <p className="text-[10px] font-mono text-[var(--primary)] uppercase tracking-widest mt-0.5 opacity-70">Python Dev</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
