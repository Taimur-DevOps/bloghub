'use client';

import Link from 'next/link';
import { TrendingUp } from 'lucide-react';

export function TrendingSection({ blogs }) {
  return (
    <div className="border-y py-8">
      <div className="flex items-center gap-2 mb-6">
        <TrendingUp className="h-5 w-5" />
        <h2 className="font-bold">Trending on BlogHub</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog, index) => (
          <Link 
            key={blog.id}
            href={`/blog/${blog.id}`}
            className="flex items-start gap-4 group"
          >
            <span className="text-3xl font-bold text-muted-foreground/20">
              {String(index + 1).padStart(2, '0')}
            </span>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <img
                  src={`https://ui-avatars.com/api/?name=${blog.author}&background=random`}
                  alt={blog.author}
                  className="h-6 w-6 rounded-full"
                />
                <span className="text-sm font-medium">{blog.author}</span>
              </div>
              <h3 className="font-bold group-hover:text-primary transition-colors line-clamp-2">
                {blog.title}
              </h3>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>{blog.date}</span>
                <span>·</span>
                <span>{blog.readTime}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}