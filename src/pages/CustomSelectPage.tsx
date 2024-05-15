import { Select } from "../ui/Select/Select"
import { SelectItem } from '../ui/Select/Select.types.ts';

export const CustomSelectPage = () => {

  const items: SelectItem[] = [
    { id: 1, caption: 'one' },
    { id: 2, caption: 'two' },
    { id: 3, caption: 'tree' },
    { id: 4, caption: 'четыре' }
  ];

  const onChange = (item: SelectItem) => {
    console.log('item:', item)
  }


  return (<Select items={items} onChange={onChange} />)
}
/**
 * 1. CustomSelectPage - Бизнес логика
 * 2. Select - Сам выпадающий список
 * 3. SelectListItems - Элементы списка
 * 4. caption - отображение элемента
 */
