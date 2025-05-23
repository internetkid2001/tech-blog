// src/components/NetworkSetupDetails.tsx
import React from 'react';

const NetworkSetupDetails = () => {
  return (
    <div className="max-w-4xl mx-auto p-4 text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-slate-900">Network Setup Details</h1>

      <section className="mb-8 bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-3 text-slate-700">Core Infrastructure</h2>
        <div className="bg-slate-50 p-4 rounded-md border border-slate-200 space-y-2 text-sm">
          <p><strong className="font-medium">ISP:</strong> Astound Broadband (1 Gbps down)</p>
          <p><strong className="font-medium">Router:</strong> OPNsense (192.168.1.1) - Handles DHCP, NAT, Unbound DNS with blocklists, and port forwards.</p>
          <p><strong className="font-medium">Primary Switch:</strong> 1GbE Unmanaged Switch - General device connectivity.</p>
        </div>
      </section>

      <section className="mb-8 bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-3 text-slate-700">Connected Devices & IP Schema</h2>
        <div className="bg-slate-50 p-4 rounded-md border border-slate-200 text-sm">
          <p className="mb-2 italic">Most devices are on the 192.168.1.0/24 network, with specific static IPs for servers and key devices.</p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong className="font-medium">Main Unraid Server:</strong> 192.168.1.144 (10GbE)</li>
            <li><strong className="font-medium">Backup Unraid Server:</strong> 192.168.1.248 (10GbE)</li>
            <li><strong className="font-medium">MacBook Pro:</strong> 192.168.1.223 (LAN), 192.168.13.143 (10GbE direct for high-speed transfers)</li>
            <li><strong className="font-medium">Gaming PC:</strong> 192.168.1.236 (10GbE)</li>
            <li><strong className="font-medium">UniFi Nano HD AP:</strong> 192.168.1.227</li>
            <li><strong className="font-medium">TP-Link AC1750 AP:</strong> IP unknown (operates in bridge mode)</li>
            <li><strong className="font-medium">TCL Google TV:</strong> 192.168.1.232</li>
          </ul>
        </div>
      </section>

      <section className="mb-8 bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-3 text-slate-700">10GbE Networking</h2>
         <div className="bg-slate-50 p-4 rounded-md border border-slate-200 space-y-2 text-sm">
          <p>High-speed 10GbE connectivity is crucial for video editing and large file transfers between servers and workstations.</p>
          <p><strong className="font-medium">Current Method:</strong> Manual patching of 10GbE SFP+ or Ethernet cables between the Main Unraid, Backup Unraid, MacBook Pro (via Thunderbolt adapter), and Gaming PC.</p>
          <p><strong className="font-medium">Challenge:</strong> Limited ports and inability for simultaneous 10GbE access between multiple devices and a server without re-patching.</p>
          <p><strong className="font-medium">Planned Upgrade:</strong> Acquisition of a dedicated 10GbE switch to provide persistent high-speed connections for all capable devices and to support VLAN implementation.</p>
        </div>
      </section>

      <section className="mb-8 bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-3 text-slate-700">Wireless Infrastructure</h2>
        <div className="bg-slate-50 p-4 rounded-md border border-slate-200 space-y-2 text-sm">
          <p><strong className="font-medium">Primary AP:</strong> UniFi Nano HD AP (192.168.1.227) providing Wi-Fi 5 (AC) coverage.</p>
          <p><strong className="font-medium">Secondary AP:</strong> TP-Link AC1750 operating in bridge mode to extend coverage. IP address dynamically assigned (currently unknown).</p>
        </div>
      </section>
    </div>
  );
};

export default NetworkSetupDetails;