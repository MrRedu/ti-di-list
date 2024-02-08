import propTypes from 'prop-types'
import { InputCheckBox } from './InputCheckBox'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

export const ToDo = ({
  id,
  title,
  description,
  category,
  isCompleted,
  handleDelete,
  handleIsCompleted,
}) => {
  const [showDescription, setShowDescription] = useState(false)

  const handleShowDescription = () => {
    setShowDescription(prev => !prev)
  }

  return (
    <>
      <li
        className={`${
          isCompleted
            ? 'border border-transparent opacity-30'
            : 'border border-blue-gray-200'
        } 
      rounded
      shadow-md

      flex items-center gap-2
      `}
      >
        <div
          className="
          flex gap-2    
          w-full
          "
        >
          <InputCheckBox handleIsCompleted={handleIsCompleted} id={id} />

          <div className="w-full flex justify-between">
            <label
              htmlFor={id}
              className="
              flex flex-col justify-center
              w-fit

              line-clamp-1
              
              mr-6
              "
            >
              <span
                className={`leading-none line-clamp-1

            ${isCompleted ? 'line-through' : ''}`}
              >
                {title}
              </span>
              {category && (
                <span className="leading-none text-sm text-gray-400">{`${category}`}</span>
              )}
            </label>
            <div className="flex justify-center items-center ">
              <button onClick={handleShowDescription} className="p-2 ">
                <ChevronDown
                  className={`
                ${showDescription ? 'rotate-180' : ''}
                `}
                  // transition-all duration-300
                />
              </button>
            </div>
          </div>
        </div>
      </li>
      {showDescription && <p className="text-sm">{description}</p>}
    </>
  )
}

ToDo.propTypes = {
  id: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  description: propTypes.string,
  category: propTypes.string,
  isCompleted: propTypes.bool.isRequired,
  handleDelete: propTypes.func.isRequired,
  handleIsCompleted: propTypes.func.isRequired,
}
