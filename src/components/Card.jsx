// src/components/Card.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Card = ({ item, linkTo, onNavigate }) => {
  const { title, description, image, tags, date } = item;

  const handleNavigation = (e) => {
    e.preventDefault();
    onNavigate(linkTo);
  };

  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300 }}
      className="bg-light-secondary dark:bg-dark-secondary rounded-lg shadow-lg overflow-hidden flex flex-col h-full"
    >
      <a href={linkTo} onClick={handleNavigation} className="block">
        <img
          src={image || 'https://placehold.co/600x400/D97706/FFFFFF?text=aiNarabic'}
          alt={title}
          className="w-full h-48 object-cover"
        />
      </a>
      <div className="p-6 flex-grow flex flex-col">
        <div className="flex-grow">
          {tags && (
            <div className="flex flex-wrap gap-2 mb-2">
              {tags.map((tag) => (
                <span key={tag} className="text-xs font-semibold bg-light-accent/10 text-light-accent dark:bg-dark-accent/20 dark:text-dark-accent px-2 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          )}
          <h3 className="text-xl font-bold font-display mb-2">
            <a href={linkTo} onClick={handleNavigation} className="hover:text-light-accent dark:hover:text-dark-accent transition-colors">
              {title}
            </a>
          </h3>
          <p className="text-light-text-secondary dark:text-dark-text-secondary text-sm mb-4">
            {description}
          </p>
        </div>
        <div className="mt-auto flex justify-between items-center">
          <span className="text-xs text-light-text-secondary dark:text-dark-text-secondary">{date}</span>
          <a href={linkTo} onClick={handleNavigation} className="flex items-center text-sm font-semibold text-light-accent dark:text-dark-accent hover:underline">
            Read More <ArrowRight size={16} className="ml-1" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;