
import React from 'react';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { Search } from 'lucide-react';

const BlogHeader = () => {
  return (
    <header className="bg-white border-b border-gray-100 px-6 py-3 flex items-center justify-between">
      <div className="flex items-center">
        <SidebarTrigger className="mr-4" />
        <h1 className="text-xl font-medium text-slate-800">My Tech Projects</h1>
      </div>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
        <input 
          type="text" 
          placeholder="Search..." 
          className="pl-10 pr-4 py-1.5 rounded-full bg-gray-50 border border-gray-100 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
    </header>
  );
};

export default BlogHeader;
