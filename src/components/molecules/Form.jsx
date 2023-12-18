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
        className="border border-neutral-800 p-2 rounded bg-amber-300"
      >
        Add
      </button>
      {/* <span>{JSON.stringify(toDo)}</span> */}
    </form>
  )
}

Form.propTypes = {
  toDo: propTypes.object,
  handleChange: propTypes.func,
  handleSubmit: propTypes.func,
}
