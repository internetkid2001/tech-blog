
import React, { useState } from 'react';
import { SidebarProvider, Sidebar, SidebarContent, SidebarHeader, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarInset, SidebarGroup, SidebarGroupLabel, SidebarGroupContent } from '@/components/ui/sidebar';
import BlogContent from '../components/BlogContent';
import BlogHeader from '../components/BlogHeader';
import BlogFooter from '../components/BlogFooter';
import { Server, Network, Database, Shield, Code, Laptop, Terminal, Cpu, Cloud, Wifi, Home } from 'lucide-react';

const Index = () => {
  const [currentContent, setCurrentContent] = useState('latest');
  
  const handleMenuClick = (content: string) => {
    setCurrentContent(content);
  };

  return (
    <SidebarProvider defaultOpen={true}>
      <div className="min-h-screen flex w-full bg-white">
        <Sidebar className="w-64 border-r border-gray-100">
          <SidebarHeader className="p-4 border-b border-gray-100">
            <h2 className="text-xl font-bold text-slate-800">My Tech Projects</h2>
          </SidebarHeader>
          <SidebarContent>
            {/* Home Button - Now at the top */}
            <SidebarMenu className="p-2">
              <SidebarMenuItem>
                <SidebarMenuButton onClick={() => handleMenuClick('latest')}>
                  <Home className="h-4 w-4 mr-2" />
                  <span>Home</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
            
            {/* Homelab Section */}
            <SidebarGroup>
              <SidebarGroupLabel>Homelab</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton onClick={() => handleMenuClick('homelab-network')}>
                      <Server className="h-4 w-4 mr-2" />
                      <span>Infrastructure</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <Network className="h-4 w-4 mr-2" />
                      <span>Network Setup</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <Database className="h-4 w-4 mr-2" />
                      <span>Storage Solutions</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <Shield className="h-4 w-4 mr-2" />
                      <span>Security</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <Wifi className="h-4 w-4 mr-2" />
                      <span>VLANs & Networking</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
            
            {/* Software Projects Section */}
            <SidebarGroup>
              <SidebarGroupLabel>Software Projects</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <Code className="h-4 w-4 mr-2" />
                      <span>Web Development</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <Terminal className="h-4 w-4 mr-2" />
                      <span>Automation</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
            
            {/* Other Tech Section */}
            <SidebarGroup>
              <SidebarGroupLabel>Other Tech</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <Cpu className="h-4 w-4 mr-2" />
                      <span>Hardware Projects</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <Cloud className="h-4 w-4 mr-2" />
                      <span>Cloud Services</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
        
        <SidebarInset>
          <BlogHeader />
          <BlogContent currentContent={currentContent} />
          <BlogFooter />
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default Index;
