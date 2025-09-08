import React, { useEffect, useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import { mockData } from '../data/mockData';
import AnimatedPage from '../components/AnimatedPage';
import NotFound from './NotFound';

const BlogPost = () => {
  const { slug } = useParams();
  const post = mockData.blog.find((p) => p.slug === slug);
  const readingTime = useMemo(() => {
    if (!post) return 0;
    const text = post.content.replace(/<[^>]+>/g, ' ');
    const words = text.split(/\s+/).filter(Boolean).length;
    return Math.max(1, Math.round(words / 200));
  }, [post]);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const article = document.getElementById('article-content');
      if (!article) return;
      const rect = article.getBoundingClientRect();
      const total = article.offsetHeight - window.innerHeight;
      const scrolled = Math.min(Math.max(window.scrollY - (article.offsetTop - 80), 0), total);
      setProgress(total > 0 ? (scrolled / total) * 100 : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [post]);

  if (!post) {
    return <NotFound />;
  }

  return (
    <AnimatedPage>
      <Helmet>
        <title>{post.title} | aiNarabic Blog</title>
        <meta name="description" content={post.description} />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: post.title,
          description: post.description,
            image: post.image,
          author: { '@type': 'Person', name: post.author },
          datePublished: post.date,
          mainEntityOfPage: { '@type': 'WebPage', '@id': typeof window !== 'undefined' ? window.location.href : '' }
        })}</script>
      </Helmet>
      <div className="fixed top-0 left-0 right-0 h-1 z-40 bg-transparent" aria-hidden>
        <div className="h-full bg-light-accent dark:bg-dark-accent origin-left transition-transform" style={{ transform: `scaleX(${progress/100})` }} />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
        <div className="max-w-3xl mx-auto">
          <Link to="/blog" className="inline-flex items-center text-light-accent dark:text-dark-accent mb-8 hover:underline">
            <ArrowLeft size={16} className="mr-2" />
            Back to Blog
          </Link>
          <header className="mb-10">
            <motion.h1 layoutId={`post-title-${post.id}`} className="text-4xl md:text-5xl font-bold font-display mb-6 leading-tight">{post.title}</motion.h1>
            <div className="flex flex-wrap items-center gap-6 text-light-text-secondary dark:text-dark-text-secondary text-sm">
              <span className="inline-flex items-center"><User size={16} className="mr-2" /> {post.author}</span>
              <span className="inline-flex items-center"><Calendar size={16} className="mr-2" /> {post.date}</span>
              <span className="inline-flex items-center">{readingTime} min read</span>
            </div>
          </header>
          <motion.figure layoutId={`post-image-${post.id}`} className="mb-10 rounded-xl overflow-hidden shadow-card ring-1 ring-black/5 dark:ring-white/10">
            <img src={post.image} alt={post.title} className="w-full h-auto object-cover" loading="lazy" />
          </motion.figure>
          <article id="article-content" className="prose dark:prose-invert max-w-none text-lg leading-relaxed">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </article>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default BlogPost;
