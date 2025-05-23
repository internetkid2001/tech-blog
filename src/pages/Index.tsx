// src/pages/Index.tsx
import React, { useState } from 'react';
import { SidebarProvider, Sidebar, SidebarContent, SidebarHeader, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarInset, SidebarGroup, SidebarGroupLabel, SidebarGroupContent } from '@/components/ui/sidebar';
import BlogContent from '../components/BlogContent';
import BlogHeader from '../components/BlogHeader';
import BlogFooter from '../components/BlogFooter';
import { Server, Network, Database, Shield, Code, Laptop, Terminal, Cpu, Cloud, Wifi, Home, Route } from 'lucide-react'; // Added Route for VLANs

const Index = () => {
  // Added new states: 'network-setup', 'storage-solutions', 'security', 'vlans-networking'
  // 'homelab-network' maps to "Infrastructure"
  const [currentContent, setCurrentContent] = useState('latest'); 

  const handleMenuClick = (content: string) => {
    setCurrentContent(content);
  };

  return (
    <SidebarProvider defaultOpen={true}>
      <div className="min-h-screen flex w-full bg-white">
        <Sidebar className="w-64 border-r border-gray-100">
          <SidebarHeader className="p-4 border-b border-gray-100">
            <h2 className="text-xl font-bold text-slate-800">Tech Blog</h2>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu className="p-2">
              <SidebarMenuItem>
                <SidebarMenuButton onClick={() => handleMenuClick('latest')}>
                  <Home className="h-4 w-4 mr-2" />
                  <span>Home / Latest</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>

            <SidebarGroup>
              <SidebarGroupLabel>Homelab</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton onClick={() => handleMenuClick('homelab-network')}> {/* This is Infrastructure */}
                      <Server className="h-4 w-4 mr-2" />
                      <span>Infrastructure</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton onClick={() => handleMenuClick('network-setup')}>
                      <Network className="h-4 w-4 mr-2" />
                      <span>Network Setup</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton onClick={() => handleMenuClick('storage-solutions')}>
                      <Database className="h-4 w-4 mr-2" />
                      <span>Storage Solutions</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton onClick={() => handleMenuClick('security')}>
                      <Shield className="h-4 w-4 mr-2" />
                      <span>Security</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton onClick={() => handleMenuClick('vlans-networking')}>
                      <Route className="h-4 w-4 mr-2" /> {/* Changed Wifi to Route for VLANs icon */}
                      <span>VLANs & Networking</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            {/* Software Projects Section (remains unchanged for now) */}
            <SidebarGroup>
              <SidebarGroupLabel>Software Projects</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton onClick={() => handleMenuClick('web-development')}>
                      <Code className="h-4 w-4 mr-2" />
                      <span>Web Development</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton onClick={() => handleMenuClick('automation')}>
                      <Terminal className="h-4 w-4 mr-2" />
                      <span>Automation</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            {/* Other Tech Section (remains unchanged for now) */}
            <SidebarGroup>
              <SidebarGroupLabel>Other Tech</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton onClick={() => handleMenuClick('hardware-projects')}>
                      <Cpu className="h-4 w-4 mr-2" />
                      <span>Hardware Projects</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton onClick={() => handleMenuClick('cloud-services')}>
                      <Cloud className="h-4 w-4 mr-2" />
                      <span>Cloud Services</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>

        <SidebarInset className="flex-1 flex flex-col">
          <BlogHeader />
          <div className="flex-grow overflow-y-auto"> {/* Added for scrolling long content */}
            <BlogContent currentContent={currentContent} />
          </div>
          <BlogFooter />
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default Index;