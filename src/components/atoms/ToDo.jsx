import propTypes from 'prop-types'
import Linkify from 'linkify-react'
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
          isCompleted ? 'border border-transparent opacity-30' : '     border'
        } 
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
            <label
              htmlFor={id}
              className="
              flex flex-col justify-center
              overflow-hidden
              break-all whitespace-normal
              "
            >
              <span
                className={`
                ${isCompleted ? 'line-through' : ''}
                leading-none line-clamp-1

                `}
                // text-black
                // dark:text-gray-300
              >
                {title}
              </span>
              {category && (
                <span className="leading-none text-sm text-gray-400">{`${category}`}</span>
              )}
            </label>
            <div className="flex justify-center items-center ">
              {description && (
                <button onClick={handleShowDescription} className="p-2">
                  <ChevronDown
                    className={`
                ${showDescription ? 'rotate-180' : ''}
                `}
                  />
                </button>
              )}
            </div>
          </div>
        </div>
      </li>
      {showDescription && (
        <>
          <div className="w-full ">
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
                <p
                  className="
                  break-all whitespace-normal
               
                text-base font-light leading-relaxed antialiased
                
                text-gray-500
                "
                >
                  <Linkify
                    options={{
                      target: '_blank',
                      className:
                        'text-gray-400 hover:text-gray-500 hover:underline ',
                    }}
                  >
                    {description}
                  </Linkify>
                </p>
              </div>
            </div>
          </div>
        </>
      )}
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
