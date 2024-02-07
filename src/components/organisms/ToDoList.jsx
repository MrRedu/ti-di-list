import { UseToDos } from '@/hooks/useToDos'
import { Section } from '@/components/atoms/ui/Section'
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
    <Section
      className="flex flex-col
      w-full 
      py-12 md:pt-12
      gap-4 
      "
    >
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
    </Section>
  )
}
