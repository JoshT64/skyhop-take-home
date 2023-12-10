import { Button } from '../ui/button';

export const CloseButton = () => {
  return (
    <Button className='bg-button absolute w-8 h-8 top-4 left-4' size='icon'>
      <div className='w-4    font-light  scale-y-100  scale-x-[1.75]  '>X</div>
    </Button>
  );
};
