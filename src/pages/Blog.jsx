import React, { useState, useEffect, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import AnimatedPage from '../components/AnimatedPage';
import SectionHeader from '../components/SectionHeader';
import { mockData } from '../data/mockData';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const cardVariants = {
  hidden: { y: 24, opacity: 0 },
  show: { y: 0, opacity: 1 }
};

const estimateReadingTime = (html) => {
  const text = html.replace(/<[^>]+>/g, ' ');
  const words = text.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
};

const Blog = () => {
  const [posts] = useState(mockData.blog);
  const enriched = useMemo(() => posts.map(p => ({ ...p, readingTime: estimateReadingTime(p.content) })), [posts]);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatedPage>
      <Helmet>
        <title>Blog | aiNarabic</title>
        <meta name="description" content="Read the latest articles, insights, and news from the aiNarabic team on AI, machine learning, and technology." />
      </Helmet>
      <div className="fixed top-0 left-0 right-0 h-1 z-40 bg-transparent" aria-hidden>
        <div className="h-full bg-light-accent dark:bg-dark-accent origin-left transition-transform" style={{ transform: `scaleX(${progress/100})` }} />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
        <SectionHeader title="Our Blog" subtitle="Insights, tutorials, and news from the forefront of AI." />

        {enriched.length > 0 && (
          <div className="mb-16">
            <div className="grid gap-10 md:grid-cols-2 items-stretch">
              <Link to={`/blog/${enriched[0].slug}`} className="group relative rounded-2xl overflow-hidden bg-light-secondary/70 dark:bg-dark-secondary/70 shadow-card hover:shadow-card-hover ring-1 ring-black/5 dark:ring-white/5 backdrop-blur-sm transition-all focus-ring">
                <div className="absolute inset-0">
                  <img src={enriched[0].image} alt={enriched[0].title} className="w-full h-full object-cover opacity-80 group-hover:opacity-90 transition-opacity" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/70 via-black/30 to-transparent" />
                </div>
                <div className="relative p-8 md:p-10 flex flex-col justify-end h-full">
                  <div className="mb-4 inline-flex items-center gap-2 text-[11px] uppercase tracking-wide font-semibold text-light-accent/90 dark:text-dark-accent/90">
                    Featured
                    <span className="w-1.5 h-1.5 rounded-full bg-light-accent dark:bg-dark-accent animate-pulse" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-4 leading-tight drop-shadow-md">{enriched[0].title}</h2>
                  <p className="text-sm md:text-base text-white/80 line-clamp-3 mb-6 max-w-2xl">{enriched[0].description}</p>
                  <div className="flex flex-wrap items-center gap-4 text-xs text-white/70">
                    <span>{enriched[0].date}</span>
                    <span>{enriched[0].readingTime} min read</span>
                    <span className="inline-flex items-center gap-1 font-medium text-white group-hover:text-light-accent transition-colors">
                      Read Article <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </Link>
              <div className="grid sm:grid-cols-2 gap-6">
                {enriched.slice(1,5).map(post => (
                  <Link key={post.id} to={`/blog/${post.slug}`} className="group rounded-xl overflow-hidden bg-light-secondary/70 dark:bg-dark-secondary/70 shadow-card hover:shadow-card-hover ring-1 ring-black/5 dark:ring-white/5 backdrop-blur-sm flex flex-col transition focus-ring">
                    <div className="overflow-hidden h-32">
                      <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                    </div>
                    <div className="p-4 flex flex-col flex-1">
                      <h3 className="text-sm font-bold font-display mb-2 line-clamp-2 group-hover:text-light-accent dark:group-hover:text-dark-accent transition-colors">{post.title}</h3>
                      <p className="text-xs text-light-text-secondary dark:text-dark-text-secondary line-clamp-3 mb-3 flex-1">{post.description}</p>
                      <div className="flex items-center justify-between text-[10px] text-light-text-secondary dark:text-dark-text-secondary mt-auto">
                        <span>{post.readingTime} min read</span>
                        <span className="inline-flex items-center gap-1 font-medium">Read <ArrowRight className="w-3 h-3" /></span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.08 } } }}
          initial="hidden"
            animate="show"
        >
          {enriched.slice(5).map(post => (
            <motion.div key={post.id} variants={cardVariants}>
              <Link to={`/blog/${post.slug}`} className="group block bg-light-secondary/70 dark:bg-dark-secondary/70 rounded-xl shadow-card hover:shadow-card-hover overflow-hidden transition ring-1 ring-black/5 dark:ring-white/5 backdrop-blur-sm focus-ring">
                <div className="overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold font-display mb-2 leading-tight group-hover:text-light-accent dark:group-hover:text-dark-accent transition-colors">{post.title}</h3>
                  <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary mb-4 line-clamp-3">{post.description}</p>
                  <div className="flex items-center justify-between text-xs text-light-text-secondary dark:text-dark-text-secondary">
                    <span>{post.readingTime} min</span>
                    <span className="inline-flex items-center gap-1 font-medium">Read More <ArrowRight className="w-3 h-3" /></span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedPage>
  );
};

export default Blog;
