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
      flex flex-col gap-2
      "
    >
      <Input
        type={'text'}
        name={'title'}
        id={'title'}
        value={toDo.title || ''}
        onChange={handleChange}
        inputRef={inputRef}
      />

      <SelectCategory handleSetCategory={handleSetCategory} />
    </form>
  )
}

Form.propTypes = {
  toDo: propTypes.object,
  handleChange: propTypes.func,
  handleSubmit: propTypes.func,
  handleSetCategory: propTypes.func,
}
