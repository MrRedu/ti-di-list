import propTypes from 'prop-types'

import { Input } from '@/components/atoms/Input'

import { SendHorizontal, ListOrdered } from 'lucide-react'
import { Overlay } from '../atoms/Overlay'
import { useOutsideClick } from '../../hooks/useOutsideClick'
import { useState, useEffect, useRef } from 'react'
import { Actions } from './Actions'
import { CircleButton } from '../atoms/CircleButton'

const ACTIONS = [
  // {
  //   name: 'Date',
  //   icon: '<Calendar/>',
  // },
  {
    name: 'Sub-task',
    icon: <ListOrdered className="text-gray-400" />,
  },
  // {
  //   name: 'etc',
  //   icon: <etc />,
  // }
]

export const Form = ({
  toDo,
  handleChange,
  handleSubmit,
  handleShowForm,
  handleSetCategory,
}) => {
  const refForm = useOutsideClick(() => {
    handleShowForm()
  })

  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  const handleOnSubmit = e => {
    handleSubmit(e)
    handleShowForm()
  }

  const [subTasks, setSubTasks] = useState([])

  const addSubTask = () => {
    setSubTasks(prev => [
      ...prev,
      <Input
        key={subTasks.length}
        type={'text'}
        // name={'sub-task'}
        // id={'sub-task'}
        placeholder={'Input sub-task here'}
        // value={toDo.subTasks[subTasks.length].subTask || ''}
        // onChange={handleChange}
      />,
    ])
  }

  return (
    <Overlay position={'justify-center items-end'}>
      <form
        ref={refForm}
        action=""
        onSubmit={e => handleOnSubmit(e)}
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

        {subTasks && (
          <div className="flex flex-col gap-2 pl-4">
            {subTasks.map(subTask => {
              return subTask
            })}
          </div>
        )}

        <Actions
          actions={ACTIONS}
          handleAddSubTask={addSubTask}
          handleSetCategory={handleSetCategory}
        />

        <CircleButton
          className="absolute bottom-1 right-4"
          onClick={e => handleOnSubmit(e)}
        >
          <SendHorizontal className="rotate-270" />
        </CircleButton>
      </form>
    </Overlay>
  )
}

Form.propTypes = {
  toDo: propTypes.object,
  handleChange: propTypes.func,
  handleSubmit: propTypes.func,
  handleShowForm: propTypes.func,
  handleSetCategory: propTypes.func,
}
