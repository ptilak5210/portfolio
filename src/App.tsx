import React from 'react';
import Home from './pages/Home';
import { Navbar } from './components/layout/Navbar';
import { ScrollProgressBar } from './components/ui/ScrollProgressBar';
import { Chatbot } from './components/ui/Chatbot';
import { CustomCursor } from './components/ui/CustomCursor';
import { GridBackground } from './components/ui/GridBackground';
import { ParticleBackground } from './components/ui/ParticleBackground';
import { useDarkMode } from './hooks/useDarkMode';

export default function App() {
  const { theme, toggleTheme } = useDarkMode();

  return (
    <div className="flex flex-col min-h-screen bg-[var(--bg)] transition-colors duration-300">
      <GridBackground />
      <ParticleBackground />
      <CustomCursor />
      <ScrollProgressBar />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Home />
      <Chatbot />
    </div>
  );
}
