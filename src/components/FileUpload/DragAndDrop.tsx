import { Button } from '../ui/button';
import { Text } from '..';

export const DragAndDrop = () => {
  return (
    <>
      <div className='border h-40 gap-3 w-[610px] flex-col mt-2 rounded-sm self-center flex justify-center items-center p-4 border-dashed border-gray-400 hover:bg-accent hover:text-accent-foreground '>
        <img src='/drag-drop-icon.png' />
        <Text className='font-light'>
          Drag & Drop Here Or <span className='font-semibold'>Browse</span>
        </Text>
      </div>
      <Button className='bg-button w-1/3 self-center relative bottom-2'>
        Upload Manifest
      </Button>
    </>
  );
};
