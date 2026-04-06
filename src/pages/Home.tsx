import React, { lazy, Suspense } from 'react';
import { motion } from 'motion/react';
import { Hero } from '../sections/Hero';
import { StatsBar } from '../components/ui/StatsBar';

const About = lazy(() => import('../sections/About').then(module => ({ default: module.About })));
const Timeline = lazy(() => import('../sections/Timeline').then(module => ({ default: module.Timeline })));
const Skills = lazy(() => import('../sections/Skills').then(module => ({ default: module.Skills })));
const Proof = lazy(() => import('../sections/Proof').then(module => ({ default: module.Proof })));
const Projects = lazy(() => import('../sections/Projects').then(module => ({ default: module.Projects })));
const Resume = lazy(() => import('../sections/Resume').then(module => ({ default: module.Resume })));
const Contact = lazy(() => import('../sections/Contact').then(module => ({ default: module.Contact })));

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

const SectionLoader = () => (
  <div className="flex items-center justify-center py-20">
    <div className="w-8 h-8 border-4 border-[var(--primary)] border-t-transparent rounded-full animate-spin"></div>
  </div>
);

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <StatsBar />
      <Suspense fallback={<SectionLoader />}>
        <FadeIn><About /></FadeIn>
        <FadeIn><Timeline /></FadeIn>
        <FadeIn><Skills /></FadeIn>
        <FadeIn><Proof /></FadeIn>
        <FadeIn><Projects /></FadeIn>
        <FadeIn><Resume /></FadeIn>
        <FadeIn><Contact /></FadeIn>
      </Suspense>
    </main>
  );
}
