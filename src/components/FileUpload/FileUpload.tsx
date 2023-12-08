import { DragAndDrop } from './DragAndDrop';

export const FileUpload = () => {
  return (
    <div className='border w-[650px] flex flex-col rounded-md h-[250px]  border-input justify-around '>
      <DragAndDrop />
    </div>
  );
};
