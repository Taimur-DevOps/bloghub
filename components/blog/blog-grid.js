'use client';

import { BlogList } from './blog-list';

export function BlogGrid({ blogs }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2   gap-4">
      {blogs.map((blog) => (
        <BlogList key={blog.id} blog={blog} />
      ))}
    </div>
  );
}