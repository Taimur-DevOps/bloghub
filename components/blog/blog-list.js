'use client';

import Link from 'next/link';
import { Calendar, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';

export function BlogList({ blog, className }) {
  return (
  <>
  <Link
    href={`/blog/${blog.id}`}
    className={cn(
      "block w-full rounded-lg border bg-card hover:border-primary transition-all duration-300 p-4  mb-2 blog-card-hover",
      className
    )}
  >
    <div className="flex flex-col md:flex-row gap-4">
      {/* Image Section */}
      <div className="w-full md:w-1/3 relative overflow-hidden">
        <img
          src={blog.image}
          alt={blog.title}
          className=" aspect-w-16 aspect-h-9 object-cover rounded-2xl h-[200px] transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col justify-between w-full">
        <div>
          <div className="flex items-center gap-4 mb-3">
            <span className="inline-flex items-center rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
              {blog.category}
            </span>
            <div className="flex items-center text-xs text-muted-foreground">
              <Calendar className="mr-1 h-3 w-3" />
              {blog.date}
            </div>
          </div>
          <h3 className="text-md lg:text-lg font-semibold mb-2 hover:text-primary transition-colors">
            {blog.title}
          </h3>
          <p className="text-xs md:text-sm text-muted-foreground line-clamp-3 mb-4">
            {blog.description}
          </p>
        </div>
        <div className="flex items-center text-xs text-muted-foreground">
          <Clock className="mr-1 h-3 w-3" />
          {blog.readTime}
        </div>
      </div>
    </div>
  </Link>
</>

  );
}