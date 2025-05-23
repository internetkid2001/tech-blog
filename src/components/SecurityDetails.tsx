// src/components/SecurityDetails.tsx
import React from 'react';

const SecurityDetails = () => {
  return (
    <div className="max-w-4xl mx-auto p-4 text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-slate-900">Network Security Overview</h1>

      <section className="mb-8 bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-3 text-slate-700">OPNsense Firewall</h2>
        <div className="bg-slate-50 p-4 rounded-md border border-slate-200 space-y-2 text-sm">
          <p>The OPNsense router is the primary line of defense for the network.</p>
          <p><strong className="font-medium">Key Security Features Implemented:</strong></p>
          <ul className="list-disc pl-5 mt-1">
            <li><strong className="font-medium">Stateful Firewall:</strong> Default deny policies with specific rules for allowed traffic.</li>
            <li><strong className="font-medium">NAT (Network Address Translation):</strong> Masks internal IP addresses from the public internet.</li>
            <li><strong className="font-medium">Unbound DNS with Blocklists:</strong> Provides DNS resolution and filters out known malicious domains, ads, and trackers.</li>
            <li><strong className="font-medium">Port Forwarding:</strong> Carefully configured NAT port forwards allow access to specific internal services (e.g., Minecraft servers, remote services) from the internet, limiting exposure.</li>
          </ul>
        </div>
      </section>

      <section className="mb-8 bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-3 text-slate-700">Secure Remote Access & Services</h2>
        <div className="bg-slate-50 p-4 rounded-md border border-slate-200 space-y-2 text-sm">
          <p><strong className="font-medium">Cloudflare Tunnel (CloudflaredTunnel):</strong> Used to create secure, outbound-only connections to expose internal services to the internet without opening inbound firewall ports.</p>
          <p><strong className="font-medium">SWAG (Secure Web Application Gateway):</strong> A reverse proxy that provides SSL termination and secure access to various web applications hosted internally.</p>
          <p><strong className="font-medium">Dynamic DNS (Cloudflare-DDNS, DuckDNS):</strong> Keeps domain names pointing to a dynamic home IP address, often used in conjunction with Cloudflare Tunnel or SWAG.</p>
        </div>
      </section>
      
      <section className="mb-8 bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-3 text-slate-700">Planned Security Enhancements (VLANs)</h2>
        <div className="bg-slate-50 p-4 rounded-md border border-slate-200 space-y-2 text-sm">
          <p>A significant security upgrade will be the implementation of VLANs.</p>
          <p>This will segment the network into isolated zones (e.g., Servers, Management, Trusted Clients, IoT, Guest WiFi), drastically reducing the attack surface and preventing lateral movement in case of a breach in one segment. OPNsense will manage inter-VLAN routing and enforce strict firewall policies between these zones.</p>
        </div>
      </section>

      <section className="mb-8 bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-3 text-slate-700">Physical & Power Security</h2>
         <div className="bg-slate-50 p-4 rounded-md border border-slate-200 space-y-2 text-sm">
          <p><strong className="font-medium">UPS Monitoring:</strong> The Main Unraid server is connected to an APC UPS, configured for graceful shutdown when the battery reaches 20% or 15 minutes of runtime remain. This protects against data corruption from sudden power loss.</p>
        </div>
      </section>
    </div>
  );
};

export default SecurityDetails;