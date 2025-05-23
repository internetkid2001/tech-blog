
import React from 'react';

interface BlogPostProps {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
}

const BlogPost: React.FC<BlogPostProps> = ({
  title,
  excerpt,
  date,
  category,
  readTime,
  image
}) => {
  return (
    <article className="bg-white rounded-lg border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-200">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3 h-48 md:h-auto overflow-hidden">
          <img 
            src={`https://images.unsplash.com/${image}?w=800&q=80`}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-6 md:w-2/3">
          <div className="flex items-center gap-2 mb-3">
            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
              {category}
            </span>
            <span className="text-gray-500 text-sm">{date} · {readTime}</span>
          </div>
          
          <h3 className="text-xl font-bold text-slate-800 mb-3 hover:text-blue-600">
            <a href="#">{title}</a>
          </h3>
          
          <p className="text-gray-600 mb-4 line-clamp-2">
            {excerpt}
          </p>
          
          <a href="#" className="text-blue-600 font-medium hover:underline inline-flex items-center">
            Read More
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </article>
  );
};

export default BlogPost;
