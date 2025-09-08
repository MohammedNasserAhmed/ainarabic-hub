// src/components/Card.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Card = ({ item, linkTo, onNavigate, variant = 'default' }) => {
  const { title, description, image, tags, date } = item;

  const baseClasses = 'group rounded-xl bg-light-secondary/70 dark:bg-dark-secondary/70 backdrop-blur-sm shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col h-full ring-1 ring-black/5 dark:ring-white/5 focus-within:shadow-card-hover';
  const variantClasses = {
    blog: '',
    portfolio: '',
    project: '',
    default: ''
  }[variant];

  const handleNavigation = (e) => {
    e.preventDefault();
    onNavigate(linkTo);
  };

  return (
    <motion.article
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 280, damping: 22 }}
      className={`${baseClasses} ${variantClasses}`}
    >
      <a href={linkTo} onClick={handleNavigation} className="block overflow-hidden rounded-t-xl focus-ring">
        <img
          src={image || 'https://placehold.co/600x400/D97706/FFFFFF?text=aiNarabic'}
          alt={title + ' cover image'}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          loading="lazy"
          decoding="async"
        />
      </a>
      <div className="p-5 flex-grow flex flex-col">
        <div className="flex-grow">
          {tags && (
            <div className="flex flex-wrap gap-2 mb-3">
              {tags.map((tag) => (
                <span key={tag} className="text-[10px] uppercase tracking-wide font-semibold bg-light-accent/10 text-light-accent dark:bg-dark-accent/15 dark:text-dark-accent px-2 py-0.5 rounded-pill">
                  {tag}
                </span>
              ))}
            </div>
          )}
          <h3 className="text-lg font-bold font-display mb-2 leading-snug">
            <a href={linkTo} onClick={handleNavigation} className="hover:text-light-accent dark:hover:text-dark-accent transition-colors focus-ring">
              {title}
            </a>
          </h3>
          {description && (
            <p className="text-light-text-secondary dark:text-dark-text-secondary text-sm line-clamp-3 mb-4">
              {description}
            </p>
          )}
        </div>
        <div className="mt-auto flex justify-between items-center pt-2 text-xs text-light-text-secondary dark:text-dark-text-secondary">
          {date && <time>{date}</time>}
          <a href={linkTo} onClick={handleNavigation} className="flex items-center text-light-accent dark:text-dark-accent font-semibold hover:underline text-xs">
            Read <ArrowRight size={14} className="ml-1" />
          </a>
        </div>
      </div>
    </motion.article>
  );
};

export default Card;