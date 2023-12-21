import { useState } from 'react'
import { toast } from 'sonner'

const toDoInitialState = {
  id: '',
  title: '',
  description: '',
  tags: [],
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

  const handleAddTag = (e, tag) => {
    e.preventDefault()

    if (tag.trim().length < 3) return

    setToDo(prev => ({
      ...prev,
      tags: [...prev.tags, tag],
    }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    const { title, tags } = toDo

    if (title.trim().length < 3) {
      return toast.error('Please enter at least 3 characters')
    }

    setToDos([
      ...toDos,
      {
        id: self.crypto.randomUUID(),
        title,
        description: '',
        tags,
        isCompleted: false,
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
    handleAddTag,
  }
}
