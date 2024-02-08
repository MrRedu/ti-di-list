import { useState } from 'react'
import { toast } from 'sonner'

const toDoInitialState = {
  id: '',
  title: '',
  description: '',
  category: '',
  isCompleted: false,
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
    const { title, description, category } = toDo

    if (title.trim().length < 3) {
      return toast.error('Title must have at least 3 characters.')
    }

    setToDos(prev => [
      {
        id: self.crypto.randomUUID(),
        title,
        description,
        category,
        isCompleted: false,
      },
      ...prev,
    ])

    toast.success(`${title} added!`)
    setToDo(prev => ({
      ...prev,
      title: '',
      description: '',
    }))
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
