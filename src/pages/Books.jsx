import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link as LinkIcon } from 'lucide-react';
import AnimatedPage from '../components/AnimatedPage';
import SectionHeader from '../components/SectionHeader';
import { mockData } from '../data/mockData';

const Books = () => {
  return (
    <AnimatedPage>
      <Helmet>
        <title>AI Books & Cookbooks | aiNarabic</title>
        <meta name="description" content="A curated collection of essential books, cookbooks, and resources for AI practitioners and enthusiasts." />
      </Helmet>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <SectionHeader title="AI Books & Cookbooks" subtitle="A curated library of essential resources for learning and building with AI." />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockData.books.map((book, index) => (
            <motion.div
              key={book.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-light-secondary dark:bg-dark-secondary rounded-lg shadow-lg overflow-hidden flex flex-col"
            >
              <img src={book.image} alt={book.title} className="w-full h-64 object-cover" />
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold font-display mb-2 flex-grow">{book.title}</h3>
                <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary mb-4">by {book.author}</p>
                <a 
                  href={book.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-light-accent hover:bg-light-accent-hover dark:bg-dark-accent dark:hover:bg-dark-accent-hover transition-colors"
                >
                  <LinkIcon size={16} className="mr-2" />
                  Get Book
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Books;
