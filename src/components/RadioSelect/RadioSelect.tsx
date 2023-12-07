import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

export const RadioSelect = () => {
  return (
    <RadioGroup className='pt-2' defaultValue='no'>
      <div className='flex items-center space-x-2'>
        <RadioGroupItem value='yes' id='r1' />
        <Label htmlFor='r1'>Yes</Label>
      </div>
      <div className='flex items-center space-x-2'>
        <RadioGroupItem value='no' id='r2' />
        <Label htmlFor='r2'>No</Label>
      </div>
    </RadioGroup>
  );
};
