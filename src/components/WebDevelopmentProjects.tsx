// src/components/WebDevelopmentProjects.tsx
import React from 'react';

const projects = [
  {
    title: "Vista Updated Website",
    repoUrl: "https://github.com/internetkid2001/vistaupdated2025.git", //
    liveUrls: [
      { name: "vist4.net", url: "http://vist4.net" },
      { name: "volunteersinservicetoart.com", url: "https://volunteersinservicetoart.com/" }
    ],
    description: "A Next.js–based portfolio and media showcase site with CSS-Module styling and video embeds. Features static export for Firebase hosting and automated deployment via GitHub Actions.", //
    techStack: [
      { category: "Framework", details: "Next.js 15 (App Router + TypeScript, output: 'export')" }, //
      { category: "Styling", details: "Tailwind CSS (global resets) + CSS Modules (components & pages)" }, //
      { category: "Video Hosting", details: "YouTube embeds & CDN-hosted MP4s" }, //
      { category: "Routing", details: "Next.js <Link> for internal, standard <a> for external" }, //
      { category: "Deployment", details: "Firebase Hosting + GitHub Actions (auto-deploy from main)" }, //
    ],
    keyFeatures: [
      "Next.js App Router project structure.", //
      "Static HTML export (`output: 'export'`) for efficient hosting.", //
      "Scoped styling with CSS Modules alongside Tailwind CSS for global utilities.", //
      "Pages for Landing, Video showcase, Store/archive stubs, Contact form (Formspree), Newsletter signup (Mailchimp), FAQ & Terms.", //
      "Sidebar hidden on mobile via media query.", //
      "Firebase Hosting configured for the `/out` directory.", //
      "Automated deployment pipeline using GitHub Actions on pushes to the main branch.", //
      "Custom Content-Security-Policy headers via next.config.js." //
    ]
  },
  {
    title: "Profolio Website 2025",
    repoUrl: "https://github.com/internetkid2001/2025-profolio-website.git", //
    liveUrls: [ // Updated to include the live site for Profolio
      { name: "victorgrisson.com", url: "http://victorgrisson.com" } // Assuming this is the correct live URL for this project too
    ],
    description: "A personal portfolio site showcasing video direction and photography work. Built with React, Tailwind CSS, React Router, and Firebase, featuring Google Analytics integration and automated deployment.", //
    techStack: [
      { category: "Frontend", details: "React" }, //
      { category: "Styling", details: "Tailwind CSS" }, //
      { category: "Routing", details: "React Router DOM" }, //
      { category: "Backend/Database", details: "Firebase (Firestore for contact form submissions)" }, //
      { category: "Hosting", details: "Firebase Hosting" }, //
      { category: "Analytics", details: "Google Analytics (via gtag.js)" }, //
    ],
    keyFeatures: [
      "Fullscreen autoplay video background on Landing Page.", //
      "Vertical scrolling showcase for video projects.", //
      "Scrollable mosaic for photography work.", //
      "Fullscreen photo album viewer with keyboard navigation.", //
      "Contact form submitting directly to Firebase Firestore.", //
      "Google Analytics with route-based page view tracking.", //
      "Automated deployment to Firebase Hosting via GitHub Actions on merge to main and previews for PRs.", //
    ]
  }
];

const WebDevelopmentProjects = () => {
  return (
    <div className="max-w-4xl mx-auto p-4 text-gray-800">
      <h1 className="text-3xl font-bold mb-8 text-slate-900 text-center">Web Development Projects</h1>
      
      <div className="space-y-10">
        {projects.map((project, index) => (
          <section key={index} className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-semibold mb-2 text-slate-800">{project.title}</h2>
            <div className="mb-3 space-x-4">
                {project.repoUrl && (
                  <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:text-blue-800 hover:underline">
                    GitHub Repository
                  </a>
                )}
                {project.liveUrls && project.liveUrls.length > 0 && (
                    project.liveUrls.map(site => (
                        <a key={site.name} href={site.url} target="_blank" rel="noopener noreferrer" className="text-sm text-green-600 hover:text-green-800 hover:underline">
                           Live Site: {site.name}
                        </a>
                    ))
                )}
            </div>
            <p className="text-sm text-gray-600 mb-4 leading-relaxed">{project.description}</p>
            
            <h3 className="text-lg font-semibold mt-4 mb-2 text-slate-700">Tech Stack:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-1 text-sm mb-4">
              {project.techStack.map(tech => (
                <div key={tech.category} className="flex">
                  <strong className="font-medium w-32 shrink-0">{tech.category}:</strong>
                  <span className="text-gray-700">{tech.details}</span>
                </div>
              ))}
            </div>

            <h3 className="text-lg font-semibold mt-4 mb-2 text-slate-700">Key Features:</h3>
            <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
              {project.keyFeatures.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
};

export default WebDevelopmentProjects;