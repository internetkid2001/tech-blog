// src/components/BlogContent.tsx
import React from 'react';
import BlogPost from './BlogPost';
import HomelabNetwork from './HomelabNetwork';
import { posts } from '@/lib/blogData'; // Import posts from the new location
import { Link } from 'react-router-dom'; // <-- ADD THIS LINE

interface BlogContentProps {
  currentContent: string;
}

const BlogContent: React.FC<BlogContentProps> = ({ currentContent }) => {
  const tableOfContentsLinks = [
    { title: "Home Lab Enterprise Network Build — Master Documentation (2025)", href: "#", contentKey: "homelab-network", isPageLink: false, pageSlug: "homelab-network"},
    ...posts.map(post => ({ title: post.title, href: `/blog/${post.slug}`, contentKey: "latest", isPageLink: true, pageSlug: `/blog/${post.slug}`}))
  ];

  return (
    <main className="p-6 max-w-7xl mx-auto w-full">
      {currentContent === 'latest' && (
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">Latest Insights & Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map((post) => (
              <BlogPost key={post.slug} {...post} />
            ))}
          </div>
        </section>
      )}
      
      {currentContent === 'homelab-network' && (
        <HomelabNetwork />
      )}
      
      {currentContent === 'latest' && (
        <section className="my-12 py-8 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">Explore Documentation</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 max-w-2xl mx-auto">
            <ul className="space-y-3">
              {tableOfContentsLinks.map(link => (
                 <li key={link.title} className="text-blue-700 hover:text-blue-900 hover:underline">
                   {link.isPageLink ? (
                     <Link to={link.pageSlug || '#'}>{link.title}</Link>
                   ) : (
                     <a href={link.href} onClick={(e) => {
                         e.preventDefault();
                         // This part would need to be connected to your Index.tsx state management
                         alert(`This should ideally trigger a view change to: ${link.contentKey}`);
                     }}>
                       {link.title}
                     </a>
                   )}
                 </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </main>
  );
};

export default BlogContent;