// src/components/HomelabNetwork.tsx
import React from 'react';

const HomelabNetwork = () => {
  // Data extracted from Home_Lab_Master_Documentation_2025_UPDATED.txt
  const networkOverview = {
    description: "I designed and maintain an enterprise-grade home lab simulating real-world IT infrastructure. This environment supports virtualization, media streaming, video editing workflows, and networking experimentation.", //
    keyTechnologies: "OPNsense firewall, Unraid virtualization, VLAN planning, 10GbE networking, power resilience with UPS monitoring.", //
  };

  const currentNetwork = {
    isp: "Astound Broadband (1 Gbps down)", //
    router: "OPNsense (192.168.1.1)", //
    switch: "1GbE Unmanaged", //
    devices: [
      { name: "Main Unraid", ip: "192.168.1.144 (10GbE)" }, //
      { name: "Backup Unraid", ip: "192.168.1.248 (10GbE)" }, //
      { name: "MacBook Pro", ip: "192.168.1.223 (LAN), 192.168.13.143 (10GbE direct)" }, //
      { name: "Gaming PC", ip: "192.168.1.236 (10GbE)" }, //
      { name: "UniFi Nano HD AP", ip: "192.168.1.227" }, //
      { name: "AC1750 AP", ip: "IP unknown" }, //
      { name: "TCL Google TV", ip: "192.168.1.232" }, //
    ],
    connectivity: "Manual patching between devices (switch planned for future upgrade)." //
  };

  const firewallRouting = {
    features: [
      "DHCP, NAT, Unbound DNS with blocklists", //
      "NAT Port Forwards for Minecraft servers and remote services", //
      "VLANs: Not yet implemented" //
    ]
  };

  const powerUps = {
    description: "Main Unraid (\"moneymaker\") connected to APC UPS (USB driver).", //
    settings: "Battery threshold set to 20%, minimum runtime 15 minutes.", //
    status: "Latest status: COMMLOST (likely disconnection or shutdown event logged).", //
    // UPS Status Log is lengthy and detailed, summarizing for brevity.
    // Consider a link to a more detailed log or a collapsible section if needed.
    logSummary: "APC UPS log indicates COMMLOST as of 2025-05-02. Monitored via apcupsd on 'moneymaker'." // Derived from
  };

  const knownChallenges = [
    "Limited 10GbE ports requiring manual patching.", //
    "Flat network (all devices on 192.168.1.0/24 except MacBook’s manual 10GbE IP)." //
  ];

  const plannedVlans = [
    { id: 1, purpose: "Default LAN", subnet: "192.168.1.0/24" }, //
    { id: 10, purpose: "Servers", subnet: "192.168.10.0/24" }, //
    { id: 20, purpose: "Management", subnet: "192.168.20.0/24" }, //
    { id: 30, purpose: "Trusted Clients", subnet: "192.168.30.0/24" }, //
    { id: 40, purpose: "IoT / Media", subnet: "192.168.40.0/24" }, //
    { id: 50, purpose: "Guest WiFi", subnet: "192.168.50.0/24" } //
  ];

  const plannedUpgrade = "Purchase a 10GbE switch, eliminate manual patching, implement VLANs for improved performance and security."; //

  const skillsDemonstrated = [
    "VLAN segmentation & firewalling (planned)", //
    "OPNsense Layer 3 routing", //
    "Unraid virtualization & Docker", //
    "Dynamic/static IP schema design", //
    "Performance tuning for 10GbE", //
    "UPS monitoring & power resilience", //
    "Real-world troubleshooting (NIC bonding issue previously resolved)" //
  ];

  const services = {
    mainUnraid: {
      hardware: "ASRock Z690 Pro RS, Intel Core i5-12600K, 16GB RAM, 10GbE SFP+ NIC", // (Part 2)
      dockerContainers: [
        "binhex-jellyfin", "Cloudflare-DDNS", "CloudflaredTunnel", "code-server", //
        "duckdns", "immich", "Krusader", "MySpeed", "nzbget", //
        "PostgreSQL_Immich", "Redis", "tautulli", "Komga", "plex", "icloudpd", "swag", //
        // Stopped containers omitted for brevity: binhex-qbittorrentvpn, binhex-sonarr, chromium, FMD2-wine, HandBrake, kapowarr, luckyBackup, pingvin-share, wrapperr, youtube-dl-server
      ],
      virtualMachines: ["Pop!_OS (Linux desktop VM for testing/development)"] //
    },
    backupUnraid: {
      hardware: "Dell R720xd, Dual Xeon E5-2660v2 (20 cores total), 128GB RAM, 10GbE Daughter Card, RX 6600 GPU", // (Part 2)
      dockerContainers: [
        "binhex-krusader", "IPMI-Tools", //
        // Stopped: All-The-Mods-9, binhex-crafty-4
      ],
      virtualMachines: ["Windows 11 (stopped)"] //
    }
  };


  return (
    <div className="max-w-4xl mx-auto p-4 text-gray-800">
      <h1 className="text-4xl font-bold mb-8 text-center text-slate-900">Home Lab Enterprise Network Build (2025)</h1>
      
      <section className="mb-10 bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4 border-b pb-2 text-slate-700">Part 1: Network Overview</h2>
        
        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2 text-slate-600">Overview</h3>
          <p className="text-gray-700 leading-relaxed">
            {networkOverview.description}
          </p>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2 text-slate-600">Key Technologies</h3>
          <p className="text-gray-700 leading-relaxed">
            {networkOverview.keyTechnologies}
          </p>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2 text-slate-600">Current Network</h3>
          <div className="bg-slate-50 p-4 rounded-md border border-slate-200">
            <p className="mb-1"><strong className="font-medium">ISP:</strong> {currentNetwork.isp}</p>
            <p className="mb-1"><strong className="font-medium">Router:</strong> {currentNetwork.router}</p>
            <p className="mb-3"><strong className="font-medium">Switch:</strong> {currentNetwork.switch}</p>
            
            <h4 className="font-medium mt-3 mb-2 text-slate-600">Devices & IPs:</h4>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              {currentNetwork.devices.map(device => (
                <li key={device.name}><strong className="font-medium">{device.name}:</strong> {device.ip}</li>
              ))}
            </ul>
            
            <h4 className="font-medium mt-3 mb-2 text-slate-600">10GbE Connectivity:</h4>
            <p className="text-sm">{currentNetwork.connectivity}</p>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2 text-slate-600">Firewall & Routing (OPNsense)</h3>
          <div className="bg-slate-50 p-4 rounded-md border border-slate-200">
            <ul className="list-disc pl-5 space-y-1 text-sm">
              {firewallRouting.features.map(feature => <li key={feature}>{feature}</li>)}
            </ul>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2 text-slate-600">Power & UPS Monitoring</h3>
          <div className="bg-slate-50 p-4 rounded-md border border-slate-200">
            <p className="mb-1 text-sm">{powerUps.description}</p>
            <p className="mb-1 text-sm">{powerUps.settings}</p>
            <p className="mb-1 text-sm">{powerUps.status}</p>
            <p className="text-sm mt-2 italic">{powerUps.logSummary}</p>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2 text-slate-600">Known Challenges</h3>
          <div className="bg-slate-50 p-4 rounded-md border border-slate-200">
            <ul className="list-disc pl-5 space-y-1 text-sm">
              {knownChallenges.map(challenge => <li key={challenge}>{challenge}</li>)}
            </ul>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2 text-slate-600">Planned VLANs</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full w-full bg-white border border-gray-200 text-sm">
              <thead className="bg-slate-100">
                <tr>
                  <th className="py-2 px-4 border-b border-gray-200 text-left font-medium">VLAN ID</th>
                  <th className="py-2 px-4 border-b border-gray-200 text-left font-medium">Purpose</th>
                  <th className="py-2 px-4 border-b border-gray-200 text-left font-medium">Subnet</th>
                </tr>
              </thead>
              <tbody>
                {plannedVlans.map(vlan => (
                  <tr key={vlan.id} className="hover:bg-slate-50">
                    <td className="py-2 px-4 border-b border-gray-200">{vlan.id}</td>
                    <td className="py-2 px-4 border-b border-gray-200">{vlan.purpose}</td>
                    <td className="py-2 px-4 border-b border-gray-200">{vlan.subnet}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2 text-slate-600">Planned Upgrade</h3>
           <div className="bg-slate-50 p-4 rounded-md border border-slate-200">
            <p className="text-gray-700 leading-relaxed text-sm">{plannedUpgrade}</p>
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-medium mb-2 text-slate-600">Skills Demonstrated</h3>
          <div className="bg-slate-50 p-4 rounded-md border border-slate-200">
            <ul className="list-disc pl-5 space-y-1 text-sm">
              {skillsDemonstrated.map(skill => <li key={skill}>{skill}</li>)}
            </ul>
          </div>
        </div>
      </section>
      
      <section className="mb-10 bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4 border-b pb-2 text-slate-700">Part 2: Homelab Services & Workloads</h2>
        
        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2 text-slate-600">Main Unraid Server (192.168.1.144)</h3>
          <div className="bg-slate-50 p-4 rounded-md border border-slate-200 text-sm">
            <p className="mb-2 "><strong className="font-medium">Hardware:</strong> {services.mainUnraid.hardware}</p>
            <h4 className="font-medium mt-3 mb-1 text-slate-600">Active Docker Containers:</h4>
            <ul className="list-disc pl-5 space-y-0.5 text-xs columns-2 sm:columns-3">
              {services.mainUnraid.dockerContainers.map(container => <li key={container}>{container}</li>)}
            </ul>
            <h4 className="font-medium mt-3 mb-1 text-slate-600">Virtual Machines:</h4>
            <ul className="list-disc pl-5 space-y-0.5">
              {services.mainUnraid.virtualMachines.map(vm => <li key={vm}>{vm}</li>)}
            </ul>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2 text-slate-600">Backup Unraid Server (192.168.1.248)</h3>
          <div className="bg-slate-50 p-4 rounded-md border border-slate-200 text-sm">
            <p className="mb-2"><strong className="font-medium">Hardware:</strong> {services.backupUnraid.hardware}</p>
            <h4 className="font-medium mt-3 mb-1 text-slate-600">Docker Containers:</h4>
            <ul className="list-disc pl-5 space-y-0.5">
              {services.backupUnraid.dockerContainers.map(container => <li key={container}>{container}</li>)}
            </ul>
            <h4 className="font-medium mt-3 mb-1 text-slate-600">Virtual Machines:</h4>
            <ul className="list-disc pl-5 space-y-0.5">
               {services.backupUnraid.virtualMachines.map(vm => <li key={vm}>{vm}</li>)}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomelabNetwork;