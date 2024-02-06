import { UseToDos } from '@/hooks/useToDos'
import { ToDo } from '@/components/atoms/ToDo'
import { Form } from '@/components/molecules/Form'
import { ToDos } from '@/components/molecules/ToDos'

export const ToDoList = () => {
  const {
    toDo,
    toDos,
    handleChange,
    handleSubmit,
    handleDelete,
    handleIsCompleted,
    handleSetCategory,
  } = UseToDos()

  return (
    <>
      <div className="flex flex-col gap-4">
        <Form
          toDo={toDo}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          handleSetCategory={handleSetCategory}
        />

        {toDos.length > 0 && (
          <ToDos>
            {toDos.map(todo => (
              <ToDo
                key={todo.id}
                handleDelete={handleDelete}
                handleIsCompleted={handleIsCompleted}
                {...todo}
              />
            ))}
          </ToDos>
        )}
      </div>
    </>
  )
}
