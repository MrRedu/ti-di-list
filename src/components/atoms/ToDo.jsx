import propTypes from 'prop-types'
import { InputCheckBox } from './InputCheckBox'
import { useState } from 'react'
import { EditableInput } from '@/components/molecules/EditableInput'
import { Actions } from '@/components/molecules/Actions'

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
              w-full
              flex flex-col justify-center
              overflow-hidden
              break-all whitespace-normal
              "
            >
              <EditableInput
                className={`
                ${isCompleted ? 'line-through' : ''}
                leading-none line-clamp-1

                dark:text-white
                `}
                type="text"
                value={title}
                onChange={value => handleTaskChange(index, 'title', value)}
              />
              {category && (
                <span className="leading-none text-xs text-gray-400">{`${category}`}</span>
              )}
            </div>
            <Actions
              id={id}
              showDescription={showDescription}
              handleShowDescription={handleShowDescription}
              title={title}
              handleDelete={handleDelete}
            />
          </div>
        </div>
      </li>
      {showDescription && (
        <div
          className={`
        ${isCompleted && 'border-transparent opacity-30'} 
        w-full
        `}
        >
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
