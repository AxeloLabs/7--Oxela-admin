import * as React from 'react';
import { cn } from '@/lib/utils';

export default React.forwardRef(function Input(
  { className, type, ...props }: React.InputHTMLAttributes<HTMLInputElement>,
  ref: React.Ref<HTMLInputElement>
) {
  return (
    <input
      type={type}
      className={cn(
        'focus-visible:border-foreground flex h-[50px] w-full rounded-full border bg-transparent px-6 py-4 text-[16px] font-medium transition-colors placeholder:text-black/30 hover:border-gray-400/50 focus-visible:ring-0 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:placeholder:text-gray-500',
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
