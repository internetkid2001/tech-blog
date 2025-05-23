
import React from 'react';
import BlogPost from './BlogPost';

const FeaturedPosts = () => {
  const posts = [
    {
      title: "Building a Kubernetes Cluster in My Homelab",
      excerpt: "A deep dive into setting up a production-grade Kubernetes cluster using Raspberry Pi 4s and exploring container orchestration at home.",
      date: "December 15, 2024",
      category: "Kubernetes",
      readTime: "8 min read",
      image: "photo-1518770660439-4636190af475",
      featured: true
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
    {
      title: "Monitoring Infrastructure with Grafana and Prometheus",
      excerpt: "Building a comprehensive monitoring solution to track system metrics, network performance, and application health.",
      date: "November 28, 2024",
      category: "Monitoring",
      readTime: "7 min read",
      image: "photo-1487058792275-0ad4aaf24ca7"
    },
    {
      title: "Automating Backups with Ansible and rsync",
      excerpt: "Creating automated backup solutions using Ansible playbooks to ensure data protection across my homelab infrastructure.",
      date: "November 20, 2024",
      category: "Automation",
      readTime: "5 min read",
      image: "photo-1488590528505-98d2b5aba04b"
    },
    {
      title: "Building a pfSense Firewall for Advanced Network Protection",
      excerpt: "Implementing pfSense as a dedicated firewall solution with advanced features like IDS/IPS and traffic shaping.",
      date: "November 15, 2024",
      category: "Security",
      readTime: "9 min read",
      image: "photo-1531297484001-80022131f5a1"
    }
  ];

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest Projects & Insights</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Documenting my journey through homelab experiments, network configurations, 
            and infrastructure projects that push the boundaries of home computing.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <BlogPost key={index} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPosts;
