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
          w-full"
        >
          <InputCheckBox handleIsCompleted={handleIsCompleted} id={id} />

          <label
            htmlFor={id}
            className="
              flex flex-col justify-center"
          >
            <span
              className={`leading-none line-clamp-1
            ${isCompleted ? 'line-through' : ''}`}
            >
              {title}
            </span>
            {category && (
              <span className="leading-none text-sm text-amber-600">{`${category}`}</span>
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
