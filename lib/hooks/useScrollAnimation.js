'use client';

import { useEffect, useRef } from 'react';

export function useScrollAnimation(options = {}) {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add('animate-fade-in');
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.1,
        ...options
      }
    );

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [options]);

  return elementRef;
}