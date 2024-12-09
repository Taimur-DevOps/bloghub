'use client';

import Link from 'next/link';
import { Calendar, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';

export function BlogCard({ blog, className }) {
  return (
    <Link 
      href={`/blog/${blog.id}`}
      className={cn(
        "group block overflow-hidden rounded-lg border bg-card hover:border-primary transition-all duration-300 blog-card-hover",
        className
      )}
    >
      <div className="aspect-video relative overflow-hidden">
        <img
          src={blog.image}
          alt={blog.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <div className="flex items-center gap-4 mb-3">
          <span className="inline-flex items-center rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
            {blog.category}
          </span>
          <div className="flex items-center text-xs text-muted-foreground ">
            <Calendar className="mr-1 h-3 w-3 " />
            {blog.date}
          </div>
        </div>
        <h3 className="text-md lg:text-lg font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-3">
          {blog.title}
        </h3>
        <p className="text-xs md:text-sm text-muted-foreground line-clamp-2 mb-4">
          {blog.description}
        </p>
        <div className="flex items-center text-xs text-muted-foreground">
          <Clock className="mr-1 h-3 w-3" />
          {blog.readTime}
        </div>
      </div>
    </Link>
  );
}