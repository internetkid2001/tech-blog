// src/components/CloudServices.tsx
import React from 'react';

const cloudServices = [
  {
    name: "Cloudflare-DDNS",
    // status: "Started", // Removed
    description: "Automated dynamic DNS updates using Cloudflare's API. Keeps your domain name pointing to your home IP address even if it changes.",
    category: "Network Utility, Remote Access",
    notes: "Essential for reliably accessing self-hosted services via a domain name."
  },
  {
    name: "CloudflaredTunnel",
    // status: "Started", // Removed
    description: "Creates secure, outbound-only connections from your server to Cloudflare's network. Allows exposing web services without opening inbound firewall ports.",
    category: "Remote Access, Security",
    notes: "Enhances security by not exposing ports directly and leveraging Cloudflare's protection."
  },
  {
    name: "duckdns",
    // status: "Started", // Removed
    description: "A free dynamic DNS service. This container likely automates updating your DuckDNS hostname with your current IP address.",
    category: "Network Utility, Remote Access",
    notes: "Alternative or supplementary to Cloudflare-DDNS."
  },
  {
    name: "swag",
    // status: "Started", // Removed
    description: "Secure Web Application Gateway (SWAG) - formerly Let's Encrypt. A full-fledged Nginx webserver and reverse proxy with PHP support and a built-in Certbot client that automates free SSL certificate generation and renewal.",
    category: "Reverse Proxy, Web Server, Security",
    notes: "Provides HTTPS for self-hosted services and simplifies certificate management."
  }
];

const CloudServices = () => {
  return (
    <div className="max-w-4xl mx-auto p-4 text-gray-800">
      <h1 className="text-3xl font-bold mb-8 text-slate-900 text-center">Cloud-Reliant Services</h1>
      <p className="text-center text-gray-600 mb-10">
        These Docker containers leverage or interact directly with external cloud platforms to provide dynamic DNS, secure tunneling, and other essential services for making self-hosted applications accessible and secure.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cloudServices.map((service, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow">
            <h2 className="text-xl font-semibold mb-2 text-slate-800">{service.name}</h2>
            {/* <p className="text-sm text-gray-500 mb-1">Status: <span className={`font-medium ${service.status === 'Started' ? 'text-green-600' : 'text-red-600'}`}>{service.status}</span></p> // Removed */}
            <p className="text-sm text-gray-700 mb-3 leading-relaxed">{service.description}</p>
            <div className="mb-3">
              <span className="text-xs font-semibold bg-blue-100 text-blue-700 px-2 py-1 rounded-full">{service.category}</span>
            </div>
            {service.notes && <p className="text-xs text-gray-500 italic mt-2">{service.notes}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CloudServices;