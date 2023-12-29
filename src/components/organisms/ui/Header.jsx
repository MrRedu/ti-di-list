import { MoreVertical } from 'lucide-react'

const MENU = [
  {
    id: '1',
    name: 'All',
  },
  {
    id: '2',
    name: 'Work',
  },
  {
    id: '3',
    name: 'Personal',
  },
  {
    id: '4',
    name: 'Wishlist',
  },
]

export const Header = () => {
  return (
    <header
      className="
    p-2 flex items-center justify-between  
    
    text-white text-lg
    
    bg-teal-400
    dark:bg-c-gray-700
    "
    >
      <ul className="flex gap-2">
        {MENU.map(({ id, name }) => (
          <li
            key={id}
            className="
          px-4 py-1 rounded-3xl text-sm

          bg-c-softblue-100 
          "
          >
            {name}
          </li>
        ))}
      </ul>
      <nav>
        <button type="button">
          <MoreVertical />
        </button>
      </nav>
    </header>
  )
}
