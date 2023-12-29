import { useState } from 'react'
import { UseToDos } from '../../hooks/UseToDos'
import { ToDo } from '../atoms/ToDo'
import { Form } from '../molecules/Form'
import { ToDos } from '../molecules/ToDos'
import { AddToDo } from '../atoms/AddToDo'
// import { ToDoView } from './ToDoPreview'

export const ToDoList = () => {
  const {
    toDo,
    toDos,
    handleChange,
    handleSubmit,
    handleDelete,
    handleIsCompleted,
    handleAddTag,
  } = UseToDos()

  const [showForm, setShowForm] = useState(false)

  const handleShowForm = e => {
    setShowForm(!showForm)
  }

  return (
    <>
      <div className="">
        <AddToDo onClick={handleShowForm} />
        {showForm && (
          <Form
            toDo={toDo}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            handleAddTag={handleAddTag}
            handleShowForm={handleShowForm}
          />
        )}

        {toDos.length > 0 && (
          <ToDos>
            {toDos.map(todo => (
              <ToDo
                key={todo.id}
                handleDelete={handleDelete}
                handleIsCompleted={handleIsCompleted}
                {...todo}
              >
                {todo.title}
              </ToDo>
            ))}
          </ToDos>
        )}
      </div>
    </>
  )
}
