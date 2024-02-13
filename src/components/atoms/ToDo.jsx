import propTypes from 'prop-types'
import { InputCheckBox } from './InputCheckBox'
import { ChevronDown, Trash2 } from 'lucide-react'
import { useState } from 'react'
import { EditableInput } from '../molecules/EditableInput'

export const ToDo = ({
  index,
  id,
  title,
  description,
  category,
  isCompleted,
  handleDelete,
  handleIsCompleted,
  handleTaskChange,
}) => {
  const [showDescription, setShowDescription] = useState(false)

  const handleShowDescription = () => {
    setShowDescription(prev => !prev)
  }

  return (
    <>
      <li
        className={`
      ${isCompleted ? 'border border-transparent opacity-30' : 'border'} 
      ${showDescription ? 'border-b-0' : 'shadow rounded'}
      rounded-tl rounded-tr
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
          <div className="flex w-full justify-between">
            <div
              className="
              flex flex-col justify-center
              overflow-hidden
              break-all whitespace-normal
              "
            >
              <EditableInput
                className={`
                ${isCompleted ? 'line-through' : ''}
                leading-none line-clamp-1
                `}
                type="text"
                value={title}
                onChange={value => handleTaskChange(index, 'title', value)}
              />
              {category && (
                <span className="leading-none text-xs text-gray-400">{`${category}`}</span>
              )}
            </div>
            <div className="flex justify-center items-center ">
              <button onClick={() => handleDelete(id)} className="p-2">
                <Trash2 />
              </button>
              <button onClick={handleShowDescription} className="p-2">
                <ChevronDown
                  className={`
                ${showDescription ? 'rotate-180' : ''}
                `}
                />
              </button>
            </div>
          </div>
        </div>
      </li>
      {showDescription && (
        <div className="w-full">
          <div
            className={`
            relative -top-3
            flex flex-col 

            shadow-lg
            rounded rounded-t-none

            border border-t-0
            text-gray-700 
          `}
          >
            <div className="p-6 pt-2">
              <div
                className="
                  break-all whitespace-normal
               
                text-base font-light leading-relaxed antialiased
                
                text-gray-500
                "
              >
                <EditableInput
                  isTextarea
                  type="text"
                  value={description}
                  onChange={value =>
                    handleTaskChange(index, 'description', value)
                  }
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

ToDo.propTypes = {
  index: propTypes.number.isRequired,
  id: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  description: propTypes.string,
  category: propTypes.string,
  isCompleted: propTypes.bool.isRequired,
  handleDelete: propTypes.func.isRequired,
  handleIsCompleted: propTypes.func.isRequired,
  handleTaskChange: propTypes.func.isRequired,
}
