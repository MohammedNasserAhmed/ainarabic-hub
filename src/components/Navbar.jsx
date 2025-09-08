// src/components/Navbar.jsx
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useScrollDirection } from '../hooks/useScrollDirection';
import logo from '../../assets/website_logo.png';
import { useTheme } from '../hooks/useTheme';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme } = useTheme();
  const menuRef = useRef(null);
  const openButtonRef = useRef(null);
  // Scroll direction for hide-on-scroll behavior
  const scrollDir = useScrollDirection();
  const location = useLocation();

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

  const activeLinkStyle = { color: theme === 'dark' ? '#F59E0B' : '#D97706' };

  const closeMenu = useCallback(() => setIsOpen(false), []);
  // Close on route change
  useEffect(() => { closeMenu(); }, [location.pathname, closeMenu]);
  // ESC key
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e) => { if (e.key === 'Escape') { e.preventDefault(); closeMenu(); openButtonRef.current?.focus(); } };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [isOpen, closeMenu]);
  // Focus trap
  useEffect(() => {
    if (!isOpen) return;
    const node = menuRef.current;
    if (!node) return;
    const focusable = node.querySelectorAll('a,button');
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    first && first.focus();
    const trap = (e) => {
      if (e.key === 'Tab') {
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    node.addEventListener('keydown', trap);
    return () => node.removeEventListener('keydown', trap);
  }, [isOpen]);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-light-primary/70 dark:bg-dark-primary/70 backdrop-blur-xl shadow-md ring-1 ring-black/5 dark:ring-white/10' : 'bg-transparent'} ${scrollDir === 'down' && isScrolled ? '-translate-y-[72px]' : 'translate-y-0'}`}
      style={{ willChange: 'transform, backdrop-filter' }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2 group" aria-label="aiNarabic home">
            <img
              src={logo}
              alt="aiNarabic logo"
              className="h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              loading="eager"
              decoding="async"
            />
            <span className="font-display text-2xl font-bold text-light-text-primary dark:text-dark-text-primary">
              aiNarabic
            </span>
          </Link>
          <div className="hidden md:flex items-center space-x-8 relative">
            {navLinks.map((link) => {
              const active = location.pathname === link.path;
              return (
                <div key={link.path} className="relative">
                  <Link
                    to={link.path}
                    className={`font-medium px-1 pb-1 focus-ring transition-colors ${active ? 'text-light-accent dark:text-dark-accent' : 'text-light-text-secondary dark:text-dark-text-secondary hover:text-light-accent dark:hover:text-dark-accent'}`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                  {active && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute left-0 -bottom-0.5 h-0.5 w-full rounded-full bg-light-accent dark:bg-dark-accent origin-left"
                      transition={{ type: 'spring', stiffness: 500, damping: 32, mass: 0.4 }}
                    />
                  )}
                </div>
              );
            })}
            <ThemeToggle />
          </div>
          <div className="md:hidden flex items-center">
            <ThemeToggle />
            <button ref={openButtonRef} aria-expanded={isOpen} aria-controls="mobile-menu" aria-label="Toggle navigation" onClick={() => setIsOpen(!isOpen)} className="ml-4 text-light-text-primary dark:text-dark-text-primary focus-ring">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            id="mobile-menu"
            ref={menuRef}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="md:hidden bg-light-secondary dark:bg-dark-secondary pb-4 overflow-hidden border-t border-black/5 dark:border-white/10"
            role="dialog"
            aria-label="Mobile navigation"
          >
            <motion.div
              initial="hidden"
              animate="show"
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.05 } } }}
              className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col space-y-3 pt-4"
            >
              {navLinks.map((link) => {
                const active = location.pathname === link.path;
                return (
                  <motion.div key={link.path} variants={{ hidden: { y: 10, opacity: 0 }, show: { y: 0, opacity: 1 } }}>
                    <Link
                      to={link.path}
                      className={`block font-medium px-2 py-2 rounded-md focus-ring transition-colors ${active ? 'bg-light-primary/60 dark:bg-dark-primary/60 text-light-accent dark:text-dark-accent' : 'text-light-text-secondary dark:text-dark-text-secondary hover:text-light-accent dark:hover:text-dark-accent'}`}
                      style={active ? activeLinkStyle : {}}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;