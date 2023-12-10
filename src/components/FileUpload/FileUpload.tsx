import { useState } from 'react';
import { DragAndDrop } from './DragAndDrop';
import { FileLoader, Separator } from '..';

export const FileUpload = () => {
  const [file, setFile] = useState({ name: '', size: 0 });
  const getFileToDisplay = (file: File) => {
    setFile(file);
  };

  return (
    <>
      <div className='border w-[640px] flex flex-col rounded-md h-[250px]  border-input justify-around '>
        <DragAndDrop onFileNameChange={getFileToDisplay} />
      </div>
      <div>
        {file.name && (
          <>
            <Separator className='border-slate-300' />
            <FileLoader file={file} />{' '}
            <Separator className='border-slate-300' />{' '}
          </>
        )}
      </div>
    </>
  );
};
