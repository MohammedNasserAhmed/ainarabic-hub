import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Target, Eye } from 'lucide-react';
import AnimatedPage from '../components/AnimatedPage';
import SectionHeader from '../components/SectionHeader';

const About = () => {
  return (
    <AnimatedPage>
      <Helmet>
        <title>About Us | aiNarabic</title>
        <meta name="description" content="Learn about aiNarabic, a startup founded in 2022, focusing on GenAI solutions for the Arabic-speaking world. Discover our mission, vision, and our team of experts." />
      </Helmet>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <SectionHeader title="About aiNarabic" subtitle="Building advanced GenAI solutions for the private and governmental sectors with a focus on the Arabic language. Founded in 2022, we are now expanding to the Arabic region." />
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <img src="https://placehold.co/800x600/1F2937/FFFFFF?text=AI+Solutions" alt="AI Solutions" className="rounded-lg shadow-2xl" />
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 p-3 bg-light-accent/10 dark:bg-dark-accent/20 rounded-full">
                  <Target className="h-6 w-6 text-light-accent dark:text-dark-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-display">Our Mission</h3>
                  <p className="text-light-text-secondary dark:text-dark-text-secondary mt-1">
                    To build generative AI solutions that fill the gap in the Arabic market, focusing on high-accuracy models for Arabic voice and text to empower businesses and individuals in the Arabic-speaking world.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 p-3 bg-light-accent/10 dark:bg-dark-accent/20 rounded-full">
                  <Eye className="h-6 w-6 text-light-accent dark:text-dark-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-display">Our Vision</h3>
                  <p className="text-light-text-secondary dark:text-dark-text-secondary mt-1">
                    To be a leading force in Arabic AI, bridging the technological gap and driving innovation with powerful, accessible, and ethically-developed generative AI solutions for the region.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="bg-light-secondary dark:bg-dark-secondary py-20 rounded-lg">
          <SectionHeader title="Meet the Team" subtitle="Our team of 7 passionate experts is led by our co-founder." />
          <div className="flex justify-center">
            <motion.div
              key="M. N. Gaber, PhD"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <img src="https://placehold.co/400x400/D97706/FFFFFF?text=MG" alt="M. N. Gaber, PhD" className="w-32 h-32 rounded-full mx-auto mb-4 shadow-lg" />
              <h4 className="text-lg font-bold">M. N. Gaber, PhD</h4>
              <p className="text-light-accent dark:text-dark-accent">Co-founder & CEO</p>
            </motion.div>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default About;
