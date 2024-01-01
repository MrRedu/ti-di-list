import { ListOrdered } from 'lucide-react'
import { SelectCategory } from './SelectCategory'

const ACTIONS = [
  // {
  //   name: 'Date',
  //   icon: '<Calendar/>',
  // },
  {
    name: 'Sub-task',
    icon: <ListOrdered className="text-gray-400" />,
  },
  // {
  //   name: 'etc',
  //   icon: <etc />,
  // }
]

export const Actions = () => {
  return (
    <div className="flex gap-4 relative">
      <SelectCategory />
      {ACTIONS.map(({ name, icon }) => (
        <button key={name} type="button">
          {icon}
        </button>
      ))}
    </div>
  )
}
