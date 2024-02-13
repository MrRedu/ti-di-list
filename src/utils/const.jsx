// This file is .jsx because it using React (lucide-react)
import { Pencil, Plus, LayoutList, ClipboardList } from 'lucide-react'

export const CATEGORIES = [
  { id: 'category', name: 'Category' },
  { id: 'personal', name: 'Personal' },
  { id: 'work', name: 'Work' },
  { id: 'home', name: 'Home' },
  { id: 'wishlist', name: 'Wishlist' },
  { id: 'birthday', name: 'Birthday' },
]

export const timeLine = [
  {
    id: '1',
    title: 'Write a title',
    description: `Type your description.`,
    icon: <Pencil className="w-4 h-4" />,
  },
  {
    id: '2',
    title: 'Type your description',
    description: 'Explain what the task is about.',
    icon: <ClipboardList className="w-4 h-4" />,
  },
  {
    id: '3',
    title: 'Select a category',
    description: `Decide in which category to put the task.`,
    icon: <LayoutList className="w-4 h-4" />,
  },
  {
    id: '4',
    title: 'Add your To-Do in the list!',
    description: 'Press the button to save your To-Do.',
    icon: <Plus className="w-4 h-4" />,
  },
]

// Latitude and longitude of Caracas (Venezuela)
// We use this as default, in case of user's location not being available
export const DEFAULT_LOCATION = {
  latitude: 10.48801,
  longitude: -66.87919,
}

export const MAX_LENGTH_INPUTS = {
  title: 32,
  description: 320,
}
