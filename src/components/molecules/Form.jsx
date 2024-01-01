import propTypes from 'prop-types'

import { Input } from '../atoms/Input'

import { SendHorizontal } from 'lucide-react'
import { Overlay } from '../atoms/Overlay'
import { useOutsideClick } from '../../hooks/useOutsideClick'
import { useEffect, useRef } from 'react'
import { Actions } from './Actions'

export const Form = ({ toDo, handleChange, handleSubmit, handleShowForm }) => {
  const refForm = useOutsideClick(() => {
    handleShowForm()
  })

  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  return (
    <Overlay position={'justify-center items-end'}>
      <form
        ref={refForm}
        action=""
        onSubmit={e => {
          handleSubmit(e)
          handleShowForm()
        }}
        className="
        w-full h-auto p-4
        align-self-end relative
        rounded-tr-2xl rounded-tl-2xl
        flex flex-col gap-2
        
        dark:bg-c-gray-700"
      >
        <Input
          inputRef={inputRef}
          type={'text'}
          name={'title'}
          id={'title'}
          placeholder={'Input new task here'}
          value={toDo.title || ''}
          onChange={handleChange}
        />
        <Actions />

        <button
          type="submit"
          onClick={e => {
            handleSubmit(e)
            handleShowForm()
          }}
          className="
        p-2 rounded-full w-fill 
        grid place-content-center

        text-gray-100 

        bg-teal-500
        dark:bg-teal-800

        border-teal-100
        dark:border-teal-800
        
        absolute bottom-1 right-4
        "
        >
          <SendHorizontal className="rotate-270" />
        </button>
      </form>
    </Overlay>
  )
}

Form.propTypes = {
  toDo: propTypes.object,
  handleChange: propTypes.func,
  handleSubmit: propTypes.func,
  handleShowForm: propTypes.func,
}
