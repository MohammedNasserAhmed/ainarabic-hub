import React from 'react';

export const Skeleton = ({ className = '' }) => (
  <div className={`relative overflow-hidden bg-light-secondary/60 dark:bg-dark-secondary/60 rounded-md ${className}`}>
    <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.6s_infinite] bg-gradient-to-r from-transparent via-white/30 dark:via-white/10 to-transparent" />
  </div>
);

// Tailwind add (in global CSS) if not present:
// @keyframes shimmer { 100% { transform: translateX(100%); } }

export default Skeleton;
