import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import AnimatedPage from '../components/AnimatedPage';
import SectionHeader from '../components/SectionHeader';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you'd handle form submission here (e.g., send to an API)
    alert('Thank you for your message!');
    e.target.reset();
  };

  return (
    <AnimatedPage>
      <Helmet>
        <title>Contact Us | aiNarabic</title>
        <meta name="description" content="Get in touch with the aiNarabic team. We'd love to hear from you." />
      </Helmet>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <SectionHeader title="Contact Us" subtitle="Have a question or a project in mind? We'd love to hear from you." />
        <div className="grid md:grid-cols-2 gap-16">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <h3 className="text-2xl font-bold font-display mb-6">Get in Touch</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium">Name</label>
                <input type="text" id="name" name="name" required className="mt-1 block w-full px-3 py-2 bg-light-secondary dark:bg-dark-secondary border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-light-accent focus:border-light-accent" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium">Email</label>
                <input type="email" id="email" name="email" required className="mt-1 block w-full px-3 py-2 bg-light-secondary dark:bg-dark-secondary border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-light-accent focus:border-light-accent" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium">Message</label>
                <textarea id="message" name="message" rows="4" required className="mt-1 block w-full px-3 py-2 bg-light-secondary dark:bg-dark-secondary border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-light-accent focus:border-light-accent"></textarea>
              </div>
              <div>
                <button type="submit" className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-light-accent hover:bg-light-accent-hover dark:bg-dark-accent dark:hover:bg-dark-accent-hover transition-colors">
                  Send Message
                </button>
              </div>
            </form>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <h3 className="text-2xl font-bold font-display mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <Mail className="flex-shrink-0 h-6 w-6 text-light-accent dark:text-dark-accent mr-4 mt-1" />
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <a href="mailto:contact@ainarabic.com" className="text-light-text-secondary dark:text-dark-text-secondary hover:underline">contact@ainarabic.com</a>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="flex-shrink-0 h-6 w-6 text-light-accent dark:text-dark-accent mr-4 mt-1" />
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p className="text-light-text-secondary dark:text-dark-text-secondary">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="flex-shrink-0 h-6 w-6 text-light-accent dark:text-dark-accent mr-4 mt-1" />
                <div>
                  <h4 className="font-semibold">Office</h4>
                  <p className="text-light-text-secondary dark:text-dark-text-secondary">123 Innovation Drive<br/>Tech City, 54321</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Contact;
