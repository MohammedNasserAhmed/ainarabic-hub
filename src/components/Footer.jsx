// src/components/Footer.jsx
import React from 'react';
import { Twitter, Github, Linkedin } from 'lucide-react';

const Footer = ({ onNavigate }) => {
  const socialLinks = [
    { icon: <Twitter size={20} />, href: '#' },
    { icon: <Github size={20} />, href: '#' },
    { icon: <Linkedin size={20} />, href: '#' }
  ];
  const footerGroups = [
    {
      title: 'Explore',
      links: [
        { name: 'About', path: '/about' },
        { name: 'Portfolio', path: '/portfolio' },
        { name: 'Projects', path: '/projects' },
        { name: 'Research', path: '/research' },
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Blog', path: '/blog' },
        { name: 'Books', path: '/books' },
        { name: 'Activities', path: '/activities' },
        { name: 'Contact', path: '/contact' },
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', path: '#' },
        { name: 'Terms of Use', path: '#' },
        { name: 'Cookie Policy', path: '#' },
      ]
    }
  ];

  const handleNavigation = (e, path) => {
    e.preventDefault();
    if (path !== '#') {
      onNavigate(path);
    }
  };

  return (
    <footer className="bg-light-secondary dark:bg-dark-secondary mt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-12 lg:grid-cols-4">
          <div>
            <a href="/" onClick={(e) => handleNavigation(e, '/')} className="flex items-center gap-3 mb-6 focus-ring">
              <img src="/website_logo.png" alt="aiNarabic logo" className="h-10 w-10 rounded-md object-cover" />
              <span className="font-display text-2xl font-bold">aiNarabic</span>
            </a>
            <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary leading-relaxed mb-6">Innovating at the intersection of AI, Arabic language, and accessible technology for global impact.</p>
            <div className="flex gap-4">
              {socialLinks.map((link, i) => (
                <a key={i} href={link.href} className="w-9 h-9 inline-flex items-center justify-center rounded-full bg-light-primary/60 dark:bg-dark-primary/60 hover:bg-light-accent hover:text-white dark:hover:bg-dark-accent transition-colors focus-ring text-light-text-secondary dark:text-dark-text-secondary">
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          {footerGroups.map(group => (
            <div key={group.title}>
              <h4 className="font-semibold mb-4 tracking-wide text-sm uppercase text-light-text-secondary dark:text-dark-text-secondary">{group.title}</h4>
              <ul className="space-y-3">
                {group.links.map(link => (
                  <li key={link.name}>
                    <a href={link.path} onClick={(e) => handleNavigation(e, link.path)} className="text-sm hover:text-light-accent dark:hover:text-dark-accent transition-colors focus:outline-none focus-visible:underline">{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h4 className="font-semibold mb-4 tracking-wide text-sm uppercase text-light-text-secondary dark:text-dark-text-secondary">Stay Updated</h4>
            <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary mb-4">Join our mailing list for research updates, articles, and new resources.</p>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
              <div className="flex items-center gap-3">
                <input type="email" required placeholder="Email address" className="flex-1 px-4 py-2 rounded-md bg-light-primary dark:bg-dark-primary border border-gray-300 dark:border-gray-700 focus-ring text-sm" />
                <button type="submit" className="px-4 py-2 rounded-md bg-light-accent text-white dark:bg-dark-accent text-sm font-medium hover:bg-light-accent-hover dark:hover:bg-dark-accent-hover focus-ring">Subscribe</button>
              </div>
              <p className="text-[11px] leading-snug text-light-text-secondary dark:text-dark-text-secondary">We respect your privacy. Unsubscribe anytime.</p>
            </form>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-black/5 dark:border-white/10 text-center text-xs text-light-text-secondary dark:text-dark-text-secondary flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>&copy; {new Date().getFullYear()} aiNarabic. All rights reserved.</p>
          <p className="opacity-75">Last updated {new Date().toLocaleDateString()}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;