import propTypes from 'prop-types'

import { useEffect, useRef } from 'react'
import { Input } from '@/components/atoms/Input'
import { SelectCategory } from './SelectCategory'

export const Form = ({
  toDo,
  handleChange,
  handleSubmit,
  handleSetCategory,
}) => {
  const inputRef = useRef(null)

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.ctrlKey && e.key === '/') {
        inputRef.current.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  const handleOnSubmit = e => {
    handleSubmit(e)
  }

  return (
    <form
      action=""
      onSubmit={e => handleOnSubmit(e)}
      className="
        w-full h-auto
        align-self-end relative
        rounded-tr-2xl rounded-tl-2xl
        flex flex-col gap-2
        
        dark:bg-c-gray-700"
    >
      <Input
        type={'text'}
        name={'title'}
        id={'title'}
        placeholder={'Input new task here (Ctrl + /)'}
        value={toDo.title || ''}
        onChange={handleChange}
        inputRef={inputRef}
      />

      <div className="flex justify-between">
        <SelectCategory handleSetCategory={handleSetCategory} />
      </div>
    </form>
  )
}

Form.propTypes = {
  toDo: propTypes.object,
  handleChange: propTypes.func,
  handleSubmit: propTypes.func,
  handleSetCategory: propTypes.func,
}
