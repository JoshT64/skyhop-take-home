import {
  Container,
  Dropdown,
  FileLoader,
  FileUpload,
  Hero,
  RadioSelect,
  Separator,
  Text,
} from './components';
import './styles/App.css';
import { useState } from 'react';

function App() {
  // If my application was larger scale I would use some sort of
  // state management library instead of prop drilling up for this file name
  const [file, setFile] = useState({ name: '', size: 0 });
  const getFileToDisplay = (file: File) => {
    setFile(file);
  };

  return (
    <>
      {/* <CloseButton /> */}
      <Hero />
      <Container>
        <div id='leftRow' className='text-start'>
          <Dropdown />
          <Text className='pt-4 pb-2'>
            Select a manifest that you'd like to import
          </Text>
          <FileUpload fileToDisplay={getFileToDisplay} />
          <Separator />
          {file.name && <FileLoader file={file} />}
        </div>
        <div id='rightRow' className='pr-8  text-start place-self-auto'>
          <Separator>
            <Text>Split schedule using social distancing?</Text>
            <RadioSelect options={['Yes', 'No']} defaultValue='yes' />
          </Separator>
          <Separator>
            <Text className='pt-4 pb-2'>Location Checking:</Text>
            <p className='text-green-600 font-normal'>All available!</p>
          </Separator>
          <Text className='pt-4'>Client:</Text>
          <RadioSelect
            options={['Single', 'Multiple']}
            defaultValue='multiple'
          />
        </div>
      </Container>
    </>
  );
}

export default App;
