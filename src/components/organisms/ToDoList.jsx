import { UseToDos } from '../../hooks/UseToDos'
import { ToDo } from '../atoms/ToDo'
import { Form } from '../molecules/Form'
import { ToDos } from '../molecules/ToDos'
import { ToDoView } from './ToDoPreview'

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

  console.log(toDos)

  return (
    <>
      <div className="bg-teal-50 rounded flex flex-col p-4 gap-4 dark:bg-neutral-800">
        <Form
          toDo={toDo}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          handleAddTag={handleAddTag}
        />

        <ToDoView
          title={toDo.title}
          description={toDo.description}
          tags={toDo.tags}
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
