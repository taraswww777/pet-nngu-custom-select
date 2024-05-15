import { Select } from "../ui/Select/Select"
import { SelectItem } from '../ui/Select/Select.types.ts';

export const CustomSelectPage = () => {

  const items: SelectItem[] = [
    { id: 1, caption: 'one' },
    { id: 2, caption: 'two' },
    { id: 3, caption: 'tree' },
    { id: 4, caption: 'четыре' }
  ];

  return (<Select items={items} />)
}
