'use client';

import { Button } from '@/components/ui/button';

export function NewsletterSection() {
  return (
    <div className="p-6 border rounded-lg space-y-4">
      <h3 className="font-bold">Get the best stories delivered to you</h3>
      <p className="text-sm text-muted-foreground">
        Stay updated with our latest stories and updates. No spam, unsubscribe anytime.
      </p>
      <form className="space-y-2">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full px-3 py-2 border rounded-md bg-background"
        />
        <Button className="w-full">Subscribe</Button>
      </form>
    </div>
  );
}