// src/components/VlansNetworkingDetails.tsx
import React from 'react';

const VlansNetworkingDetails = () => {
  const plannedVlans = [
    { id: 1, purpose: "Default LAN", subnet: "192.168.1.0/24" }, //
    { id: 10, purpose: "Servers", subnet: "192.168.10.0/24" }, //
    { id: 20, purpose: "Management", subnet: "192.168.20.0/24" }, //
    { id: 30, purpose: "Trusted Clients", subnet: "192.168.30.0/24" }, //
    { id: 40, purpose: "IoT / Media", subnet: "192.168.40.0/24" }, //
    { id: 50, purpose: "Guest WiFi", subnet: "192.168.50.0/24" } //
  ];

  return (
    <div className="max-w-4xl mx-auto p-4 text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-slate-900">VLANs & Advanced Networking</h1>

      <section className="mb-8 bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-3 text-slate-700">Current Network State: Flat Network</h2>
        <div className="bg-slate-50 p-4 rounded-md border border-slate-200 space-y-2 text-sm">
          <p>Currently, the homelab operates primarily on a flat network structure, with most devices residing on the 192.168.1.0/24 subnet.</p>
          <p>An exception is the MacBook Pro's direct 10GbE link to the Main Unraid server, which uses a separate 192.168.13.0/24 subnet for isolated high-speed transfers.</p>
          <p>This flat architecture presents challenges in terms of traffic isolation, security segmentation, and broadcast domain management.</p>
        </div>
      </section>

      <section className="mb-8 bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-3 text-slate-700">Planned VLAN Implementation</h2>
        <div className="bg-slate-50 p-4 rounded-md border border-slate-200 space-y-2 text-sm">
          <p>To address the limitations of the flat network and enhance security and organization, a comprehensive VLAN strategy is planned. OPNsense will manage inter-VLAN routing and firewall policies.</p>
          <p className="font-medium mt-2">The planned VLANs are as follows:</p>
          <div className="overflow-x-auto mt-2">
            <table className="min-w-full w-full bg-white border border-gray-200 text-xs md:text-sm">
              <thead className="bg-slate-100">
                <tr>
                  <th className="py-2 px-3 border-b border-gray-200 text-left font-medium">VLAN ID</th>
                  <th className="py-2 px-3 border-b border-gray-200 text-left font-medium">Purpose</th>
                  <th className="py-2 px-3 border-b border-gray-200 text-left font-medium">Subnet</th>
                  <th className="py-2 px-3 border-b border-gray-200 text-left font-medium">Key Considerations</th>
                </tr>
              </thead>
              <tbody>
                {plannedVlans.map(vlan => (
                  <tr key={vlan.id} className="hover:bg-slate-50">
                    <td className="py-2 px-3 border-b border-gray-200">{vlan.id}</td>
                    <td className="py-2 px-3 border-b border-gray-200">{vlan.purpose}</td>
                    <td className="py-2 px-3 border-b border-gray-200">{vlan.subnet}</td>
                    <td className="py-2 px-3 border-b border-gray-200">
                      {vlan.id === 1 && "Fallback, minimal devices."}
                      {vlan.id === 10 && "Houses Unraid servers, Docker network."}
                      {vlan.id === 20 && "For network device management interfaces (OPNsense, switch, APs)."}
                      {vlan.id === 30 && "Main workstations, trusted personal devices."}
                      {vlan.id === 40 && "Smart home devices, streaming boxes; limited network access."}
                      {vlan.id === 50 && "Isolated internet access for guests."}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3">This segmentation requires a managed switch capable of 802.1Q VLAN tagging, which is part of the planned 10GbE switch upgrade.</p>
        </div>
      </section>
       <section className="mb-8 bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-3 text-slate-700">Routing and DNS</h2>
        <div className="bg-slate-50 p-4 rounded-md border border-slate-200 space-y-2 text-sm">
          <p><strong className="font-medium">OPNsense Layer 3 Routing:</strong> OPNsense will handle all inter-VLAN routing, with firewall rules dictating allowed traffic between segments.</p>
          <p><strong className="font-medium">Unbound DNS:</strong> Will continue to provide DNS resolution for all VLANs, potentially with different filtering policies per VLAN if needed.</p>
        </div>
      </section>
    </div>
  );
};

export default VlansNetworkingDetails;