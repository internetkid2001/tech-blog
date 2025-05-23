// src/components/BlogContent.tsx
import React from 'react';
import BlogPost from './BlogPost';
import HomelabNetwork from './HomelabNetwork';
import NetworkSetupDetails from './NetworkSetupDetails';
import StorageSolutionsDetails from './StorageSolutionsDetails';
import SecurityDetails from './SecurityDetails';
import VlansNetworkingDetails from './VlansNetworkingDetails';
import WebDevelopmentProjects from './WebDevelopmentProjects'; // Import new component
import { posts } from '@/lib/blogData';
import { Link } from 'react-router-dom';

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
      
      {currentContent === 'homelab-network' && <HomelabNetwork />}
      {currentContent === 'network-setup' && <NetworkSetupDetails />}
      {currentContent === 'storage-solutions' && <StorageSolutionsDetails />}
      {currentContent === 'security' && <SecurityDetails />}
      {currentContent === 'vlans-networking' && <VlansNetworkingDetails />}
      {currentContent === 'web-development' && <WebDevelopmentProjects />} {/* Add this line */}
      
      { ![ 'latest',
          'homelab-network', 
          'network-setup', 
          'storage-solutions', 
          'security', 
          'vlans-networking',
          'web-development' // Add to exclusion list for placeholder
        ].includes(currentContent) &&
        currentContent !== 'automation' && // Keep other placeholders if they exist
        currentContent !== 'hardware-projects' &&
        currentContent !== 'cloud-services' && (
        <div className="text-center p-10">
          <h3 className="text-xl text-gray-600">Content for '{currentContent}' is coming soon or view <Link to="/" className="text-blue-600 hover:underline">Latest Posts</Link>.</h3>
        </div>
      )}

      {/* ... (Table of Contents section - keep as is or modify as needed) ... */}
       {(currentContent === 'latest' || currentContent === 'homelab-network') && (
            <section className="my-12 py-8 border-t border-gray-200">
              <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">Explore Documentation</h2>
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 max-w-2xl mx-auto">
                <ul className="space-y-3">
                  {tableOfContentsLinks.map(link => (
                     <li key={link.title} className="text-blue-700 hover:text-blue-900 hover:underline">
                       {link.isPageLink ? (
                         <Link to={link.pageSlug || '#'}>{link.title}</Link>
                       ) : (
                         // For non-page links, you might want to trigger handleMenuClick from Index.tsx
                         // This requires passing down the handleMenuClick function or using a context.
                         // For now, this alert is a placeholder for that logic.
                         <a href={link.href} onClick={(e) => {
                             e.preventDefault();
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