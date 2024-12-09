'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { Calendar, Clock } from 'lucide-react';

export default function FeaturedPost({ blog }) {
  const postRef = useRef(null);

  useEffect(() => {
    gsap.from(postRef.current, {
      opacity: 0,
      y: 30,
      duration: 1,
      ease: 'power2.out'
    });
  }, []);

  return (
    <div ref={postRef} className="relative h-[500px] rounded-lg overflow-hidden">
      <Link href={`/blog/${blog.id}`}>
        <div className="absolute inset-0">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="flex items-center gap-4 mb-4">
            <span className="inline-flex items-center rounded-full bg-primary/90 px-3 py-1 text-xs font-medium ">
              {blog.category}
            </span>
            <div className="flex items-center text-sm text-gray-300">
              <Calendar className="mr-1 h-4 w-4" />
              {blog.date}
            </div>
            <div className="flex items-center text-sm text-gray-300">
              <Clock className="mr-1 h-4 w-4" />
              {blog.readTime}
            </div>
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">{blog.title}</h2>
          <p className="text-gray-300 text-lg mb-4 line-clamp-2">{blog.description}</p>
          <div className="flex items-center">
            <span className="text-white">By {blog.author}</span>
          </div>
        </div>
      </Link>
    </div>
  );
}