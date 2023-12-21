import propTypes from 'prop-types'

import { Input } from '../atoms/Input'
import { Hashtags } from './Hashtags'

export const Form = ({ toDo, handleChange, handleSubmit, handleAddTag }) => {
  return (
    <form action="" onSubmit={handleSubmit} className="grid gap-2 grid-cols-2">
      <Input
        type={'text'}
        name={'title'}
        id={'title'}
        placeholder={'Title'}
        value={toDo.title || ''}
        onChange={handleChange}
      />
      <Input
        type={'text'}
        name={'description'}
        id={'description'}
        placeholder={'Add a short description'}
        value={toDo.description || ''}
        onChange={handleChange}
      />
      <Hashtags handleAddTag={handleAddTag} />

      <button
        type="submit"
        onClick={handleSubmit}
        className="
        p-2 rounded shadow-sm font-bold border w-fill

        text-gray-100 

        bg-teal-500
        dark:bg-teal-800

        border-teal-100
        dark:border-teal-800"
      >
        Add ToDo
      </button>
    </form>
  )
}

Form.propTypes = {
  toDo: propTypes.object,
  handleChange: propTypes.func,
  handleSubmit: propTypes.func,
  handleAddTag: propTypes.func,
}
