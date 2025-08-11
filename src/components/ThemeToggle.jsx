// src/components/ThemeToggle.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  // Prevents rendering on server or before theme is determined
  if (!theme) return null;

  return (
    <button
      onClick={toggleTheme}
      className="w-14 h-7 flex items-center bg-gray-300 dark:bg-gray-700 rounded-full p-1 relative"
      style={{ justifyContent: theme === 'light' ? 'flex-start' : 'flex-end' }}
    >
      <motion.div
        layout
        transition={{ type: 'spring', stiffness: 700, damping: 30 }}
        className="w-5 h-5 bg-white rounded-full flex items-center justify-center"
      >
        {theme === 'light' ? <Sun size={14} className="text-yellow-500" /> : <Moon size={14} className="text-blue-500" />}
      </motion.div>
    </button>
  );
};

export default ThemeToggle;