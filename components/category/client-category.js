'use client';

import { useState } from 'react';
import { BlogGrid } from '@/components/blog/blog-grid';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react'; // Import the Search icon

export function ClientCategory({ blogs }) {
  const [visibleBlogs, setVisibleBlogs] = useState(20);
  const [searchQuery, setSearchQuery] = useState('');

  // Filter blogs based on search query
  const filteredBlogs = blogs.filter(blog =>
    blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    blog.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Load more blogs (in increments of 15)
  const loadMore = () => {
    setVisibleBlogs(prev => Math.min(prev + 15, filteredBlogs.length));
  };

  return (
    <div className="animate-fade-in space-y-8">
      {/* Search box with icon */}
      <div className="relative mb-6">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for blogs..."
          className="w-full py-2 pl-12 border rounded-lg  focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
        />
        {/* Search icon inside input field */}
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
      </div>

      {/* Blog Grid */}
      <BlogGrid blogs={filteredBlogs.slice(0, visibleBlogs)} />

      {/* Load more button */}
      {visibleBlogs < filteredBlogs.length && (
        <div className="text-center mt-8">
          <Button
            onClick={loadMore}
            size="lg"
            className="px-8 py-3 bg-primary rounded-full transition-all duration-300 hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary"
          >
            More Stories
          </Button>
        </div>
      )}
    </div>
  );
}
