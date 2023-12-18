import propTypes from 'prop-types'

import { Trash2, ChevronDown } from 'lucide-react'
import { useState } from 'react'

const ButtonAction = ({ children, onClick }) => {
  return (
    <button
      type="button"
      className="grid place-content-center"
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export const ToDo = ({
  children,
  handleDelete,
  id,
  handleIsCompleted,
  isCompleted,
}) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleIsOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <li className="bg-slate-400 p-2 ">
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <input
            id={id}
            type="checkbox"
            value={''}
            className="
          w-4 h-4 rounded
          text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 
          dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            onClick={() => handleIsCompleted(id)}
          />
          <label
            htmlFor={id}
            className={`${isCompleted ? 'line-through' : ''}`}
          >
            {children}
          </label>
        </div>

        <div className="flex items-center gap-2">
          <ButtonAction onClick={() => handleDelete(id)}>
            <Trash2 />
          </ButtonAction>
          <ButtonAction onClick={handleIsOpen}>
            <ChevronDown />
          </ButtonAction>
        </div>
      </div>
      <div className={`${isOpen ? 'block' : 'hidden'}`}>
        <span>{`[tag, tag, tag, tag, tag]`}</span>
      </div>
    </li>
  )
}

ToDo.propTypes = {
  children: propTypes.node.isRequired,
  handleDelete: propTypes.func.isRequired,
  id: propTypes.string.isRequired,
  handleIsCompleted: propTypes.func.isRequired,
  isCompleted: propTypes.bool.isRequired,
}

ButtonAction.propTypes = {
  children: propTypes.node.isRequired,
  onClick: propTypes.func.isRequired,
}
