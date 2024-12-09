'use client';

import { NewsletterForm } from './newsletter-form';
import { SocialLinks } from './social-links';
import { FooterLinks } from './footer-links';

// Main footer component that combines all footer sections
export function Footer() {
  return (
    <footer className="border-t bg-card">
      {/* Main footer content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Left column with newsletter */}
          <div>
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-2">BlogHub</h2>
              <p className="text-muted-foreground">
                Discover stories, thinking, and expertise from writers on any topic.
              </p>
            </div>
            <NewsletterForm />
          </div>

          {/* Right column with links */}
          <FooterLinks />
        </div>

        {/* Bottom bar with social links and copyright */}
        <div className="pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <SocialLinks />
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} BlogHub. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}