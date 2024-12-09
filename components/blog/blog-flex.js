'use client';

import { BlogCard } from './blog-card';


// horizontal direction 
export function BlogFlex({ blogs }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {blogs.map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  );
}