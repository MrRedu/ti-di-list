import { useState } from 'react'
import { toast } from 'sonner'

const toDoInitialState = {
  id: '',
  title: '',
  tags: [],
  isCompleted: false,
}

export function UseToDos() {
  const [toDo, setToDo] = useState(toDoInitialState)

  const [toDos, setToDos] = useState([])

  const handleChangeToDo = e => {
    e.preventDefault()
    const { name, value } = e.target

    setToDo(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    const { title } = toDo

    if (title.trim().length < 3) {
      return toast.error('Please enter at least 3 characters')
    }

    setToDos([
      ...toDos,
      {
        id: self.crypto.randomUUID(),
        title,
        tags: [],
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
    handleChangeToDo,
    handleSubmit,
    handleDelete,
    handleIsCompleted,
  }
}
