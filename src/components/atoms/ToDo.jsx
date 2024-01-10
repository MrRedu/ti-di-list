import propTypes from 'prop-types'
import { InputCheckBox } from './InputCheckBox'
import { ViewToDo } from '../molecules/ViewToDo'
import { useState } from 'react'
import { Overlay } from './Overlay'
import { useOutsideClick } from '@/hooks/useOutsideClick'

export const ToDo = ({
  handleDelete,
  handleIsCompleted,
  id,
  title,
  isCompleted,
  category,
}) => {
  const [showEdit, setShowEdit] = useState(false)
  const handleShowEdit = () => {
    setShowEdit(!showEdit)
  }

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
        <InputCheckBox handleIsCompleted={handleIsCompleted} id={id} />

        <label
          htmlFor={id}
          className={`
              dark:text-gray-100
              flex gap-2 items-center
              
              
              ${isCompleted ? 'line-through' : ''} `}
        >
          <span className="">{title}</span>
          {category && (
            <span className="text-sm text-gray-400">({category})</span>
          )}
        </label>

        <button type="button" onClick={handleShowEdit} className="w-full">
          a
        </button>
      </li>
      {showEdit && (
        <Overlay>
          <ViewToDo
            id={id}
            title={title}
            category={category}
            isCompleted={isCompleted}
            handleDelete={handleDelete}
          />
        </Overlay>
      )}
    </>
  )
}

ToDo.propTypes = {
  handleDelete: propTypes.func.isRequired,
  handleIsCompleted: propTypes.func.isRequired,
  id: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  category: propTypes.string,
  isCompleted: propTypes.bool.isRequired,
}
