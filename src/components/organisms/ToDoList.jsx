import { useToDos } from '@/hooks/useToDos'
import { Section } from '@/components/atoms/ui/Section'
import { ToDo } from '@/components/atoms/ToDo'
import { Form } from '@/components/molecules/Form'
import { ToDos } from '@/components/molecules/ToDos'
import { TimeLine } from '@/components/molecules/TimeLine'
import { timeLine } from '@/utils/const'

export const ToDoList = () => {
  const {
    toDo,
    toDos,
    handleChange,
    handleSubmit,
    handleDelete,
    handleIsCompleted,
    handleSetCategory,
    handleTaskChange,
  } = useToDos()

  return (
    <Section
      className="flex flex-col
      w-full md:w-3/5
      py-12 md:pt-12
      gap-2 
      "
    >
      <Form
        toDo={toDo}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleSetCategory={handleSetCategory}
      />

      {toDos.length > 0 ? (
        <ToDos className="pb-2">
          {toDos.map((todo, index) => (
            <ToDo
              key={todo.id}
              index={index}
              handleDelete={handleDelete}
              handleIsCompleted={handleIsCompleted}
              handleTaskChange={handleTaskChange}
              {...todo}
            />
          ))}
        </ToDos>
      ) : (
        <TimeLine title={`It's time to write your To-Do!`} objects={timeLine} />
      )}
    </Section>
  )
}
