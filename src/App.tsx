import { Dropdown, RadioSelect } from './components';
import './styles/App.css';

function App() {
  return (
    <>
      <h2 className='text-3xl text-sky-900 pb-4 inline font-bold border-b border-opacity-40 border-gray-400'>
        Document Upload
      </h2>
      <div className='text-sky-900 mt-8 flex flex-row gap-[300px]'>
        <div id='leftRow' className='text-start'>
          <div>
            <a href='https://google.com' target='_blank'></a>
          </div>
          <div className='border-b w-[400px] border-opacity-40 border-gray-400 pb-4'>
            <Dropdown />
          </div>
          <p className='pt-4 font-semibold'>
            Select a manifest that you'd like to import
          </p>
        </div>
        <div id='rightRow' className='pr-8 place-self-auto'>
          <p className='font-semibold'>
            Split schedule using social distancing?
          </p>
          <RadioSelect />
        </div>
      </div>
    </>
  );
}

export default App;
