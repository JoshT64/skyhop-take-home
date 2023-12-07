import { cn } from '../../lib/utils';

interface TextProps {
  children: string;
  className?: string | [];
}

export const Text = ({ children, className }: TextProps) => {
  const classes = cn(`text-sky-900 font-semibold text-sm ${className}`);

  return <p className={classes}>{children}</p>;
};
