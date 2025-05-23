
import React from 'react';
import BlogPost from './BlogPost';
import HomelabNetwork from './HomelabNetwork';

interface BlogContentProps {
  currentContent: string;
}

const BlogContent: React.FC<BlogContentProps> = ({ currentContent }) => {
  const posts = [
    {
      title: "Building a Kubernetes Cluster in My Homelab",
      excerpt: "A deep dive into setting up a production-grade Kubernetes cluster using Raspberry Pi 4s and exploring container orchestration at home.",
      date: "December 15, 2024",
      category: "Kubernetes",
      readTime: "8 min read",
      image: "photo-1518770660439-4636190af475",
    },
    {
      title: "Implementing VLAN Segmentation for Home Network Security",
      excerpt: "How I segmented my home network using VLANs to isolate IoT devices and improve overall network security.",
      date: "December 10, 2024",
      category: "Networking",
      readTime: "6 min read",
      image: "photo-1461749280684-dccba630e2f6"
    },
    {
      title: "Setting Up Proxmox VE for Virtualization",
      excerpt: "My experience setting up Proxmox Virtual Environment for running multiple VMs and containers efficiently.",
      date: "December 5, 2024",
      category: "Virtualization",
      readTime: "10 min read",
      image: "photo-1486312338219-ce68d2c6f44d"
    },
  ];
  
  return (
    <main className="p-6 max-w-7xl mx-auto">
      {currentContent === 'latest' && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">Latest Posts</h2>
          <div className="grid grid-cols-1 gap-6">
            {posts.map((post, index) => (
              <BlogPost key={index} {...post} />
            ))}
          </div>
        </section>
      )}
      
      {currentContent === 'homelab-network' && (
        <HomelabNetwork />
      )}
      
      {currentContent === 'latest' && (
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">Table of Contents</h2>
          <div className="bg-gray-50 border border-gray-100 rounded-lg p-6">
            <ul className="space-y-3">
              <li className="text-blue-600 hover:underline">
                <a href="#homelab-network">Home Lab Enterprise Network Build — Master Documentation (2025)</a>
              </li>
              <li className="text-blue-600 hover:underline">
                <a href="#">Ransomware Resistant Backups with btrbk</a>
              </li>
              <li className="text-blue-600 hover:underline">
                <a href="#">Live Backups with btrbk</a>
              </li>
              <li className="text-blue-600 hover:underline">
                <a href="#">Knowledgebases with Outline</a>
              </li>
              <li className="text-blue-600 hover:underline">
                <a href="#">Remote Administration with Guacamole</a>
              </li>
            </ul>
          </div>
        </section>
      )}
    </main>
  );
};

export default BlogContent;
