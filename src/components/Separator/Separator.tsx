import { ReactNode } from 'react';
import { cn } from '../../lib/utils';

interface SeparatorProps {
  children?: ReactNode;
  className?: string;
}

export const Separator = ({ children, className }: SeparatorProps) => {
  const classes = cn(
    'border-b border-opacity-40 border-gray-400 pb-4',
    className
  );

  return <div className={classes}>{children}</div>;
};
