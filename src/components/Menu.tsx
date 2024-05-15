import { Link } from 'react-router-dom';

export const Menu = () => {
  return (
    <ul className="flex m-0 w-full">
      <li className="mx-2"><Link className="p-2 border-black border-2" to={'/'}>Home</Link></li>
      <li className="mx-2"><Link className="p-2 border-black border-2" to={'custom-select'}>Custom Select</Link></li>
    </ul>
  )
}
