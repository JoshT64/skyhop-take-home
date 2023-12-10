import { Text } from '..';
import { Button } from '../ui/button';
import { useDrag } from './useDrag';

interface DragAndDropProps {
  onFileNameChange: (fileName: File) => void;
}

export const DragAndDrop = ({ onFileNameChange }: DragAndDropProps) => {
  const { handleDragLeave, handleDragOver, handleFileChange } = useDrag({
    onFileNameChange,
  });

  return (
    <>
      <div
        onDrop={(event: React.DragEvent<HTMLDivElement>) => {
          event.preventDefault();
          const file = event.dataTransfer.files[0];
          onFileNameChange(file);
          event.currentTarget.style.backgroundColor = '';
        }}
        onDragOver={(event: React.DragEvent<HTMLDivElement>) =>
          handleDragOver(event)
        }
        onDragLeave={(event: React.DragEvent<HTMLDivElement>) => {
          handleDragLeave(event);
          event.currentTarget.style.backgroundColor = '';
        }}
        onClick={() => {
          // should disable this onclick while file is being uploaded
          const input = document.createElement('input');
          input.type = 'file';
          // @ts-expect-error input.onchange typing bug
          input.onchange = (event: React.ChangeEvent<HTMLInputElement>) =>
            handleFileChange(event);
          input.click();
        }}
        className='border cursor-pointer h-40 gap-3 w-[610px] flex-col mt-2 rounded-sm self-center flex justify-center items-center p-4 border-dashed border-gray-400 hover:bg-accent hover:text-accent-foreground '
      >
        <img src='/drag-drop-icon.png' />
        <Text className='font-light'>
          Drag & Drop Here Or{' '}
          <span className='font-semibold cursor-pointer'>Browse</span>
        </Text>
      </div>
      <Button className='bg-button w-1/3 self-center relative bottom-2'>
        Upload Manifest
      </Button>
    </>
  );
};
