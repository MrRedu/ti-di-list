import propTypes from 'prop-types'
import { InputCheckBox } from './InputCheckBox'

export const ToDo = ({
  id,
  title,
  isCompleted,
  category,
  handleDelete,
  handleIsCompleted,
}) => {
  return (
    <>
      <li
        className={`${
          isCompleted
            ? 'bg-teal-100 dark:bg-c-gray-400 opacity-30'
            : 'bg-teal-100 dark:bg-c-gray-400'
        } 
      p-2 rounded
      shadow-md

      flex items-center gap-2
      `}
      >
        <div
          className="
          flex gap-2
          w-full"
        >
          <InputCheckBox handleIsCompleted={handleIsCompleted} id={id} />

          <label
            htmlFor={id}
            className="
              dark:text-gray-100
              flex flex-col justify-center"
          >
            <span
              className={`line-clamp-1
            ${isCompleted ? 'line-through' : ''}`}
            >
              {title}
            </span>
            {!category || category === 'No category' ? null : (
              <span className="text-sm text-gray-400">{`${category}`}</span>
            )}
          </label>
        </div>
      </li>
    </>
  )
}

ToDo.propTypes = {
  id: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  category: propTypes.string,
  isCompleted: propTypes.bool.isRequired,
  handleDelete: propTypes.func.isRequired,
  handleIsCompleted: propTypes.func.isRequired,
}
