import { useState, useEffect } from 'react'
import { UseToDos } from '@/hooks/useToDos'
import { ToDo } from '@/components/atoms/ToDo'
import { Form } from '@/components/molecules/Form'
import { ToDos } from '@/components/molecules/ToDos'
import { CircleButton } from '@/components/atoms/CircleButton'
import { Plus } from 'lucide-react'

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

  const [showForm, setShowForm] = useState(false)

  const handleShowForm = () => {
    setShowForm(!showForm)
  }

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.ctrlKey && e.key === 'k') {
        setShowForm(true)
      }

      if (e.key === 'Escape') {
        setShowForm(false)
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <>
      <div className="">
        <CircleButton
          className="fixed bottom-20 right-5"
          onClick={handleShowForm}
          tooltip="Ctrl + K"
        >
          <Plus />
        </CircleButton>

        {showForm && (
          <Form
            toDo={toDo}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            handleShowForm={handleShowForm}
            handleSetCategory={handleSetCategory}
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
              />
            ))}
          </ToDos>
        )}
      </div>
    </>
  )
}
