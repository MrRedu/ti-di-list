import { UseToDos } from '../../hooks/UseToDos'
import { ToDo } from '../atoms/ToDo'
import { Form } from '../molecules/Form'
import { ToDos } from '../molecules/ToDos'

export const ToDoList = () => {
  const {
    toDo,
    toDos,
    handleChangeToDo,
    handleSubmit,
    handleDelete,
    handleIsCompleted,
  } = UseToDos()

  return (
    <>
      <div className="bg-neutral-800 rounded flex flex-col p-4 gap-4">
        <Form
          toDo={toDo}
          handleChange={handleChangeToDo}
          handleSubmit={handleSubmit}
        />

        {toDos.length > 0 && (
          <ToDos>
            {toDos.map(todo => (
              <ToDo
                key={todo.id}
                id={todo.id}
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
