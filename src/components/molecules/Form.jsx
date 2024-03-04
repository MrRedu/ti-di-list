import propTypes from 'prop-types'

import { useEffect, useRef } from 'react'
import { MAX_LENGTH_INPUTS } from '@/utils/const'
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
      autoComplete="off"
      className="
      w-full h-auto
      flex flex-col gap-2
      "
    >
      <Input
        type={'text'}
        name={'title'}
        id={'title'}
        placeholder="Title"
        value={toDo.title || ''}
        onChange={handleChange}
        inputRef={inputRef}
        maxLength={MAX_LENGTH_INPUTS.title}
      />
      <Input
        type={'text'}
        name={'description'}
        id={'description'}
        placeholder="Description"
        value={toDo.description || ''}
        onChange={handleChange}
        maxLength={MAX_LENGTH_INPUTS.description}
      />

      <div
        className="
      flex flex-col gap-2
      md:flex-row
      "
      >
        <SelectCategory handleSetCategory={handleSetCategory} />
        <button
          className="
          h-10 w-full 
          font-bold py-2 px-4 rounded

        bg-slate-950 text-slate-300
        dark:text-slate-950 dark:bg-slate-200
        shadow
        "
          type="submit"
        >
          Add
        </button>
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
