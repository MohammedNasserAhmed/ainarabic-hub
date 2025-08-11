// src/components/Loader.jsx
import React from 'react';
import { Loader2 } from 'lucide-react';

const Loader = () => {
  return (
    <div className="flex justify-center items-center p-8">
      <Loader2 className="h-12 w-12 animate-spin text-light-accent dark:text-dark-accent" />
    </div>
  );
};

export default Loader;