import { ClientDropdown, RadioSelect, Text } from '..';

const testingCenters = [
  {
    name: 'Testing Center 1',
    client: 'Client',
  },
  {
    name: 'Testing Center 2',
    client: 'Client 2',
  },
  {
    name: 'Testing Center 3',
    client: 'Client 3',
  },
  {
    name: 'Testing Center 4',
    client: 'Client 4',
  },
];

export const ClientSelect = () => {
  return (
    <>
      <Text className=''>Client:</Text>
      <RadioSelect options={['Single', 'Multiple']} defaultValue='multiple' />
      <ul>
        {testingCenters.map((testingCenter) => {
          return (
            <li
              className=' font-light pt-4 flex items-center gap-12 text-sm'
              key={testingCenter.client}
            >
              {testingCenter.name}
              <ClientDropdown clients={[testingCenter]} />
              <img className=' relative right-9' src='/tolerance-window.png' />
            </li>
          );
        })}
      </ul>
    </>
  );
};
