import propTypes from 'prop-types'

import { Trash2, ChevronDown, ChevronUp } from 'lucide-react'
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
    <li
      className={`${
        isCompleted
          ? 'bg-gray-200 dark:bg-gray-600 opacity-40'
          : 'bg-teal-200 dark:bg-teal-800'
      } p-2 rounded`}
    >
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <div className="inline-flex items-center">
            <label
              className="relative flex items-center p-3 rounded-full cursor-pointer"
              htmlFor="teal"
            >
              <input
                type="checkbox"
                className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-22 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-teal-500 checked:bg-teal-500 checked:before:bg-teal-500 hover:before:opacity-10"
                id={id}
                onClick={() => handleIsCompleted(id)}
              />
              <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3.5 w-3.5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="1"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
            </label>
          </div>

          <label
            htmlFor={id}
            className={`${
              isCompleted ? 'line-through' : ''
            } dark:text-gray-100`}
          >
            {children}
          </label>
        </div>

        <div className="flex items-center gap-2">
          <ButtonAction onClick={() => handleDelete(id)}>
            <Trash2
              color={isCompleted ? 'var(--c-neutral-800)' : 'var(--c-teal-200)'}
            />
          </ButtonAction>
          <ButtonAction onClick={handleIsOpen}>
            {isOpen ? (
              <ChevronUp
                color={
                  isCompleted ? 'var(--c-neutral-800)' : 'var(--c-teal-200)'
                }
              />
            ) : (
              <ChevronDown
                color={
                  isCompleted ? 'var(--c-neutral-800)' : 'var(--c-teal-200)'
                }
              />
            )}
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
