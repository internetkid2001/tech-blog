
import React from 'react';

const BlogHero = () => {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
          Homelab Chronicles
        </h1>
        <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
          Exploring networking, infrastructure, and information systems through hands-on projects
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
          <span className="bg-blue-600/30 px-4 py-2 rounded-full border border-blue-400/30">
            Network Engineering
          </span>
          <span className="bg-cyan-600/30 px-4 py-2 rounded-full border border-cyan-400/30">
            Infrastructure
          </span>
          <span className="bg-indigo-600/30 px-4 py-2 rounded-full border border-indigo-400/30">
            Systems Administration
          </span>
        </div>
      </div>
    </section>
  );
};

export default BlogHero;
