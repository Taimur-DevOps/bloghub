'use client';

import Link from 'next/link';
import { Calendar, Clock } from 'lucide-react';

export default function FeaturedSection({ blogs }) {
  const mainBlog = blogs[0];
  const sideBlogPosts = blogs.slice(1, 3);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Main featured post */}
      <div className="lg:col-span-2">
        <Link 
          href={`/blog/${mainBlog.id}`}
          className="group block relative h-[500px] rounded-lg overflow-hidden animate-fade-in"
        >
          <div className="absolute inset-0">
            <img
              src={mainBlog.image}
              alt={mainBlog.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              loading="eager" // Load immediately as it's above the fold
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="flex items-center gap-4 mb-4">
              <span className="inline-flex items-center rounded-full bg-primary/90 px-3 py-1 text-xs font-medium">
                {mainBlog.category}
              </span>
              <div className="flex items-center text-sm text-gray-300">
                <Calendar className="mr-1 h-4 w-4" />
                {mainBlog.date}
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <Clock className="mr-1 h-4 w-4" />
                {mainBlog.readTime}
              </div>
            </div>
            <h2 className="text-3xl font-bold text-white mb-4 group-hover:text-primary/90 transition-colors">
              {mainBlog.title}
            </h2>
            <p className="text-gray-300 text-lg mb-4 line-clamp-2">
              {mainBlog.description}
            </p>
            <div className="flex items-center">
              <span className="text-white">By {mainBlog.author}</span>
            </div>
          </div>
        </Link>
      </div>

      {/* Side featured posts */}
      <div className="lg:col-span-1 space-y-8">
        {sideBlogPosts.map((blog) => (
          <Link 
            key={blog.id}
            href={`/blog/${blog.id}`}
            className="group block relative h-[235px] rounded-lg overflow-hidden animate-fade-in"
          >
            <div className="absolute inset-0">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="flex items-center gap-4 mb-2">
                <span className="inline-flex items-center rounded-full bg-primary/90 px-2 py-1 text-xs font-medium text-white">
                  {blog.category}
                </span>
                <div className="flex items-center text-xs text-gray-300">
                  <Clock className="mr-1 h-3 w-3" />
                  {blog.readTime}
                </div>
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-primary/90 transition-colors line-clamp-2">
                {blog.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}