import { useEffect } from 'react'
import { useState } from 'react'
import { Layout } from './layout'
import { toast } from 'sonner'

const toDoInitialValue = {
  id: self.crypto.randomUUID(),
  text: '',
  tags: [],
  completed: false,
}

export const TiDiListApp = () => {
  const [toDos, setToDos] = useState([])
  const [toDo, setToDo] = useState(toDoInitialValue)

  const handleChange = e => {
    e.preventDefault()

    setToDo({
      id: self.crypto.randomUUID(),
      text: e.target.value,
      completed: false,
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const { text } = toDo
    const string = text.trim()

    if (string.length < 3) {
      return toast.error('Please enter at least 3 characters')
    }

    setToDos([...toDos, toDo])
    toast.success(`${string} added!`)
    setToDo('')
  }

  useEffect(() => {
    console.log(toDos)
  }, [toDos])

  return (
    <>
      <Layout>
        <form action="" onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="text"
            name="todo"
            id="todo"
            placeholder="todo"
            value={toDo.text || ''}
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded"
          />
          <button
            type="submit"
            onClick={handleSubmit}
            className="border border-gray-300 p-2 rounded"
          >
            Add
          </button>
        </form>

        <ul className="">
          {toDos.map(todo => (
            <li key={todo.id}>{todo.text}</li>
          ))}
        </ul>
      </Layout>
    </>
  )
}
