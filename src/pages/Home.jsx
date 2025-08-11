// src/pages/Home.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Cpu, FlaskConical, BookOpen, ArrowRight } from 'lucide-react';
import { mockData } from '../data/mockData';
import AnimatedPage from '../components/AnimatedPage';
import SectionHeader from '../components/SectionHeader';
import Card from '../components/Card';

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

  return (
    <AnimatedPage>
      <Helmet>
        <title>aiNarabic | Home - AI Innovation and Solutions</title>
        <meta name="description" content="Welcome to aiNarabic. We specialize in AI projects, cutting-edge research, and provide a curated library of AI books and resources." />
      </Helmet>
      
      <section className="relative py-20 md:py-32 bg-light-secondary dark:bg-dark-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-4xl md:text-6xl font-extrabold font-display text-light-text-primary dark:text-dark-text-primary mb-4">Pioneering the Future of AI</motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="max-w-2xl mx-auto text-lg md:text-xl text-light-text-secondary dark:text-dark-text-secondary mb-8">At aiNarabic, we build intelligent systems that solve complex problems and drive innovation across industries.</motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }}>
            <a href="/about" onClick={(e) => handleNavigation(e, '/about')} className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-light-accent hover:bg-light-accent-hover dark:bg-dark-accent dark:hover:bg-dark-accent-hover transition-colors">Learn More <ArrowRight className="ml-2 -mr-1 h-5 w-5" /></a>
          </motion.div>
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