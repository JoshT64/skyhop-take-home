import { Text } from '..';

interface StatusTextProps {
  text: string;
  isAvailable: boolean;
}

export const StatusText = ({ text, isAvailable }: StatusTextProps) => {
  return (
    <>
      <Text className='pt-4 pb-2'>{text}</Text>
      <Text className='text-green-600 pt-0  font-normal '>
        {isAvailable === true ? 'All Available!' : 'Not Available!'}
      </Text>
    </>
  );
};
