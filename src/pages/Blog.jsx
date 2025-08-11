import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import AnimatedPage from '../components/AnimatedPage';
import SectionHeader from '../components/SectionHeader';
import Card from '../components/Card';
import { mockData } from '../data/mockData';

const Blog = () => {
  const [posts] = useState(mockData.blog);

  return (
    <AnimatedPage>
      <Helmet>
        <title>Blog | aiNarabic</title>
        <meta name="description" content="Read the latest articles, insights, and news from the aiNarabic team on AI, machine learning, and technology." />
      </Helmet>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <SectionHeader title="Our Blog" subtitle="Insights, tutorials, and news from the forefront of AI." />
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
          {posts.map((post) => (
            <motion.div key={post.id} variants={{ hidden: { y: 20, opacity: 0 }, show: { y: 0, opacity: 1 } }}>
              <Card item={post} linkTo={`/blog/${post.slug}`} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedPage>
  );
};

export default Blog;
