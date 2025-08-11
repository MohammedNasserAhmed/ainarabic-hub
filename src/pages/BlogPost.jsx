import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import { mockData } from '../data/mockData';
import AnimatedPage from '../components/AnimatedPage';
import NotFound from './NotFound';

const BlogPost = () => {
  const { slug } = useParams();
  const post = mockData.blog.find((p) => p.slug === slug);

  if (!post) {
    return <NotFound />;
  }

  return (
    <AnimatedPage>
       <Helmet>
        <title>{post.title} | aiNarabic Blog</title>
        <meta name="description" content={post.description} />
      </Helmet>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl mx-auto">
          <Link to="/blog" className="inline-flex items-center text-light-accent dark:text-dark-accent mb-8 hover:underline">
            <ArrowLeft size={16} className="mr-2" />
            Back to Blog
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold font-display mb-4">{post.title}</h1>
          <div className="flex items-center space-x-4 text-light-text-secondary dark:text-dark-text-secondary mb-8">
            <div className="flex items-center">
              <User size={16} className="mr-2" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center">
              <Calendar size={16} className="mr-2" />
              <span>{post.date}</span>
            </div>
          </div>
          <img src={post.image} alt={post.title} className="w-full rounded-lg shadow-lg mb-8" />
          <div
            className="prose dark:prose-invert max-w-none text-lg leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post.content }}
          ></div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default BlogPost;
