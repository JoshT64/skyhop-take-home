import { ReactNode } from 'react';

export const Separator = ({ children }: { children?: ReactNode }) => {
  return (
    <div className='border-b border-opacity-40 border-gray-400 pb-4'>
      {children}
    </div>
  );
};
