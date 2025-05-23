// src/lib/blogData.ts

export interface PostData {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  // readTime: string; // Removed readTime
  image: string;
  fullContent: string | JSX.Element;
}

export const posts: PostData[] = [
  {
    slug: "opnsense-firewall-setup",
    title: "My Homelab's Brain: OPNsense Firewall Setup",
    excerpt: "A walkthrough of how I configured OPNsense as the core of my home network, handling DHCP, NAT, Unbound DNS with blocklists, and port forwarding.",
    category: "Networking",
    // readTime: "7 min read", // Removed
    image: "photo-1531297484001-80022131f5a1",
    fullContent: `
      <div class="prose prose-lg max-w-none">
        <p>Configuring a robust firewall is paramount for any homelab, and OPNsense has become the cornerstone of my network. It provides enterprise-level features that allow for granular control over traffic, security, and core network services.</p>
        
        <h2 class="text-2xl font-semibold mt-6 mb-3">Core Configuration:</h2>
        <ul class="list-disc pl-6 space-y-2">
          <li><strong>Gateway & DHCP Server:</strong> OPNsense, running on dedicated hardware, serves as the primary gateway (192.168.1.1) for my network. It manages DHCP for all VLANs (once implemented), ensuring organized IP allocation. Currently, it handles DHCP for the main 192.168.1.0/24 network.</li>
          <li><strong>NAT & Port Forwarding:</strong> Standard NAT rules are in place for internet access. Specific port forwards are configured for services like my Minecraft servers hosted on the Backup Unraid server and other remote access needs.</li>
          <li><strong>Unbound DNS with Blocklists:</strong> I utilize Unbound DNS for local DNS resolution and have integrated blocklists (e.g., for ads and trackers) to enhance privacy and security across the network.</li>
        </ul>

        <h2 class="text-2xl font-semibold mt-6 mb-3">Future Plans: VLANs</h2>
        <p>While not yet implemented, VLANs are a high priority. OPNsense will manage inter-VLAN routing and firewall rules to segment traffic for servers, trusted clients, IoT devices, and guests, significantly improving security and network organization.</p>
        
        <p>This setup provides a stable and secure foundation for all homelab activities, from media streaming to critical video editing workflows and various experiments.</p>
      </div>
    `
  },
  {
    slug: "docker-on-unraid-deep-dive",
    title: "Orchestrating My Digital Life: Docker on Unraid",
    excerpt: "Exploring my extensive Docker setup on the Main Unraid server, hosting everything from media (Plex, Jellyfin) and photo management (Immich) to development tools (code-server) and network utilities.",
    category: "Virtualization",
    // readTime: "10 min read", // Removed
    image: "photo-1488590528505-98d2b5aba04b",
    fullContent: `
      <div class="prose prose-lg max-w-none">
        <p>My Main Unraid server is the workhorse of my homelab, and Docker is at the heart of its service delivery. Leveraging Unraid's user-friendly Docker management and Community Applications plugin, I host a wide array of services.</p>

        <h2 class="text-2xl font-semibold mt-6 mb-3">Key Active Docker Containers:</h2>
        <p>This list focuses on currently active and essential services:</p>
        <ul class="list-disc pl-6 space-y-2 columns-2">
          <li><strong>Media Streaming & Management:</strong> binhex-jellyfin, Plex, Komga, Tautulli (Plex monitoring).</li>
          <li><strong>Photo Management:</strong> Immich (self-hosted photos/videos), PostgreSQL_Immich (database), Redis (caching for Immich), icloudpd (iCloud photo sync).</li>
          <li><strong>Network Utilities & Remote Access:</strong> Cloudflare-DDNS, CloudflaredTunnel (secure tunnels), duckdns, SWAG (reverse proxy & SSL).</li>
          <li><strong>Development & File Management:</strong> code-server (VS Code in browser), Krusader (file manager).</li>
          <li><strong>Download Management:</strong> nzbget (Usenet downloader).</li>
          <li><strong>System Utilities:</strong> MySpeed (network speed testing).</li>
        </ul>
        <p class="mt-3"><em>Several other containers for specific tasks like qBittorrentVPN, Sonarr, HandBrake, etc., are installed but currently stopped to conserve resources or because their use is project-specific.</em></p>

        <h2 class="text-2xl font-semibold mt-6 mb-3">Virtual Machines:</h2>
        <p>Alongside Docker, I run a Pop!_OS Linux desktop VM for testing, development, and isolating specific workloads from the main Unraid OS.</p>

        <p>This combination of Docker and VMs on Unraid provides incredible flexibility, allowing me to self-host a diverse range of applications efficiently and manage them with ease.</p>
      </div>
    `
  },
  {
    slug: "10gbe-homelab-journey",
    title: "The Road to 10GbE: Current Network & Future Upgrades",
    excerpt: "Detailing my current 10GbE setup using manual patching for high-speed access between servers and workstations, and outlining the planned upgrade to a dedicated 10GbE switch and VLAN implementation.",
    category: "Infrastructure",
    // readTime: "6 min read", // Removed
    image: "photo-1461749280684-dccba630e2f6",
    fullContent: `
      <div class="prose prose-lg max-w-none">
        <p>High-speed networking is crucial for my video editing workflows and large file transfers between my Unraid servers, MacBook Pro, and Gaming PC. While I have 10GbE capabilities on these key devices, the current implementation has its limitations.</p>

        <h2 class="text-2xl font-semibold mt-6 mb-3">Current 10GbE Setup:</h2>
        <ul class="list-disc pl-6 space-y-2">
          <li><strong>Devices with 10GbE:</strong> Main Unraid (192.168.1.144), Backup Unraid (192.168.1.248), MacBook Pro (via Sabrent Thunderbolt adapter, 192.168.13.143 for direct link), Gaming PC (192.168.1.236).</li>
          <li><strong>Connectivity:</strong> Due to the lack of a 10GbE switch, connections are made by manually patching SFP+ or Ethernet cables between devices as needed. This is functional but inefficient.</li>
          <li><strong>MacBook Pro Direct Link:</strong> The MacBook Pro often uses a dedicated 192.168.13.0/24 subnet for direct 10GbE connection to the Main Unraid server to maximize transfer speeds for video editing projects, bypassing the 1GbE unmanaged switch.</li>
        </ul>

        <h2 class="text-2xl font-semibold mt-6 mb-3">Challenges & Planned Upgrade:</h2>
        <p>The primary challenge is the manual patching, which is cumbersome and doesn't allow for simultaneous 10GbE access between multiple devices and a server.</p>
        <p><strong>The Plan:</strong></p>
        <ol class="list-decimal pl-6 space-y-2">
          <li><strong>Purchase a 10GbE Switch:</strong> This is the top priority. A switch with sufficient SFP+ and/or 10GBASE-T ports will allow all 10GbE capable devices to be interconnected simultaneously.</li>
          <li><strong>Implement VLANs:</strong> Once the switch is in place, I will proceed with the VLAN segmentation plan (Servers on VLAN 10, Trusted Clients on VLAN 30, etc.). This will segregate traffic, improve security, and allow for better network management through OPNsense.</li>
        </ol>
        <p>This upgrade will transform the high-speed networking aspect of my lab from a manual workaround to a truly integrated and efficient system.</p>
      </div>
    `
  },
  {
    slug: "ups-monitoring-unraid",
    title: "Powering Through Outages: UPS Monitoring with Unraid",
    excerpt: "How I've set up my APC UPS with the Main Unraid server using apcupsd for power monitoring and graceful shutdown, ensuring data integrity during power events.",
    category: "Homelab",
    // readTime: "5 min read", // Removed
    image: "photo-1518770660439-4636190af475",
    fullContent: `
      <div class="prose prose-lg max-w-none">
        <p>Power resilience is a critical aspect of maintaining a reliable homelab, especially when hosting important data and services. My Main Unraid server ("moneymaker") is connected to an APC UPS to protect against power outages and fluctuations.</p>

        <h2 class="text-2xl font-semibold mt-6 mb-3">Setup Details:</h2>
        <ul class="list-disc pl-6 space-y-2">
          <li><strong>Hardware:</strong> An APC UPS unit is connected directly to the Main Unraid server via USB.</li>
          <li><strong>Software:</strong> Unraid utilizes the 'apcupsd' package (Slackware's APC UPS Daemon) for communication and monitoring. This is often managed via the "UPS Settings" within Unraid's interface or a community plugin.</li>
          <li><strong>Configuration:</strong>
            <ul class="list-disc pl-6 mt-1">
                <li>Battery Charge Threshold for Shutdown: 20%</li>
                <li>Minimum Minutes of Runtime Remaining for Shutdown: 15 minutes</li>
            </ul>
            These settings ensure that if the power goes out, the server has enough time to perform a graceful shutdown once the UPS battery reaches a critical level, preventing data corruption.
          </li>
        </ul>

        <h2 class="text-2xl font-semibold mt-6 mb-3">Monitoring and Status:</h2>
        <p>The UPS status can be monitored through Unraid's interface and logs. Regular checks are important to ensure the monitoring is active.</p>
        <p>This setup provides peace of mind, knowing that my primary server and its valuable data are protected from unexpected power interruptions.</p>
      </div>
    `
  }
];