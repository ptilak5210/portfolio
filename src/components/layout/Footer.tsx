export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-transparent border-t border-slate-200/10 dark:border-slate-800/50 py-16 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-linear-to-br from-[var(--primary)] to-[var(--secondary)] flex items-center justify-center text-white font-display font-black text-lg shadow-lg">TP</div>
            <div className="text-slate-500 dark:text-slate-400 text-sm font-medium">
              © {currentYear} <span className="text-slate-900 dark:text-white font-bold">Tilak Patel.</span> All rights reserved.
            </div>
          </div>
          <div className="flex space-x-8 text-xs font-mono font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">
            <a href="https://github.com/ptilak5210" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary)] transition-colors">GitHub</a>
            <a href="https://linkedin.com/in/tilak-patel" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary)] transition-colors">LinkedIn</a>
            <a href="mailto:ptilak5210@gmail.com" className="hover:text-[var(--primary)] transition-colors">Email</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
