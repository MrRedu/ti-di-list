import propTypes from 'prop-types'

import { Input } from '../atoms/Input'

export const Form = ({ toDo, handleChange, handleSubmit }) => {
  return (
    <form action="" onSubmit={handleSubmit} className="flex gap-2">
      <Input
        type={'text'}
        name={'title'}
        id={'title'}
        placeholder={'Add a new ToDo'}
        value={toDo.title || ''}
        onChange={handleChange}
      />
      <button
        type="submit"
        onClick={handleSubmit}
        className="
        border p-2 rounded shadow-md font-bold text-gray-100 bg-teal-500
         dark:border-teal-800"
      >
        Add
      </button>
    </form>
  )
}

Form.propTypes = {
  toDo: propTypes.object,
  handleChange: propTypes.func,
  handleSubmit: propTypes.func,
}
