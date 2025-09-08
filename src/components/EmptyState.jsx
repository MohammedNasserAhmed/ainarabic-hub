import React from 'react';
import { AlertCircle } from 'lucide-react';

const EmptyState = ({ title = 'Nothing here yet', message = 'Check back soon for new content.', action }) => {
  return (
    <div className="text-center py-16 rounded-xl bg-light-secondary/60 dark:bg-dark-secondary/60 backdrop-blur-sm ring-1 ring-black/5 dark:ring-white/5">
      <AlertCircle className="mx-auto h-10 w-10 mb-4 text-light-accent dark:text-dark-accent" />
      <h3 className="text-xl font-bold font-display mb-2">{title}</h3>
      <p className="text-light-text-secondary dark:text-dark-text-secondary mb-6 max-w-md mx-auto text-sm">{message}</p>
      {action}
    </div>
  );
};

export default EmptyState;
