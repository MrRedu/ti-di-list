import { useState } from 'react'
import { toast } from 'sonner'

const toDoInitialState = {
  id: '',
  title: '',
  category: '',
  isCompleted: false,
  subTasks: [{ id: '', subTask: '', isCompleted: false }],
}

export function UseToDos() {
  const [toDos, setToDos] = useState([])
  const [toDo, setToDo] = useState(toDoInitialState)

  const handleChange = e => {
    e.preventDefault()
    const { name, value } = e.target

    setToDo(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSetCategory = category => {
    setToDo(prev => ({
      ...prev,
      category,
    }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    const { title, category } = toDo

    if (title.trim().length < 3) {
      return toast.error('Please enter at least 3 characters')
    }

    setToDos(prev => [
      ...prev,
      {
        id: self.crypto.randomUUID(),
        title,
        category,
        isCompleted: false,
        subTasks: [
          {
            id: self.crypto.randomUUID(),
            subTask: '1. Sub Task',
            isCompleted: false,
          },
          {
            id: self.crypto.randomUUID(),
            subTask: '2. Sub Task',
            isCompleted: true,
          },
        ],
      },
    ])

    toast.success(`${title} added!`)
    setToDo(toDoInitialState)
  }

  const handleDelete = id => {
    const newToDos = toDos.filter(toDo => toDo.id !== id)
    setToDos(newToDos)
  }

  const handleIsCompleted = id => {
    const newToDos = toDos.map(toDo => {
      if (toDo.id === id) {
        return {
          ...toDo,
          isCompleted: !toDo.isCompleted,
        }
      }
      return toDo
    })
    setToDos(newToDos)
  }

  return {
    toDo,
    toDos,
    setToDo,
    setToDos,
    handleChange,
    handleSubmit,
    handleDelete,
    handleIsCompleted,
    handleSetCategory,
  }
}
