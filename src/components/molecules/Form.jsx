import propTypes from 'prop-types'

import { Input } from '../atoms/Input'

import { SendHorizontal, ListOrdered } from 'lucide-react'
import { Overlay } from '../atoms/Overlay'

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

const Actions = () => {
  return (
    <div className="flex gap-4">
      <button
        type="button"
        className="
      px-3 rounded-3xl

      text-gray-400

      dark:bg-c-template-gray-400
      "
      >
        {'No category'}
      </button>
      {ACTIONS.map(({ name, icon }) => (
        <button key={name} type="button">
          {icon}
        </button>
      ))}
    </div>
  )
}

export const Form = ({
  toDo,
  handleChange,
  handleSubmit,
  handleAddTag,
  handleShowForm,
}) => {
  return (
    <Overlay onClick={handleShowForm}>
      <form
        action=""
        onSubmit={e => {
          handleSubmit(e)
          handleShowForm(e)
        }}
        className="
        w-full h-auto p-4
        align-self-end relative
        rounded-tr-2xl rounded-tl-2xl
        flex flex-col gap-2
        
        dark:bg-c-gray-700"
      >
        <Input
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
            handleShowForm(e)
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

        <button
          onClick={handleShowForm}
          type="button"
          className="bg-red-800 p-4"
        >
          CLOSE
        </button>
      </form>
    </Overlay>
  )
}

Form.propTypes = {
  toDo: propTypes.object,
  handleChange: propTypes.func,
  handleSubmit: propTypes.func,
  handleAddTag: propTypes.func,
  handleShowForm: propTypes.func,
}
