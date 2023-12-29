import { useState } from 'react'
import { UseToDos } from '../../hooks/useToDos'
import { ToDo } from '../atoms/ToDo'
import { Form } from '../molecules/Form'
import { ToDos } from '../molecules/ToDos'
import { AddToDo } from '../atoms/AddToDo'

export const ToDoList = () => {
  const {
    toDo,
    toDos,
    handleChange,
    handleSubmit,
    handleDelete,
    handleIsCompleted,
  } = UseToDos()

  const [showForm, setShowForm] = useState(false)

  const handleShowForm = () => {
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
