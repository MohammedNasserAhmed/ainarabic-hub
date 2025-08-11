// src/components/Footer.jsx
import React from 'react';
import { Bot, Twitter, Github, Linkedin } from 'lucide-react';

const Footer = ({ onNavigate }) => {
  const socialLinks = [
    { icon: <Twitter size={20} />, href: '#' },
    { icon: <Github size={20} />, href: '#' },
    { icon: <Linkedin size={20} />, href: '#' }
  ];
  const footerLinks = [
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
    { name: 'Privacy Policy', path: '#' }
  ];

  const handleNavigation = (e, path) => {
    e.preventDefault();
    if (path !== '#') {
      onNavigate(path);
    }
  };

  return (
    <footer className="bg-light-secondary dark:bg-dark-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center md:items-start">
            <a href="/" onClick={(e) => handleNavigation(e, '/')} className="flex items-center space-x-2 mb-4">
              <Bot className="h-8 w-8 text-light-accent dark:text-dark-accent" />
              <span className="font-display text-2xl font-bold text-light-text-primary dark:text-dark-text-primary">aiNarabic</span>
            </a>
            <p className="text-center md:text-left text-light-text-secondary dark:text-dark-text-secondary">Innovating at the intersection of AI and language.</p>
          </div>
          <div className="flex justify-center text-center">
            <ul className="space-y-2">
              {footerLinks.map(link => (
                <li key={link.name}>
                  <a href={link.path} onClick={(e) => handleNavigation(e, link.path)} className="hover:text-light-accent dark:hover:text-dark-accent transition-colors">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col items-center md:items-end">
            <h3 className="font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => <a key={index} href={link.href} className="text-light-text-secondary dark:text-dark-text-secondary hover:text-light-accent dark:hover:text-dark-accent transition-colors">{link.icon}</a>)}
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center text-light-text-secondary dark:text-dark-text-secondary">
          <p>&copy; {new Date().getFullYear()} aiNarabic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;