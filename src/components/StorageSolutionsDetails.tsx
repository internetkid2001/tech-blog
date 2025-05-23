// src/components/StorageSolutionsDetails.tsx
import React from 'react';

const StorageSolutionsDetails = () => {
  const mainUnraidArray = {
    totalSize: "62 TB",
    totalUsed: "52.8 TB",
    totalFree: "9.23 TB",
    parityDrives: [
      // Corrected to show only one parity drive based on your input
      { name: "Parity Drive", identification: "ST12000NM0007-2GR116_ZJV5C39A (sdc)", size: "12 TB" } 
    ],
    dataDrives: [
      { name: "Disk 1", identification: "HUS726060AL5210_N4H0Z9GX", size: "6 TB" },
      { name: "Disk 2", identification: "ST6000NM0034_SAD0A30A", size: "6 TB" },
      { name: "Disk 3", identification: "ST6000NM0034_S01S0REB", size: "6 TB" },
      { name: "Disk 4", identification: "WDC_WD60EFZX-68B7XN0_WD-CA30K3ZK", size: "6 TB" },
      { name: "Disk 5", identification: "ST8000NM0205-2FF112_ZALCCFL4", size: "8 TB" },
      { name: "Disk 6", identification: "ST8000NM0205-2FF112_ZALCCGJD", size: "8 TB" },
      { name: "Disk 7", identification: "ST12000NM0007-2GR116_ZJV5A1YQ", size: "12 TB" }, // This was listed as 'Disk 7 (udf)' in screenshot
      { name: "Disk 8", identification: "ST8000NM0084-3CP101_MMZLCST", size: "8 TB" },
    ]
  };

  const mainUnraidPools = [
    { name: "Cache", device: "Samsung_SSD_870_EVO_1TB", size: "1 TB", fs: "btrfs", used: "643 GB", free: "355 GB", purpose: "General cache for frequently accessed data and appdata." },
    { name: "Editing", device: "SPCC_M.2_PCIe_SSD_19121680804", size: "2 TB", fs: "zfs (nvme1n1)", used: "892 GB", free: "1.09 TB", purpose: "High-speed NVMe storage for active video editing projects." },
    { name: "Vista", device: "WD_BLACK_SN850X_800GB_243723800326", size: "8 TB", fs: "btrfs (nvme0...)", used: "6.22 TB", free: "1.78 TB", purpose: "High-capacity, high-speed NVMe storage." }
  ];
  
  const bootDevice = {
    name: "Flash",
    identification: "Cruzer_Glide",
    size: "15.4 GB",
    fs: "vfat",
    used: "1.68 GB",
    free: "13.7 GB"
  };

  return (
    <div className="max-w-4xl mx-auto p-4 text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-slate-900">Storage Solutions</h1>

      <section className="mb-8 bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-3 text-slate-700">Main Unraid Server (192.168.1.144) - Primary Storage Hub</h2>
        <div className="bg-slate-50 p-4 rounded-md border border-slate-200 space-y-2 text-sm">
          <p>The Main Unraid server is the central Network Attached Storage (NAS) and primary storage workhorse for the homelab. It utilizes Unraid's flexible array technology with single parity for data protection and pooling various drives.</p>
          
          <h3 className="text-lg font-semibold mt-4 mb-2 text-slate-600">Array Configuration (Total: {mainUnraidArray.totalSize} | Used: {mainUnraidArray.totalUsed} | Free: {mainUnraidArray.totalFree})</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full w-full bg-white text-xs">
              <thead className="bg-slate-200">
                <tr>
                  <th className="p-2 text-left">Role</th>
                  <th className="p-2 text-left">Identification</th>
                  <th className="p-2 text-left">Size</th>
                </tr>
              </thead>
              <tbody>
                {mainUnraidArray.parityDrives.map(drive => (
                  <tr key={drive.name} className="border-b border-slate-100">
                    <td className="p-2 font-medium">{drive.name}</td>
                    <td className="p-2">{drive.identification}</td>
                    <td className="p-2">{drive.size}</td>
                  </tr>
                ))}
                {mainUnraidArray.dataDrives.map(drive => (
                  <tr key={drive.name} className="border-b border-slate-100">
                    <td className="p-2 font-medium">{drive.name}</td>
                    <td className="p-2">{drive.identification}</td>
                    <td className="p-2">{drive.size}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="text-lg font-semibold mt-4 mb-2 text-slate-600">Pool Devices (Cache & High-Speed Tiers)</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full w-full bg-white text-xs">
              <thead className="bg-slate-200">
                <tr>
                  <th className="p-2 text-left">Pool Name</th>
                  <th className="p-2 text-left">Device Identification</th>
                  <th className="p-2 text-left">Size</th>
                  <th className="p-2 text-left">FS</th>
                  <th className="p-2 text-left">Used</th>
                  <th className="p-2 text-left">Free</th>
                  <th className="p-2 text-left">Purpose</th>
                </tr>
              </thead>
              <tbody>
                {mainUnraidPools.map(pool => (
                  <tr key={pool.name} className="border-b border-slate-100">
                    <td className="p-2 font-medium">{pool.name}</td>
                    <td className="p-2">{pool.device}</td>
                    <td className="p-2">{pool.size}</td>
                    <td className="p-2">{pool.fs}</td>
                    <td className="p-2">{pool.used}</td>
                    <td className="p-2">{pool.free}</td>
                    <td className="p-2">{pool.purpose}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="text-lg font-semibold mt-4 mb-2 text-slate-600">Boot Device</h3>
          <p>{bootDevice.name}: {bootDevice.identification} ({bootDevice.size}, {bootDevice.fs}) - Used: {bootDevice.used}, Free: {bootDevice.free}</p>
          
          <p className="mt-3"><strong className="font-medium">Key Storage Roles Fulfilled by Main Server:</strong></p>
          <ul className="list-disc pl-5 mt-1">
            <li>Media Server Storage (Plex, Jellyfin)</li>
            <li>Video Editing Data Store (utilizing 10GbE and NVMe pools)</li>
            <li>Docker Application Data (often on cache pools for performance)</li>
            <li>Virtual Machine Disks (e.g., Pop!_OS)</li>
            <li>General Network Shares</li>
          </ul>
          <p className="mt-2"><strong className="font-medium">Underlying Hardware:</strong> ASRock Z690 Pro RS, Intel Core i5-12600K, 16GB RAM.</p>
        </div>
      </section>

      <section className="mb-8 bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-3 text-slate-700">Backup Unraid Server (192.168.1.248) - Redundancy & Secondary Storage</h2>
         <div className="bg-slate-50 p-4 rounded-md border border-slate-200 space-y-2 text-sm">
          <p>The Backup Unraid server (Dell R720xd) plays a crucial role in data redundancy and provides secondary storage capabilities. Specific drive configuration for this server is not detailed in the provided screenshot but it serves key backup functions.</p>
           <p><strong className="font-medium">Key Storage Roles:</strong></p>
          <ul className="list-disc pl-5 mt-1">
            <li>Primary destination for backups of media and system data from the Main Unraid server.</li>
            <li>Storage for game server files (e.g., All-The-Mods-9 Minecraft server) and other experimental data.</li>
          </ul>
        </div>
      </section>

      <section className="mb-8 bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-3 text-slate-700">Data Management Strategy</h2>
        <div className="bg-slate-50 p-4 rounded-md border border-slate-200 space-y-2 text-sm">
          <p>A primary/backup server design is a key capability of the homelab.</p>
          <p>This approach ensures data redundancy and allows for separation of critical services and backup operations, enhancing overall data safety and availability.</p>
        </div>
      </section>
    </div>
  );
};

export default StorageSolutionsDetails;