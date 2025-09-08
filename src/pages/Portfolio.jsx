import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedPage from '../components/AnimatedPage';
import EmptyState from '../components/EmptyState';
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
  const [activeId, setActiveId] = useState(null);
  const dialogRef = useRef(null);

  const activeItem = activeId ? items.find(i => i.id === activeId) : null;

  const closeModal = useCallback(() => setActiveId(null), []);
  // ESC to close
  useEffect(() => {
    if (!activeId) return;
    const onKey = (e) => { if (e.key === 'Escape') { e.stopPropagation(); closeModal(); } };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [activeId, closeModal]);
  // Focus trap basics
  useEffect(() => {
    if (activeId && dialogRef.current) {
      const focusable = dialogRef.current.querySelectorAll('a,button,input,textarea,select,[tabindex]:not([tabindex="-1"])');
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      first && first.focus();
      const handler = (e) => {
        if (e.key === 'Tab') {
          if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
          else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
        }
      };
      dialogRef.current.addEventListener('keydown', handler);
      return () => dialogRef.current && dialogRef.current.removeEventListener('keydown', handler);
    }
  }, [activeId]);

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
              <motion.div key="empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="col-span-full">
                <EmptyState
                  title="No matching items"
                  message="Try changing or clearing your selected filter criteria to see more portfolio work."
                  action={<button onClick={() => setFilter('All')} className="px-5 py-2 text-sm font-semibold rounded-pill bg-light-accent text-white dark:bg-dark-accent hover:bg-light-accent-hover dark:hover:bg-dark-accent-hover focus-ring">Reset Filters</button>}
                />
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
        className="group bg-light-secondary/70 dark:bg-dark-secondary/70 rounded-xl shadow-card hover:shadow-card-hover overflow-hidden backdrop-blur-sm ring-1 ring-black/5 dark:ring-white/5 cursor-pointer"
        onClick={() => setActiveId(item.id)}
        onKeyDown={(e) => { if (e.key === 'Enter') setActiveId(item.id); }}
        role="button"
        tabIndex={0}
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
        <AnimatePresence>
          {activeItem && (
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
              aria-modal="true"
              role="dialog"
              aria-labelledby="portfolio-dialog-title"
            >
              <motion.div
                ref={dialogRef}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 210, damping: 22 }}
                className="relative w-full max-w-2xl bg-light-primary dark:bg-dark-primary rounded-2xl shadow-2xl ring-1 ring-black/10 dark:ring-white/10 overflow-hidden focus:outline-none"
              >
                <button onClick={closeModal} className="absolute top-3 right-3 px-3 py-1.5 text-xs font-medium rounded-md bg-light-secondary/80 dark:bg-dark-secondary/80 hover:bg-light-secondary dark:hover:bg-dark-secondary focus-ring">Close</button>
                <div className="h-60 overflow-hidden">
                  <img src={activeItem.image} alt={activeItem.title + ' full preview'} className="w-full h-full object-cover" />
                </div>
                <div className="p-6 space-y-4">
                  <h2 id="portfolio-dialog-title" className="text-2xl font-display font-bold leading-snug">{activeItem.title}</h2>
                  <p className="text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">{activeItem.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {activeItem.tags.map(t => (
                      <span key={t} className="text-[11px] uppercase tracking-wide font-semibold bg-light-accent/10 text-light-accent dark:bg-dark-accent/15 dark:text-dark-accent px-2 py-0.5 rounded-pill">{t}</span>
                    ))}
                  </div>
                  <div className="pt-2">
                    <button onClick={closeModal} className="px-5 py-2 rounded-md bg-light-accent text-white dark:bg-dark-accent hover:bg-light-accent-hover dark:hover:bg-dark-accent-hover font-semibold text-sm focus-ring">Return to list</button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </AnimatedPage>
  );
};

export default Portfolio;
