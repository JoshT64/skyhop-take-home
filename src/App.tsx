import {
  Container,
  Dropdown,
  Hero,
  RadioSelect,
  Separator,
  Text,
} from './components';
import './styles/App.css';

function App() {
  return (
    <>
      <Hero />
      <Container>
        <div id='leftRow' className='text-start'>
          <Dropdown />
          <Text className='pt-4'>
            Select a manifest that you'd like to import
          </Text>
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
