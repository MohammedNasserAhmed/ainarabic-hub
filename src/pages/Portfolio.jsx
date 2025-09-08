import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedPage from '../components/AnimatedPage';
import SectionHeader from '../components/SectionHeader';
import { mockData } from '../data/mockData';

const Portfolio = () => {
  const [items] = useState(mockData.portfolio);
  const [filter, setFilter] = useState('All');
  const tags = ['All', ...new Set(items.flatMap(p => p.tags))];
  const counts = tags.reduce((acc, t) => {
    acc[t] = t === 'All' ? items.length : items.filter(i => i.tags.includes(t)).length;
    return acc;
  }, {});
  const filteredItems = filter === 'All' ? items : items.filter(item => item.tags.includes(filter));

  return (
    <AnimatedPage>
      <Helmet>
        <title>Portfolio | aiNarabic</title>
        <meta name="description" content="Explore our portfolio of successful AI projects, case studies, and client work." />
      </Helmet>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <SectionHeader title="Our Portfolio" subtitle="A showcase of our capabilities and successful projects." />
        
        <div className="relative mb-10">
          <div className="flex gap-2 overflow-x-auto pb-2 snap-x no-scrollbar" aria-label="Portfolio filters">
            {tags.map(tag => {
              const active = filter === tag;
              return (
                <button
                  key={tag}
                  onClick={() => setFilter(tag)}
                  className={`snap-start whitespace-nowrap px-4 py-2 text-sm font-semibold rounded-pill transition-colors duration-300 focus-ring flex items-center gap-2 ${active ? 'bg-light-accent text-white dark:bg-dark-accent' : 'bg-light-secondary text-light-text-primary dark:bg-dark-secondary dark:text-dark-text-primary hover:bg-gray-300 dark:hover:bg-gray-700'}`}
                  aria-pressed={active}
                >
                  {tag} <span className={`text-xs font-medium ${active ? 'text-white/90' : 'text-light-text-secondary dark:text-dark-text-secondary'}`}>{counts[tag]}</span>
                </button>
              );
            })}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[120px]">
          <AnimatePresence mode="popLayout">
            {filteredItems.length === 0 && (
              <motion.div key="empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="col-span-full text-center py-16 rounded-xl bg-light-secondary/60 dark:bg-dark-secondary/60 backdrop-blur-sm">
                <p className="text-light-text-secondary dark:text-dark-text-secondary mb-4">No portfolio items match the selected filter.</p>
                <button onClick={() => setFilter('All')} className="px-5 py-2 text-sm font-semibold rounded-pill bg-light-accent text-white dark:bg-dark-accent hover:bg-light-accent-hover dark:hover:bg-dark-accent-hover focus-ring">Reset Filters</button>
              </motion.div>
            )}
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35 }}
                className="group bg-light-secondary/70 dark:bg-dark-secondary/70 rounded-xl shadow-card hover:shadow-card-hover overflow-hidden backdrop-blur-sm ring-1 ring-black/5 dark:ring-white/5"
              >
                <div className="overflow-hidden">
                  <img src={item.image} alt={item.title + ' showcase'} className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-[1.05]" loading="lazy" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold font-display mb-2 leading-snug">{item.title}</h3>
                  <p className="text-light-text-secondary dark:text-dark-text-secondary text-sm mb-4 line-clamp-3">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map(tag => (
                      <span key={tag} className="text-[10px] uppercase tracking-wide font-semibold bg-light-accent/10 text-light-accent dark:bg-dark-accent/15 dark:text-dark-accent px-2 py-0.5 rounded-pill">{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </AnimatedPage>
  );
};

export default Portfolio;
