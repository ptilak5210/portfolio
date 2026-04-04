import React from 'react';
import { motion } from 'motion/react';
import { Hero } from '../sections/Hero';
import { StatsBar } from '../components/ui/StatsBar';
import { About } from '../sections/About';
import { Timeline } from '../sections/Timeline';
import { Skills } from '../sections/Skills';
import { Proof } from '../sections/Proof';
import { Projects } from '../sections/Projects';
import { Resume } from '../sections/Resume';
import { Contact } from '../sections/Contact';

const FadeIn = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <StatsBar />
      <FadeIn><About /></FadeIn>
      <FadeIn><Timeline /></FadeIn>
      <FadeIn><Skills /></FadeIn>
      <FadeIn><Proof /></FadeIn>
      <FadeIn><Projects /></FadeIn>
      <FadeIn><Resume /></FadeIn>
      <FadeIn><Contact /></FadeIn>
    </main>
  );
}
