import propTypes from 'prop-types'

import { SelectCategory } from './SelectCategory'

export const Actions = ({ actions, handleAddSubTask, handleSetCategory }) => {
  return (
    <div className="flex gap-4 relative">
      <SelectCategory handleSetCategory={handleSetCategory} />
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
  handleSetCategory: propTypes.func,
}
