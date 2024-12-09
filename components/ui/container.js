import { cn } from '@/lib/utils';

export function Container({ as: Component = 'div', className, ...props }) {
  return (
    <Component
      className={cn('container mx-auto px-4', className)}
      {...props}
    />
  );
}


// or i can also use this

// export function Container({ className = '', ...props }) {
//   return (
//     <div className={`container mx-auto px-4 ${className}`} {...props} />
//   );
// }
