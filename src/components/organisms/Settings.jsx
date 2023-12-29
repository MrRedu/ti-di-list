import {
  MessageSquareHeart,
  HelpCircle,
  Settings as SettingsIcon,
  Heart,
  Paintbrush,
} from 'lucide-react'

import { Overlay } from '../atoms/Overlay'

const ACTIONS = [
  {
    name: 'Theme',
    icon: <Paintbrush />,
  },
  {
    name: 'Donate',
    icon: <Heart />,
  },
  {
    name: 'Feedback',
    icon: <MessageSquareHeart />,
  },
  {
    name: 'FAQ',
    icon: <HelpCircle />,
  },
  {
    name: 'Settings',
    icon: <SettingsIcon />,
  },
]

export const Settings = () => {
  return (
    <Overlay>
      <div
        className="
        h-full w-3/5
        p-4
        
      
      dark:bg-c-gray-700
      "
      >
        <ul className="flex flex-col gap-2">
          {ACTIONS.map(({ name, icon }) => (
            <li key={name} className="flex gap-2">
              {icon}
              <span>{name}</span>
            </li>
          ))}
        </ul>
      </div>
    </Overlay>
  )
}
