'use client';

export function AdBanner({ variant = 'horizontal', className = '' }) {
  return (
    <div className={className}>
      <div className={`bg-muted/30 rounded-lg flex items-center justify-center ${
        variant === 'horizontal' ? 'h-32' : 'h-64'
      }`}>
        <span className="text-sm text-muted-foreground">Advertisement</span>
      </div>
    </div>
  );
}