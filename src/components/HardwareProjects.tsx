// src/components/HardwareProjects.tsx
import React from 'react';

const hardwareProjects = [
  {
    id: "main-unraid-server",
    name: "Main Unraid Server (Production)",
    ipAddress: "192.168.1.144",
    details: [
      { label: "Motherboard", value: "ASRock Z690 Pro RS" },
      { label: "BIOS", value: "American Megatrends International, LLC. Version 12.07 (Nov 17, 2022)" },
      { label: "CPU", value: "12th Gen Intel® Core™ i5-12600K @ 3.66 GHz" },
      { label: "RAM", value: "16 GiB DDR4" },
      { label: "Network", value: "10GbE SFP+ NIC" },
    ],
    roles: [
      "Primary production server for critical services and homelab management.",
      "Hosts the main portfolio site, various developer tools, and numerous Docker services.",
      "Supports virtualization for multiple operating systems including Fedora, Pop!_OS, and Windows 11.",
      "Serves as the central hub for media (Plex, Jellyfin, Komga) and photo management (Immich).",
      "Runs development tools like code-server (VS Code in browser) and Streamlit dashboards.",
      "Integrates with GitHub Actions for automated Firebase deployments.",
      "Core component of the 10GbE high-speed network segment."
    ],
    dockerServices: [
      "binhex-jellyfin", "Plex", "Komga (manga/comic server)", "Immich (self-hosted photos/videos)", "PostgreSQL_Immich", "Redis (Immich caching)", "icloudpd (iCloud photo sync)",
      "Cloudflare-DDNS", "CloudflaredTunnel (secure tunnels)", "duckdns", "SWAG (reverse proxy & SSL)",
      "code-server (VS Code in browser)", "Krusader (file manager)",
      "nzbget (Usenet downloader)",
      "Tautulli (Plex monitoring)", "MySpeed (network speed testing)",
    ],
    virtualMachines: [
      "Pop!_OS Linux (Desktop VM for testing/development)",
      "Fedora (VM)",
      "Windows 11 (VM)"
    ],
    storageSummary: "Utilizes Unraid's flexible array with ~62TB total capacity (single parity), plus multiple cache pools (SSD & NVMe) for performance optimization including a dedicated 2TB NVMe ZFS pool for video editing and an 8TB NVMe BTRFS pool for 'Vista' projects."
  },
  {
    id: "backup-unraid-server",
    name: "Backup Unraid Server (Redundancy)",
    ipAddress: "192.168.1.248",
    details: [
      { label: "Model", value: "Dell PowerEdge R720xd" },
      { label: "Motherboard", value: "Dell Inc. 0C4Y3R Version A02" },
      { label: "BIOS", value: "Dell Inc. Version 2.9.0 (Dec 6, 2019)" },
      { label: "CPU", value: "Dual Intel Xeon E5-2660 v2 @ 2.20GHz (20 cores total)" },
      { label: "RAM", value: "128 GiB DDR3 ECC" },
      { label: "GPU", value: "AMD RX 6600 (for transcoding or VM passthrough)" },
      { label: "Network", value: "10GbE Daughter Card" },
      { label: "UPS", value: "Connected via USB (USB UPS Driver)" }
    ],
    roles: [
      "Primary backup destination for critical data from the Main Unraid Server.",
      "Hosts a mirrored or secondary set of essential Docker containers for redundancy.",
      "Serves as a platform for testing new services and configurations before production deployment.",
      "Stores game server files (e.g., All-The-Mods-9 Minecraft server) and other experimental data.",
      "Provides offline backup capabilities and disaster recovery support."
    ],
    dockerServices: [
      "binhex-krusader", "IPMI-Tools",
    ],
    virtualMachines: [
      "Windows 11 (stopped)"
    ],
    storageSummary: "Provides secondary storage capabilities, primarily for backups of media and system data from the Main Unraid server. Specific drive configuration not detailed but focuses on redundancy."
  },
  {
    id: "opnsense-firewall",
    name: "OPNsense Firewall Router",
    ipAddress: "192.168.1.1 (Gateway)", // Assuming standard gateway IP
    details: [
      { label: "Hardware Model", value: "Dell Optiplex 7010" },
      { label: "CPU", value: "Intel(R) Core(TM) i5-3570 CPU @ 3.40GHz (4 cores, 4 threads)" },
      { label: "RAM", value: "16 GB" }, // Converted from 16232 MB
      { label: "OPNsense Version", value: "24.1.10_8-amd64" },
      { label: "Operating System", value: "FreeBSD 13.2-RELEASE-p11" },
      { label: "SSL Version", value: "OpenSSL 3.0.14" }
    ],
    roles: [
      "Primary network gateway and firewall for the homelab.",
      "Manages DHCP, NAT, and DNS (Unbound DNS with blocklists).",
      "Handles inter-VLAN routing and enforces security policies between network segments (planned).",
      "Provides secure remote access capabilities via port forwarding and VPN (if configured).",
      "Monitors and controls network traffic, enhancing overall network security."
    ],
    dockerServices: [], // Not applicable for a dedicated firewall typically
    virtualMachines: [], // Not applicable
    storageSummary: "Utilizes the internal storage of the Dell Optiplex 7010 for OPNsense OS and configuration."
  }
];

const HardwareProjects = () => {
  return (
    <div className="max-w-4xl mx-auto p-4 text-gray-800">
      <h1 className="text-3xl font-bold mb-8 text-slate-900 text-center">Homelab Hardware Projects</h1>
      
      <div className="space-y-12">
        {hardwareProjects.map((project) => (
          <section key={project.id} className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-semibold mb-1 text-slate-800">{project.name}</h2>
            {project.ipAddress && <p className="text-sm text-gray-500 mb-4">IP Address: {project.ipAddress}</p>}
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold mt-4 mb-2 text-slate-700">Hardware & Software Specifications:</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                {project.details.map(detail => (
                  <li key={detail.label}><strong className="font-medium">{detail.label}:</strong> {detail.value}</li>
                ))}
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mt-4 mb-2 text-slate-700">Roles & Responsibilities:</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                {project.roles.map((role, idx) => (
                  <li key={idx}>{role}</li>
                ))}
              </ul>
            </div>
            
            {project.dockerServices && project.dockerServices.length > 0 && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold mt-4 mb-2 text-slate-700">Key Docker Services:</h3>
                <ul className="list-disc pl-5 space-y-0.5 text-xs columns-2 sm:columns-3">
                  {project.dockerServices.map((service, idx) => (
                    <li key={idx}>{service}</li>
                  ))}
                </ul>
              </div>
            )}

            {project.virtualMachines && project.virtualMachines.length > 0 && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold mt-4 mb-2 text-slate-700">Virtual Machines:</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                  {project.virtualMachines.map((vm, idx) => (
                    <li key={idx}>{vm}</li>
                  ))}
                </ul>
              </div>
            )}
             {project.storageSummary && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold mt-4 mb-2 text-slate-700">Storage Summary:</h3>
                <p className="text-sm text-gray-700">{project.storageSummary}</p>
              </div>
            )}
          </section>
        ))}
      </div>
    </div>
  );
};

export default HardwareProjects;