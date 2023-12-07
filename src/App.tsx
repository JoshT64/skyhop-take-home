import { Dropdown } from './components/Dropdown';
import './styles/App.css';

function App() {
  return (
    <>
      <h2 className='text-3xl text-sky-950 pb-4 inline font-bold border-b border-opacity-40 border-gray-400 '>
        Document Upload
      </h2>
      <div className='text-sky-950 mt-8 flex flex-col'>
        <div>
          <div>
            <a href='https://google.com' target='_blank'></a>
          </div>
          <div className='border-b w-[400px]  border-opacity-40 border-gray-400 pb-4'>
            <Dropdown />
          </div>
        </div>
        <div className='self-end pr-8'>
          <h2>Content Right Side</h2>
        </div>
      </div>
    </>
  );
}

export default App;
