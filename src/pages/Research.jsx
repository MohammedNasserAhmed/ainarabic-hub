import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FileText, Download } from 'lucide-react';
import AnimatedPage from '../components/AnimatedPage';
import SectionHeader from '../components/SectionHeader';
import { mockData } from '../data/mockData';

const Research = () => {
  const [year, setYear] = useState('All');
  const [copiedId, setCopiedId] = useState(null);
  const years = useMemo(() => ['All', ...new Set(mockData.research.map(r => r.year).sort((a,b)=>b-a))], []);
  const filtered = year === 'All' ? mockData.research : mockData.research.filter(p => p.year === Number(year));

  const copyCitation = (paper) => {
    const citation = `${paper.authors} (${paper.year}). ${paper.title}. ${paper.journal}.`;
    navigator.clipboard.writeText(citation).then(() => {
      setCopiedId(paper.id);
      setTimeout(()=> setCopiedId(null), 2000);
    });
  };

  return (
    <AnimatedPage>
      <Helmet>
        <title>Research | aiNarabic</title>
        <meta name="description" content="Access our latest research papers, publications, and findings in the field of Artificial Intelligence." />
      </Helmet>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <SectionHeader title="Our Research" subtitle="Contributing to the advancement of AI through peer-reviewed publications." />
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap items-center gap-3 mb-8">
            {years.map(y => {
              const active = String(y) === String(year);
              return (
                <button
                  key={y}
                  onClick={() => setYear(y)}
                  className={`px-4 py-1.5 rounded-pill text-sm font-medium focus-ring transition ${active ? 'bg-light-accent text-white dark:bg-dark-accent' : 'bg-light-secondary dark:bg-dark-secondary hover:bg-gray-300 dark:hover:bg-gray-700'}`}
                  aria-pressed={active}
                >
                  {y}
                </button>
              );
            })}
          </div>
          <div className="space-y-6">
          {filtered.map((paper, index) => (
            <motion.div
              key={paper.id}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-light-secondary/70 dark:bg-dark-secondary/70 p-6 rounded-xl shadow-card hover:shadow-card-hover flex flex-col md:flex-row md:items-center justify-between gap-6 ring-1 ring-black/5 dark:ring-white/5 backdrop-blur-sm"
            >
              <div className="flex items-start md:items-center md:flex-1">
                <FileText className="h-10 w-10 text-light-accent dark:text-dark-accent mr-4 flex-shrink-0 mt-1" />
                <div className="space-y-1">
                  <h3 className="font-bold text-lg leading-snug">{paper.title}</h3>
                  <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">{paper.authors} · <span className="italic">{paper.journal}</span> · {paper.year}</p>
                </div>
              </div>
              <div className="flex flex-col gap-3 md:items-end">
                <div className="flex gap-2">
                  <a
                    href={paper.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 rounded-md text-sm font-medium text-white bg-light-accent hover:bg-light-accent-hover dark:bg-dark-accent dark:hover:bg-dark-accent-hover transition-colors"
                  >
                    <Download size={16} className="mr-2" /> PDF
                  </a>
                  <button
                    onClick={() => copyCitation(paper)}
                    className="inline-flex items-center px-4 py-2 rounded-md text-sm font-medium bg-light-secondary dark:bg-dark-secondary hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors focus-ring"
                  >
                    {copiedId === paper.id ? 'Copied!' : 'Copy Citation'}
                  </button>
                </div>
                <div className="text-[11px] uppercase tracking-wide font-semibold text-light-text-secondary dark:text-dark-text-secondary opacity-70">ID: {paper.id}</div>
              </div>
            </motion.div>
          ))}
          {filtered.length === 0 && (
            <div className="py-12 text-center text-light-text-secondary dark:text-dark-text-secondary">No publications for the selected year.</div>
          )}
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Research;
