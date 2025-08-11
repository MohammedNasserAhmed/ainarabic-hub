// src/components/SectionHeader.jsx
import React from 'react';
import { motion } from 'framer-motion';

const SectionHeader = ({ title, subtitle }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.5 }}
    className="text-center mb-12"
  >
    <h2 className="text-3xl md:text-4xl font-bold font-display text-light-text-primary dark:text-dark-text-primary mb-2">
      {title}
    </h2>
    <p className="text-lg text-light-text-secondary dark:text-dark-text-secondary max-w-2xl mx-auto">
      {subtitle}
    </p>
  </motion.div>
);

export default SectionHeader;