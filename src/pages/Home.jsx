// src/pages/Home.jsx
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Cpu, FlaskConical, BookOpen, ArrowRight } from 'lucide-react';
import { mockData } from '../data/mockData';
import AnimatedPage from '../components/AnimatedPage';
import SectionHeader from '../components/SectionHeader';
import Card from '../components/Card';
// Video asset
import heroVideo from '../../assets/home-intro.mp4';
import heroPoster from '/website-screenshot.png';

const Home = ({ onNavigate }) => {
  const featured = [
    { icon: <Cpu size={40} className="text-light-accent dark:text-dark-accent" />, title: 'AI Projects', description: 'Explore our innovative AI solutions and case studies.', link: '/projects' },
    { icon: <FlaskConical size={40} className="text-light-accent dark:text-dark-accent" />, title: 'Cutting-Edge Research', description: 'Read our latest publications and research findings.', link: '/research' },
    { icon: <BookOpen size={40} className="text-light-accent dark:text-dark-accent" />, title: 'AI Books & Cookbooks', description: 'Browse our curated list of essential AI literature.', link: '/books' },
  ];

  const handleNavigation = (e, path) => {
      e.preventDefault();
      onNavigate(path);
  };

  const [allowVideo, setAllowVideo] = useState(true);
  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (media.matches) setAllowVideo(false);
    const handler = () => setAllowVideo(!media.matches);
    media.addEventListener ? media.addEventListener('change', handler) : media.addListener(handler);
    return () => {
      media.removeEventListener ? media.removeEventListener('change', handler) : media.removeListener(handler);
    };
  }, []);

  return (
    <AnimatedPage>
      <Helmet>
        <title>aiNarabic | Home - AI Innovation and Solutions</title>
        <meta name="description" content="Welcome to aiNarabic. We specialize in AI projects, cutting-edge research, and provide a curated library of AI books and resources." />
      </Helmet>
      
      <section className="relative h-[520px] md:h-[620px] flex items-stretch overflow-hidden">
        {/* Background video */}
        {allowVideo ? (
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src={heroVideo}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={heroPoster}
            aria-label="Introductory AI showcase video"
          />
        ) : (
          <img src={heroPoster} alt="AI thematic hero" className="absolute inset-0 w-full h-full object-cover" />
        )}
        {/* Overlays for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-dark-primary/80 via-dark-primary/50 to-dark-primary/10 dark:from-black/75 dark:via-black/50 dark:to-black/20 pointer-events-none" />
        <div className="absolute inset-0 backdrop-blur-[2px] md:backdrop-blur-sm" />

        {/* Content container aligned with global layout */}
        <div className="relative z-10 w-full">
          <div className="container mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center">
            <div className="max-w-2xl bg-light-primary/60 dark:bg-dark-primary/40 backdrop-blur-md rounded-xl p-6 sm:p-8 shadow-xl ring-1 ring-black/10 dark:ring-white/10">
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-4xl md:text-6xl font-extrabold font-display text-light-text-primary dark:text-dark-text-primary mb-6 leading-tight drop-shadow-[0_3px_6px_rgba(0,0,0,0.5)]"
              >
                Pioneering the Future of AI
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="text-lg md:text-xl text-light-text-secondary dark:text-dark-text-secondary mb-8 drop-shadow-[0_2px_4px_rgba(0,0,0,0.45)]"
              >
                At aiNarabic, we build intelligent systems that solve complex problems and drive innovation across industries.
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }} className="flex flex-wrap gap-4">
                <a href="/about" onClick={(e) => handleNavigation(e, '/about')} className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold rounded-md text-white bg-light-accent hover:bg-light-accent-hover dark:bg-dark-accent dark:hover:bg-dark-accent-hover transition-colors shadow-lg shadow-black/30 focus-ring">
                  Learn More <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
                </a>
                <a href="/projects" onClick={(e) => handleNavigation(e, '/projects')} className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold rounded-md bg-light-secondary/70 dark:bg-dark-secondary/70 text-light-text-primary dark:text-dark-text-primary hover:bg-light-secondary dark:hover:bg-dark-secondary transition-colors shadow-lg shadow-black/20 focus-ring ring-1 ring-black/5 dark:ring-white/10">
                  View Projects
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featured.map((item, index) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5, delay: index * 0.1 }} className="text-center p-8 bg-light-secondary dark:bg-dark-secondary rounded-lg shadow-md">
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-2xl font-bold font-display mb-2">{item.title}</h3>
                <p className="text-light-text-secondary dark:text-dark-text-secondary mb-4">{item.description}</p>
                <a href={item.link} onClick={(e) => handleNavigation(e, item.link)} className="font-semibold text-light-accent dark:text-dark-accent hover:underline">Explore <ArrowRight size={16} className="inline" /></a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-light-secondary dark:bg-dark-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="From Our Blog" subtitle="Insights, news, and updates from the world of AI." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockData.blog.slice(0, 3).map((post, index) => (
              <motion.div key={post.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5, delay: index * 0.1 }}>
                <Card item={post} linkTo={`/blog/${post.slug}`} onNavigate={onNavigate} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </AnimatedPage>
  );
};

export default Home;