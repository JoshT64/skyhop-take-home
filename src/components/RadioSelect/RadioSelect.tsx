import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

interface RadioSelectProps {
  options: string[];
  defaultValue: string;
}

export const RadioSelect = ({ options, defaultValue }: RadioSelectProps) => {
  const optionsToRender = () => {
    return options?.map((option) => {
      return (
        <div key={option} className='flex items-center space-x-2'>
          <RadioGroupItem value={option.toLowerCase()} id='r1' />
          <Label htmlFor='r1'>{option}</Label>
        </div>
      );
    });
  };
  return (
    <RadioGroup className='pt-2' defaultValue={defaultValue}>
      {optionsToRender()}
    </RadioGroup>
  );
};
