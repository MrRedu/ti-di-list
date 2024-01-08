import propTypes from 'prop-types'

import { SelectCategory } from './SelectCategory'

export const Actions = ({ actions, handleAddSubTask }) => {
  return (
    <div className="flex gap-4 relative">
      <SelectCategory />
      {actions.map(({ name, icon }) => (
        <button key={name} type="button" onClick={handleAddSubTask}>
          {icon}
        </button>
      ))}
    </div>
  )
}

Actions.propTypes = {
  actions: propTypes.array,
  handleAddSubTask: propTypes.func,
}
