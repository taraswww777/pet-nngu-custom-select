import { FC, useState } from 'react';
import { isArray } from 'lodash'
import { SelectItem } from './Select.types.ts';
import { SelectListItems } from './SelectListItems.tsx';

interface SelectProps {
  items: SelectItem[];
  onChange: (item: SelectItem)=>void
}

export const Select: FC<SelectProps> = ({
  items,
  onChange
}) => {
  const [selectedValue, setSelectedValue] = useState<SelectItem | SelectItem[]>();
  const [opened, setOpened] = useState<boolean>(false);

  const onSelectedValue = (v: SelectItem) => {
    onChange(v);
    setSelectedValue(v);
    setOpened(false);
  }

  return (
    <div className="text-2xl uppercase min-w-32">
      <button
        className="w-full border-2 border-black"
        onClick={() => {
          setOpened(true);
        }}
      >
        {isArray(selectedValue) ? (
          <ul>
            {selectedValue.map(({ caption, id }) => (
              <li key={id}>
                <span className="py-2 px-2 bg-gray-400">
                  {caption}
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <div className="py-2 px-2 bg-gray-400">
            {selectedValue?.caption}
          </div>
        )}
      </button>

      {opened && (
        <SelectListItems items={items}
                         onSelectedValue={onSelectedValue} />
      )}
    </div>
  )
}
