import propTypes from 'prop-types'
import { InputCheckBox } from './InputCheckBox'
import { ViewToDo } from '../molecules/ViewToDo'
import { useState } from 'react'

import { useOutsideClick } from '@/hooks/useOutsideClick'

export const ToDo = ({
  id,
  title,
  subTasks,
  isCompleted,
  category,
  handleDelete,
  handleIsCompleted,
}) => {
  const [showEdit, setShowEdit] = useState(false)
  const handleShowEdit = () => {
    setShowEdit(!showEdit)
  }

  const viewToDoRef = useOutsideClick(() => {
    handleShowEdit()
  })

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
          onClick={handleShowEdit}
        >
          <InputCheckBox handleIsCompleted={handleIsCompleted} id={id} />

          <label
            htmlFor={id}
            className={`
              dark:text-gray-100
              flex gap-2 items-center
              
              ${isCompleted ? 'line-through' : ''} `}
          >
            <span className="line-clamp-1">{title}</span>
            {category && (
              <span className="text-sm text-gray-400">({category})</span>
            )}
          </label>
        </div>
      </li>
      {showEdit && (
        <ViewToDo
          id={id}
          viewToDoRef={viewToDoRef}
          title={title}
          category={category}
          subTasks={subTasks}
          isCompleted={isCompleted}
          handleDelete={handleDelete}
        />
      )}
    </>
  )
}

ToDo.propTypes = {
  id: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  subTasks: propTypes.array,
  category: propTypes.string,
  isCompleted: propTypes.bool.isRequired,
  handleDelete: propTypes.func.isRequired,
  handleIsCompleted: propTypes.func.isRequired,
}
