
import React from 'react';

const HomelabNetwork = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Home Lab Enterprise Network Build — Master Documentation (2025)</h1>
      
      {/* Part 1: Network Overview */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Part 1: Network Overview</h2>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Overview</h3>
          <p className="text-gray-700">
            I designed and maintain an enterprise-grade home lab simulating real-world IT infrastructure. 
            This environment supports virtualization, media streaming, video editing workflows, and networking experiments.
          </p>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Key Technologies</h3>
          <p className="text-gray-700">
            OPNsense firewall, Unraid virtualization, VLAN planning, high-speed networking, UPS monitoring.
          </p>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Current Network</h3>
          <div className="bg-gray-50 p-4 rounded-md">
            <p className="mb-2">ISP: [REDACTED]</p>
            <p className="mb-2">Router: OPNsense (internal)</p>
            <p className="mb-2">Switch: Unmanaged (1GbE)</p>
            
            <h4 className="font-medium mt-4 mb-2">Devices & Roles:</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Main Unraid Server (10GbE)</li>
              <li>Backup Unraid Server (10GbE)</li>
              <li>MacBook Pro (LAN & direct 10GbE link)</li>
              <li>Gaming PC (10GbE)</li>
              <li>Wireless Access Points</li>
              <li>Media Streaming Device</li>
            </ul>
            
            <h4 className="font-medium mt-4 mb-2">Network Connectivity:</h4>
            <p>High-speed links are manually patched between devices; switch upgrade planned.</p>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Firewall & Routing (OPNsense)</h3>
          <div className="bg-gray-50 p-4 rounded-md">
            <ul className="list-disc pl-5 space-y-1">
              <li>DHCP, NAT, Unbound DNS with blocklists</li>
              <li>Port forwards for various services</li>
              <li>VLAN segmentation planned</li>
            </ul>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Power & UPS Monitoring</h3>
          <div className="bg-gray-50 p-4 rounded-md">
            <p className="mb-2">Main Unraid Server connected to UPS via USB.</p>
            <p className="mb-2">Battery threshold set to 20%, minimum runtime approximately 15 minutes.</p>
            <p>Detailed UPS logs have been redacted for privacy.</p>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Known Challenges</h3>
          <div className="bg-gray-50 p-4 rounded-md">
            <ul className="list-disc pl-5 space-y-1">
              <li>Limited high-speed ports requiring manual patching.</li>
              <li>Flat network architecture.</li>
            </ul>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Planned VLANs</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left">VLAN</th>
                  <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left">Purpose</th>
                  <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left">ID</th>
                  <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left">Subnet</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4 border-b border-gray-200">1</td>
                  <td className="py-2 px-4 border-b border-gray-200">Default LAN</td>
                  <td className="py-2 px-4 border-b border-gray-200">1</td>
                  <td className="py-2 px-4 border-b border-gray-200">192.168.1.0/24</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b border-gray-200">10</td>
                  <td className="py-2 px-4 border-b border-gray-200">Servers</td>
                  <td className="py-2 px-4 border-b border-gray-200">10</td>
                  <td className="py-2 px-4 border-b border-gray-200">192.168.10.0/24</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b border-gray-200">20</td>
                  <td className="py-2 px-4 border-b border-gray-200">Management</td>
                  <td className="py-2 px-4 border-b border-gray-200">20</td>
                  <td className="py-2 px-4 border-b border-gray-200">192.168.20.0/24</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b border-gray-200">30</td>
                  <td className="py-2 px-4 border-b border-gray-200">Trusted Clients</td>
                  <td className="py-2 px-4 border-b border-gray-200">30</td>
                  <td className="py-2 px-4 border-b border-gray-200">192.168.30.0/24</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b border-gray-200">40</td>
                  <td className="py-2 px-4 border-b border-gray-200">IoT / Media</td>
                  <td className="py-2 px-4 border-b border-gray-200">40</td>
                  <td className="py-2 px-4 border-b border-gray-200">192.168.40.0/24</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b border-gray-200">50</td>
                  <td className="py-2 px-4 border-b border-gray-200">Guest WiFi</td>
                  <td className="py-2 px-4 border-b border-gray-200">50</td>
                  <td className="py-2 px-4 border-b border-gray-200">192.168.50.0/24</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Upgrade Plan</h3>
          <div className="bg-gray-50 p-4 rounded-md">
            <ul className="list-disc pl-5 space-y-1">
              <li>Deploy a high-speed switch to eliminate manual patching.</li>
              <li>Implement VLANs for enhanced security and performance.</li>
            </ul>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Skills Demonstrated</h3>
          <div className="bg-gray-50 p-4 rounded-md">
            <ul className="list-disc pl-5 space-y-1">
              <li>VLAN planning and firewall configuration</li>
              <li>Layer 3 routing</li>
              <li>Virtualization and containerization</li>
              <li>IP addressing strategy</li>
              <li>High-speed network tuning</li>
              <li>UPS integration and monitoring</li>
              <li>Troubleshooting hardware and network issues</li>
            </ul>
          </div>
        </div>
      </section>
      
      {/* Part 2: Homelab Services & Workloads */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Part 2: Homelab Services & Workloads</h2>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Main Unraid Server</h3>
          <div className="bg-gray-50 p-4 rounded-md">
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Docker Containers:</strong> media server, VPN-enabled downloads, media management, code-server, DNS and VPN services, multimedia tools, databases, caching services, file-sharing utilities.</li>
              <li><strong>Virtual Machines:</strong> Linux desktop VM for testing and development.</li>
            </ul>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Backup Unraid Server</h3>
          <div className="bg-gray-50 p-4 rounded-md">
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Docker Containers:</strong> game servers and management tools.</li>
              <li><strong>Virtual Machines:</strong> Windows 11 (for compatibility testing).</li>
            </ul>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Services by Host</h3>
          <div className="bg-gray-50 p-4 rounded-md">
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Main Unraid:</strong> Primary media, containers, VMs, storage, and monitoring host.</li>
              <li><strong>Backup Unraid:</strong> Secondary services and backup storage.</li>
              <li><strong>MacBook Pro:</strong> Creative workstation.</li>
              <li><strong>Gaming PC:</strong> High-performance gaming and data transfers.</li>
              <li><strong>OPNsense Router:</strong> Network services and security.</li>
              <li><strong>Wireless APs:</strong> Wireless access.</li>
              <li><strong>Media Streaming Device:</strong> Multimedia consumption.</li>
            </ul>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Key Capabilities</h3>
          <div className="bg-gray-50 p-4 rounded-md">
            <ul className="list-disc pl-5 space-y-1">
              <li>Virtualization and container orchestration</li>
              <li>High-speed networking (manual patching; upgrade planned)</li>
              <li>Firewall and routing with DNS filtering</li>
              <li>Power resilience via UPS integration</li>
              <li>Media streaming and game hosting</li>
              <li>Backup and redundancy</li>
              <li>High-throughput file transfers</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomelabNetwork;
