'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';

// Newsletter subscription form component
export function NewsletterForm() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription (to be implemented)
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md">
      <h3 className="text-lg font-semibold mb-4">Subscribe to our newsletter</h3>
      <p className="text-sm text-muted-foreground mb-4">
        Get the latest posts delivered right to your inbox.
      </p>
      <div className="flex gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="flex-1 px-3 py-2 bg-background border rounded-md"
          required
        />
        <Button type="submit">Subscribe</Button>
      </div>
    </form>
  );
}