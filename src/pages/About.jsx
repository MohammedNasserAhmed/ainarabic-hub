import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Target, Eye } from 'lucide-react';
import AnimatedPage from '../components/AnimatedPage';
import SectionHeader from '../components/SectionHeader';

const teamMembers = [
  { name: 'Dr. Aisha Al-Farsi', role: 'Founder & CEO', image: 'https://placehold.co/400x400/D97706/FFFFFF?text=AA' },
  { name: 'Yusuf Ahmed', role: 'Lead AI Engineer', image: 'https://placehold.co/400x400/10B981/FFFFFF?text=YA' },
  { name: 'Fatima Khan', role: 'Senior UX Designer', image: 'https://placehold.co/400x400/F59E0B/FFFFFF?text=FK' },
];

const About = () => {
  return (
    <AnimatedPage>
      <Helmet>
        <title>About Us | aiNarabic</title>
        <meta name="description" content="Learn about aiNarabic's mission, vision, and the team driving AI innovation." />
      </Helmet>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <SectionHeader title="About aiNarabic" subtitle="We are a team of passionate innovators dedicated to advancing Artificial Intelligence." />
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <img src="https://placehold.co/800x600/1F2937/FFFFFF?text=Team+Collaboration" alt="Our Team" className="rounded-lg shadow-2xl" />
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
                    To democratize access to cutting-edge AI technologies and create intelligent solutions that empower businesses and individuals in the Arabic-speaking world and beyond.
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
                    To be a leading force in AI research and development, recognized for our ethical approach, innovation, and commitment to creating a positive impact on society.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="bg-light-secondary dark:bg-dark-secondary py-20 rounded-lg">
          <SectionHeader title="Meet the Team" subtitle="The minds behind our success." />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <motion.div key={member.name} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="text-center">
                <img src={member.image} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4 shadow-lg" />
                <h4 className="text-lg font-bold">{member.name}</h4>
                <p className="text-light-accent dark:text-dark-accent">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default About;
