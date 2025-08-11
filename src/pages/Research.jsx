import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FileText, Download } from 'lucide-react';
import AnimatedPage from '../components/AnimatedPage';
import SectionHeader from '../components/SectionHeader';
import { mockData } from '../data/mockData';

const Research = () => {
  return (
    <AnimatedPage>
      <Helmet>
        <title>Research | aiNarabic</title>
        <meta name="description" content="Access our latest research papers, publications, and findings in the field of Artificial Intelligence." />
      </Helmet>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <SectionHeader title="Our Research" subtitle="Contributing to the advancement of AI through peer-reviewed publications." />
        <div className="max-w-4xl mx-auto space-y-6">
          {mockData.research.map((paper, index) => (
            <motion.div
              key={paper.id}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-light-secondary dark:bg-dark-secondary p-6 rounded-lg shadow-md flex flex-col sm:flex-row items-start sm:items-center justify-between"
            >
              <div className="flex items-start mb-4 sm:mb-0">
                <FileText className="h-10 w-10 text-light-accent dark:text-dark-accent mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg">{paper.title}</h3>
                  <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary mt-1">{paper.authors} - <span className="italic">{paper.journal}, {paper.year}</span></p>
                </div>
              </div>
              <a 
                href={paper.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-light-accent hover:bg-light-accent-hover dark:bg-dark-accent dark:hover:bg-dark-accent-hover transition-colors flex-shrink-0"
              >
                <Download size={16} className="mr-2" />
                Download PDF
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Research;
