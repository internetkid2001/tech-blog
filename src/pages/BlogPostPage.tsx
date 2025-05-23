// src/pages/BlogPostPage.tsx
import React, { useEffect, useState } from 'react';
import { useParams, Link as RouterLink } from 'react-router-dom';
import { posts, PostData } from '@/lib/blogData';
import BlogHeader from '@/components/BlogHeader';
import BlogFooter from '@/components/BlogFooter';
import NotFound from './NotFound';
import { SidebarProvider, Sidebar, SidebarContent, SidebarHeader, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarInset } from '@/components/ui/sidebar';
import { Home, ArrowLeft } from 'lucide-react';

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<PostData | undefined>(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const foundPost = posts.find(p => p.slug === slug);
    setPost(foundPost);
    setLoading(false);
  }, [slug]);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  if (!post) {
    return <NotFound />;
  }

  return (
    <SidebarProvider defaultOpen={true}>
      <div className="min-h-screen flex w-full bg-white">
        <Sidebar className="w-64 border-r border-gray-100 hidden md:flex flex-col">
           <SidebarHeader className="p-4 border-b border-gray-100">
             <h2 className="text-xl font-bold text-slate-800">Tech Blog</h2>
           </SidebarHeader>
           <SidebarContent>
            <SidebarMenu className="p-2">
                <SidebarMenuItem>
                  <RouterLink to="/" className="w-full">
                    <SidebarMenuButton>
                        <Home className="h-4 w-4 mr-2" />
                        <span>Home</span>
                    </SidebarMenuButton>
                  </RouterLink>
                </SidebarMenuItem>
                <SidebarMenuItem>
                   <RouterLink to="/" className="w-full">
                    <SidebarMenuButton>
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        <span>Back to Posts</span>
                    </SidebarMenuButton>
                  </RouterLink>
                </SidebarMenuItem>
            </SidebarMenu>
           </SidebarContent>
        </Sidebar>
        
        <SidebarInset className="flex-1 flex flex-col">
          <BlogHeader />
          <main className="flex-grow p-6 md:p-8 lg:p-12 max-w-4xl mx-auto w-full">
            <article className="bg-white shadow-xl rounded-lg overflow-hidden">
              <img 
                src={`https://images.unsplash.com/${post.image}?w=1200&q=80&fit=crop`}
                alt={post.title}
                className="w-full h-64 md:h-96 object-cover"
              />
              <div className="p-6 md:p-8">
                <div className="mb-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold mr-2">
                    {post.category}
                  </span>
                  {/* Removed date and readTime display */}
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">{post.title}</h1>
                {typeof post.fullContent === 'string' ? (
                  <div dangerouslySetInnerHTML={{ __html: post.fullContent }} />
                ) : (
                  post.fullContent
                )}
              </div>
            </article>
            <div className="mt-8 text-center">
                <RouterLink to="/" className="text-blue-600 hover:text-blue-800 underline font-medium">
                    &larr; Back to all posts
                </RouterLink>
            </div>
          </main>
          <BlogFooter />
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default BlogPostPage;