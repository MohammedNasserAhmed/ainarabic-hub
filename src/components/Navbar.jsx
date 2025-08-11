// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Bot } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import ThemeToggle from './ThemeToggle';

const Navbar = ({ onNavigate, currentPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' }, { name: 'About', path: '/about' }, { name: 'Portfolio', path: '/portfolio' },
    { name: 'Blog', path: '/blog' }, { name: 'Projects', path: '/projects' }, { name: 'Research', path: '/research' },
    { name: 'Books', path: '/books' }, { name: 'Contact', path: '/contact' },
  ];

  const handleNavigation = (e, path) => {
    e.preventDefault();
    onNavigate(path);
    setIsOpen(false);
  };
  
  const activeLinkStyle = { color: theme === 'dark' ? '#F59E0B' : '#D97706' };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-light-primary/80 dark:bg-dark-primary/80 backdrop-blur-lg shadow-md' : 'bg-transparent'}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="/" onClick={(e) => handleNavigation(e, '/')} className="flex items-center space-x-2">
            <Bot className="h-8 w-8 text-light-accent dark:text-dark-accent" />
            <span className="font-display text-2xl font-bold text-light-text-primary dark:text-dark-text-primary">aiNarabic</span>
          </a>
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.path} href={link.path} onClick={(e) => handleNavigation(e, link.path)}
                className="font-medium text-light-text-secondary dark:text-dark-text-secondary hover:text-light-accent dark:hover:text-dark-accent transition-colors"
                style={currentPage === link.path ? activeLinkStyle : {}}
              >
                {link.name}
              </a>
            ))}
            <ThemeToggle />
          </div>
          <div className="md:hidden flex items-center">
            <ThemeToggle />
            <button onClick={() => setIsOpen(!isOpen)} className="ml-4 text-light-text-primary dark:text-dark-text-primary">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="md:hidden bg-light-secondary dark:bg-dark-secondary pb-4">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a key={link.path} href={link.path} onClick={(e) => handleNavigation(e, link.path)}
                className="font-medium text-light-text-secondary dark:text-dark-text-secondary hover:text-light-accent dark:hover:text-dark-accent transition-colors"
                style={currentPage === link.path ? activeLinkStyle : {}}
              >
                {link.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;