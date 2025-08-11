import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Frown } from 'lucide-react';
import AnimatedPage from '../components/AnimatedPage';

const NotFound = () => {
  return (
    <AnimatedPage>
      <Helmet>
        <title>404 - Page Not Found | aiNarabic</title>
      </Helmet>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="max-w-md mx-auto">
          <Frown className="mx-auto h-24 w-24 text-light-accent dark:text-dark-accent mb-4" />
          <h1 className="text-6xl font-extrabold font-display text-light-text-primary dark:text-dark-text-primary mb-2">404</h1>
          <h2 className="text-3xl font-bold mb-4">Page Not Found</h2>
          <p className="text-lg text-light-text-secondary dark:text-dark-text-secondary mb-8">
            Sorry, we couldn't find the page you're looking for.
          </p>
          <Link
            to="/"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-light-accent hover:bg-light-accent-hover dark:bg-dark-accent dark:hover:bg-dark-accent-hover transition-colors"
          >
            Go back home
          </Link>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default NotFound;
