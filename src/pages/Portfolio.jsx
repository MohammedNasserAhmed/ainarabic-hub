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
  const filteredItems = filter === 'All' ? items : items.filter(item => item.tags.includes(filter));

  return (
    <AnimatedPage>
      <Helmet>
        <title>Portfolio | aiNarabic</title>
        <meta name="description" content="Explore our portfolio of successful AI projects, case studies, and client work." />
      </Helmet>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <SectionHeader title="Our Portfolio" subtitle="A showcase of our capabilities and successful projects." />
        
        <div className="flex justify-center flex-wrap gap-2 mb-12">
          {tags.map(tag => (
            <button
              key={tag}
              onClick={() => setFilter(tag)}
              className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors duration-300 ${
                filter === tag 
                ? 'bg-light-accent text-white dark:bg-dark-accent' 
                : 'bg-light-secondary text-light-text-primary dark:bg-dark-secondary dark:text-dark-text-primary hover:bg-gray-300 dark:hover:bg-gray-700'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="bg-light-secondary dark:bg-dark-secondary rounded-lg shadow-lg overflow-hidden"
              >
                <img src={item.image} alt={item.title} className="w-full h-56 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold font-display mb-2">{item.title}</h3>
                  <p className="text-light-text-secondary dark:text-dark-text-secondary text-sm mb-4">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map(tag => (
                      <span key={tag} className="text-xs font-semibold bg-light-accent/10 text-light-accent dark:bg-dark-accent/20 dark:text-dark-accent px-2 py-1 rounded-full">{tag}</span>
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
