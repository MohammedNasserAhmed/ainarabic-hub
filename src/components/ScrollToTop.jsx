// src/components/ScrollToTop.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    
    useEffect(() => {
        const toggleVisibility = () => window.pageYOffset > 300 ? setIsVisible(true) : setIsVisible(false);
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button 
                    onClick={scrollToTop} 
                    initial={{ opacity: 0, y: 20 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    exit={{ opacity: 0, y: 20 }}
                    className="fixed bottom-8 right-8 bg-light-accent dark:bg-dark-accent text-white p-3 rounded-full shadow-lg hover:bg-light-accent-hover dark:hover:bg-dark-accent-hover transition-colors"
                    aria-label="Scroll to top"
                >
                    <ArrowUp size={24} />
                </motion.button>
            )}
        </AnimatePresence>
    );
};

export default ScrollToTop;