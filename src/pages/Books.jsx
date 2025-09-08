import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link as LinkIcon } from 'lucide-react';
import AnimatedPage from '../components/AnimatedPage';
import SectionHeader from '../components/SectionHeader';
import { mockData } from '../data/mockData';

const Books = () => {
  const [category, setCategory] = useState('All');
  // Placeholder categories derived from titles (demo) - can be replaced when real data has categories
  const categories = useMemo(() => ['All', ...new Set(mockData.books.map(b => b.author.split(' ')[0]))], []);
  const filtered = category === 'All' ? mockData.books : mockData.books.filter(b => b.author.startsWith(category));
  return (
    <AnimatedPage>
      <Helmet>
        <title>AI Books & Cookbooks | aiNarabic</title>
        <meta name="description" content="A curated collection of essential books, cookbooks, and resources for AI practitioners and enthusiasts." />
      </Helmet>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <SectionHeader title="AI Books & Cookbooks" subtitle="A curated library of essential resources for learning and building with AI." />
        <div className="flex flex-wrap gap-3 mb-10">
          {categories.map(c => {
            const active = c === category;
            return (
              <button key={c} onClick={() => setCategory(c)} aria-pressed={active} className={`px-4 py-1.5 rounded-pill text-sm font-medium focus-ring transition ${active ? 'bg-light-accent text-white dark:bg-dark-accent' : 'bg-light-secondary dark:bg-dark-secondary hover:bg-gray-300 dark:hover:bg-gray-700'}`}>{c}</button>
            );
          })}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((book, index) => (
            <motion.div
              key={book.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-light-secondary/70 dark:bg-dark-secondary/70 rounded-xl shadow-card hover:shadow-card-hover overflow-hidden flex flex-col ring-1 ring-black/5 dark:ring-white/5 backdrop-blur-sm"
            >
              <div className="relative h-64 overflow-hidden">
                <img src={book.image} alt={book.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-5">
                  <h3 className="text-lg font-bold font-display text-white leading-tight mb-2 line-clamp-2">{book.title}</h3>
                  <p className="text-xs text-white/70 mb-4">by {book.author}</p>
                  <a
                    href={book.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-max items-center px-4 py-2 rounded-md text-xs font-medium text-white bg-light-accent hover:bg-light-accent-hover dark:bg-dark-accent dark:hover:bg-dark-accent-hover transition-colors"
                  >
                    <LinkIcon size={14} className="mr-2" /> Get Book
                  </a>
                </div>
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <h3 className="text-base font-bold font-display mb-1 line-clamp-2">{book.title}</h3>
                <p className="text-xs text-light-text-secondary dark:text-dark-text-secondary mb-3">{book.author}</p>
                <a
                  href={book.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center justify-center px-4 py-2 text-xs font-medium rounded-md text-white bg-light-accent hover:bg-light-accent-hover dark:bg-dark-accent dark:hover:bg-dark-accent-hover transition-colors"
                >
                  <LinkIcon size={14} className="mr-2" /> Get Book
                </a>
              </div>
            </motion.div>
          ))}
          {filtered.length === 0 && (
            <div className="col-span-full text-center py-16 text-light-text-secondary dark:text-dark-text-secondary">No books found for that category.</div>
          )}
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Books;
