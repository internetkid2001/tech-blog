// Updated src/components/BlogHeader.tsx
import React from 'react';
import { SidebarTrigger } from '@/components/ui/sidebar';
// Search import is no longer needed
// import { Search } from 'lucide-react'; 

const BlogHeader = () => {
  return (
    <header className="bg-white border-b border-gray-100 px-6 py-3 flex items-center justify-between">
      <div className="flex items-center">
        <SidebarTrigger className="mr-4" />
        <h1 className="text-xl font-medium text-slate-800">Victor's Tech Blog</h1> {/* Updated title to Tech Blog */}
      </div>
      {/* Search bar div has been removed */}
    </header>
  );
};

export default BlogHeader;