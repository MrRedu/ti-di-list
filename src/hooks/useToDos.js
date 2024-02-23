import { useState, useEffect } from 'react'
import { toast } from 'sonner'
import { useLocalStorage } from './useLocalStorage'

const toDoInitialState = {
  id: '',
  createdAt: '',
  title: '',
  description: '',
  category: '',
  isCompleted: false,
}

export function useToDos() {
  const [toDo, setToDo] = useState(toDoInitialState)
  const [toDosLS, setToDosLS, removeToDosLS] = useLocalStorage('toDos', [])
  const [toDos, setToDos] = useState(toDosLS)

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
        createdAt: Date.now(),
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

  const handleDelete = (id, title) => {
    const newToDos = toDos.filter(toDo => toDo.id !== id)
    toast.success(`${title} deleted!`)
    setToDos(newToDos)
  }

  const handleIsCompleted = id => {
    const updatedToDos = toDos.map(toDo => {
      if (toDo.id === id) {
        return {
          ...toDo,
          isCompleted: !toDo.isCompleted,
        }
      }
      return toDo
    })

    const completedToDos = updatedToDos.filter(todo => todo.isCompleted)
    const incompleteToDos = updatedToDos
      .filter(todo => !todo.isCompleted)
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    const newToDos = [...incompleteToDos, ...completedToDos]

    setToDos(newToDos)
  }

  const handleTaskChange = (index, key, value) => {
    const newToDos = [...toDos]
    newToDos[index][key] = value
    setToDos(newToDos)
  }

  const removeAllToDosLocalStorage = () => {
    removeToDosLS()
    setToDos([])
  }

  useEffect(() => {
    setToDosLS(toDos || [])
  }, [toDos])

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
    handleTaskChange,
    removeAllToDosLocalStorage,
  }
}
