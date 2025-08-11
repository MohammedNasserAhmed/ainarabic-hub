// src/context/ThemeContext.jsx

import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    // Check for theme in localStorage only on the client-side
    if (typeof window !== 'undefined') {
      const localTheme = window.localStorage.getItem('theme');
      return localTheme || 'light';
    }
    return 'light'; // Default theme
  });

  useEffect(() => {
    const root = window.document.documentElement;
    const oldTheme = theme === 'light' ? 'dark' : 'light';
    root.classList.remove(oldTheme);
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};