// src/components/BlogPost.tsx
import React from 'react';
import { Link } from 'react-router-dom';

interface BlogPostProps {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  // readTime: string; // Removed readTime
  image: string;
}

const BlogPost: React.FC<BlogPostProps> = ({
  slug,
  title,
  excerpt,
  category,
  // readTime, // Removed readTime
  image
}) => {
  return (
    <article className="bg-white rounded-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full group">
      <div className="relative h-48 md:h-56 overflow-hidden">
        <img 
          src={`https://images.unsplash.com/${image}?w=800&q=80&fit=cover`}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-2 mb-3">
          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
            {category}
          </span>
          {/* Removed date and readTime display */}
        </div>
        
        <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">
          <Link to={`/blog/${slug}`}>{title}</Link>
        </h3>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">
          {excerpt}
        </p>
        
        <Link to={`/blog/${slug}`} className="mt-auto text-blue-600 font-medium hover:underline inline-flex items-center text-sm self-start">
          Read More
          <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </article>
  );
};

export default BlogPost;