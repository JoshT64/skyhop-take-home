import { ReactNode } from 'react';

export const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div className='text-sky-900 mt-8 flex flex-row gap-[80px] '>
      {children}
    </div>
  );
};
