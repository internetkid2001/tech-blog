
import React from 'react';

const BlogFooter = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-6 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-gray-600 text-sm">
          © 2024 Homelab Chronicles. Built with passion for technology and continuous learning.
        </p>
        <div className="flex justify-center gap-6 mt-4">
          <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors">
            GitHub
          </a>
          <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors">
            LinkedIn
          </a>
          <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors">
            Twitter
          </a>
          <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors">
            RSS Feed
          </a>
        </div>
      </div>
    </footer>
  );
};

export default BlogFooter;
