'use client';

import { 
  Twitter, 
  Facebook, 
  Instagram, 
  Linkedin, 
  Youtube, 
  Rss 
} from 'lucide-react';

// Social media links component
export function SocialLinks() {
  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' },
    { icon: Rss, href: '#', label: 'RSS Feed' },
  ];

  return (
    <div className="flex gap-4">
      {socialLinks.map(({ icon: Icon, href, label }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          <Icon className="h-5 w-5" />
        </a>
      ))}
    </div>
  );
}