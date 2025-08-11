import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import AnimatedPage from '../components/AnimatedPage';
import SectionHeader from '../components/SectionHeader';
import Card from '../components/Card';
import { mockData } from '../data/mockData';

const Projects = () => {
  return (
    <AnimatedPage>
      <Helmet>
        <title>AI Projects | aiNarabic</title>
        <meta name="description" content="Discover the innovative AI projects developed by the aiNarabic team." />
      </Helmet>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <SectionHeader title="AI Projects" subtitle="Explore our in-house projects and technological breakthroughs." />
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          initial="hidden"
          animate="show"
        >
          {mockData.projects.map((project) => (
            <motion.div key={project.id} variants={{ hidden: { y: 20, opacity: 0 }, show: { y: 0, opacity: 1 } }}>
              <Card item={project} linkTo="#" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedPage>
  );
};

export default Projects;
