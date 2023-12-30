import propTypes from 'prop-types'
import { InputCheckBox } from './InputCheckBox'

export const ToDo = ({
  children,
  // handleDelete,
  // tags,
  id,
  handleIsCompleted,
  isCompleted,
}) => {
  return (
    <li
      className={`${
        isCompleted
          ? 'bg-teal-100 dark:bg-c-gray-400 opacity-30'
          : 'bg-teal-100 dark:bg-c-gray-400'
      } 
      p-2 rounded
      shadow-md
      
      `}
    >
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <InputCheckBox handleIsCompleted={handleIsCompleted} id={id} />

          <label
            htmlFor={id}
            className={`${
              isCompleted ? 'line-through' : ''
            } dark:text-gray-100`}
          >
            {children}
          </label>
        </div>
      </div>
    </li>
  )
}

ToDo.propTypes = {
  children: propTypes.node.isRequired,
  handleDelete: propTypes.func.isRequired,
  id: propTypes.string.isRequired,
  tags: propTypes.arrayOf(propTypes.string).isRequired,
  handleIsCompleted: propTypes.func.isRequired,
  isCompleted: propTypes.bool.isRequired,
}
