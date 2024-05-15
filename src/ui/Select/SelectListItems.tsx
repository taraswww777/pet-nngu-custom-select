import { SelectItem } from './Select.types.ts';
import { FC } from 'react';

interface SelectListItemsProps {
  items: SelectItem[];
  onSelectedValue: (value: SelectItem) => void;
}

export const SelectListItems: FC<SelectListItemsProps> = ({ items, onSelectedValue }) => {
  return (
    <ul className="w-full flex flex-wrap justify-center">
      {items.map((item) => (
        <li
          key={item.id}
          className="w-full hover:cursor-pointer hover:bg-gray-100 py-2 px-2 bg-gray-400"
          onClick={() => {
            onSelectedValue(item);
          }}
        >{item.caption}</li>
      ))}
    </ul>
  )
}
