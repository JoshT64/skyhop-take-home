import { DragAndDrop } from './DragAndDrop';

interface FileUploadProps {
  fileToDisplay: (file: File) => void;
}

export const FileUpload = ({ fileToDisplay }: FileUploadProps) => {
  const onFileUpload = (file: File) => {
    fileToDisplay(file);
  };
  return (
    <div className='border w-[650px] flex flex-col rounded-md h-[250px]  border-input justify-around '>
      <DragAndDrop onFileNameChange={onFileUpload} />
    </div>
  );
};
