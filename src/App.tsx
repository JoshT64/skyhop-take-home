import {
  ClientSelect,
  CloseButton,
  Container,
  Dropdown,
  FileUpload,
  Hero,
  RadioSelect,
  Separator,
  StatusText,
  Text,
} from './components';
import { Button } from './components/ui/button';
import { Label } from './components/ui/label';
import { Switch } from './components/ui/switch';
import './styles/App.css';

function App() {
  return (
    <>
      <CloseButton />
      <Hero />
      <Container>
        <div id='leftRow' className='text-start'>
          <Dropdown />
          <Text className='pb-2'>
            Select a manifest that you'd like to import
          </Text>
          <FileUpload />
          <Separator className='w-[400px]' />
          <Separator className='w-[400px]'>
            <StatusText text={'Elapse Data Checking:'} isAvailable />
          </Separator>
          <Text>Tolerance Window</Text>
          <div className='flex items-center pt-2'>
            <Switch defaultChecked className='mr-1'></Switch>
            <Label className='flex items-center'>
              <p className='pr-4 pl-1'>Toggle ON </p>
              <p>|</p>
              <span className='flex items-center pl-4'>
                <img className='pr-1' src='/tolerance-window.png' />
                Select Tolerance Level
              </span>{' '}
            </Label>
          </div>
        </div>
        <div id='rightRow' className='pr-8 text-start place-self-auto'>
          <Separator>
            <Text className='pt-0'>
              Split schedule using social distancing?
            </Text>
            <RadioSelect options={['Yes', 'No']} defaultValue='yes' />
          </Separator>
          <Separator>
            <StatusText text={'Location Checking:'} isAvailable />
          </Separator>
          <ClientSelect />
        </div>
      </Container>
      <Text className='mt-4 text-xl'>
        Data in the import file is correct. Please press Continue to import.
      </Text>
      <Button className='bg-button m-4 w-[240px]  h-12 '>
        Continue Import
      </Button>
      <Button
        className=' w-[240px] m-4 border-orange-400 h-12 hover:text-orange-400 text-orange-300'
        variant='outline'
      >
        Cancel
      </Button>
    </>
  );
}

export default App;
