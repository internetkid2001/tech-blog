// src/components/SelfHostedApplications.tsx
import React from 'react';

const selfHostedApplications = [
  {
    name: "Krusader",
    // status: "Started", // Removed
    description: "An advanced twin-panel file manager (Midnight Commander style) for KDE and other desktops.",
    category: "File Management, Utility"
  },
  {
    name: "luckyBackup",
    // status: "Stopped", // Removed
    description: "A powerful backup and sync tool based on rsync.",
    category: "Backup, Utility"
  },
  {
    name: "MySpeed",
    // status: "Started", // Removed
    description: "A self-hosted speedtest for your internet connection, similar to Ookla Speedtest or Fast.com.",
    category: "Network Utility, Monitoring"
  },
  {
    name: "nzbget",
    // status: "Started", // Removed
    description: "A popular Usenet downloader for NZB files.",
    category: "Download Management"
  },
  {
    name: "pingvin-share",
    // status: "Stopped", // Removed
    description: "A self-hosted file sharing platform with link sharing and protection features.",
    category: "File Sharing"
  },
  {
    name: "plex",
    // status: "Started", // Removed
    description: "A media server application to organize and stream your personal video, music, and photo collections.",
    category: "Media Server, Streaming"
  },
  {
    name: "PostgreSQL_Immich",
    // status: "Started", // Removed
    description: "PostgreSQL database instance, likely serving as the backend for Immich.",
    category: "Database, Backend"
  },
  {
    name: "Redis",
    // status: "Started", // Removed
    description: "In-memory data structure store, used as a database, cache, and message broker. Likely used for caching by Immich or other services.",
    category: "Database, Cache"
  },
  {
    name: "firefox",
    // status: "Stopped", // Removed
    description: "A containerized version of the Firefox web browser.",
    category: "Utility, Web Browser"
  },
  {
    name: "FMD2-wine",
    // status: "Stopped", // Removed
    description: "FMD2 (Free Manga Downloader) running via Wine in a Docker container.",
    category: "Download Management, Utility"
  },
  {
    name: "HandBrake",
    // status: "Stopped", // Removed
    description: "A tool for converting video from nearly any format to a selection of modern, widely supported codecs.",
    category: "Media Utility, Transcoding"
  },
  {
    name: "icloudpd",
    // status: "Started", // Removed
    description: "A command-line tool to download photos and videos from iCloud.",
    category: "Photo Management, Utility"
  },
  {
    name: "immich",
    // status: "Started", // Removed
    description: "A self-hosted photo and video backup solution directly from your mobile phone.",
    category: "Photo Management, Backup"
  },
  {
    name: "kapowarr",
    // status: "Stopped", // Removed
    description: "A Python-based server that periodically checks for new comics on ReadComicOnline.li and downloads them if available.",
    category: "Download Management, Automation"
  },
  {
    name: "Komga",
    // status: "Started", // Removed
    description: "A media server for your comics, mangas, BDs, and magazines.",
    category: "Media Server, Comics"
  },
  {
    name: "binhex-jellyfin",
    // status: "Stopped", // Removed
    description: "A free software media system that lets you control and manage your media.",
    category: "Media Server, Streaming"
  },
  {
    name: "binhex-qbittorrentvpn",
    // status: "Stopped", // Removed
    description: "qBittorrent torrent client with VPN support, pre-configured for use with a VPN.",
    category: "Download Management, VPN"
  },
  {
    name: "binhex-sonarr",
    // status: "Stopped", // Removed
    description: "A PVR for Usenet and BitTorrent users. It can monitor multiple RSS feeds for new episodes of your favorite shows and will grab, sort and rename them.",
    category: "Download Management, Automation"
  },
  {
    name: "chromium",
    // status: "Stopped", // Removed
    description: "A containerized version of the Chromium web browser.",
    category: "Utility, Web Browser"
  },
  {
    name: "code-server",
    // status: "Started", // Removed
    description: "Run VS Code on any machine anywhere and access it in the browser.",
    category: "Development, Utility"
  }
];

const SelfHostedApplications = () => {
  return (
    <div className="max-w-4xl mx-auto p-4 text-gray-800">
      <h1 className="text-3xl font-bold mb-8 text-slate-900 text-center">Self-Hosted Applications & Utilities</h1>
      <p className="text-center text-gray-600 mb-10">
        A collection of Dockerized applications running on the Unraid server, providing various self-hosted services, media management, development tools, and utilities.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {selfHostedApplications.map((app, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-5 hover:shadow-xl transition-shadow flex flex-col">
            <h2 className="text-lg font-semibold mb-2 text-slate-800">{app.name}</h2>
            {/* <p className="text-xs text-gray-500 mb-2">Status: <span className={`font-medium ${app.status === 'Started' ? 'text-green-500' : 'text-red-500'}`}>{app.status}</span></p> // Removed */}
            <p className="text-sm text-gray-600 mb-3 leading-relaxed flex-grow">{app.description}</p>
            <div className="mt-auto">
              <span className="text-xs font-medium bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full">{app.category}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelfHostedApplications;