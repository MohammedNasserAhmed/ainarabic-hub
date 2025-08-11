import React from 'react';
import { Helmet } from 'react-helmet-async';
import AnimatedPage from '../components/AnimatedPage';
import SectionHeader from '../components/SectionHeader';

// This is a placeholder component. You can expand it with actual activities data.
const Activities = () => {
  return (
    <AnimatedPage>
      <Helmet>
        <title>Activities | aiNarabic</title>
        <meta name="description" content="Discover the latest activities, events, and workshops from aiNarabic." />
      </Helmet>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <SectionHeader 
          title="Our Activities" 
          subtitle="Engaging with the community through workshops, talks, and events." 
        />
        <div className="text-center text-light-text-secondary dark:text-dark-text-secondary">
          <p>Content for the Activities page is coming soon. Please check back later!</p>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Activities;
