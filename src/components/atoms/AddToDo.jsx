import { Plus } from 'lucide-react'
import propTypes from 'prop-types'
import { Tooltip } from './Tooltip/Tooltip'

export const AddToDo = ({ onClick }) => {
  return (
    <button
      type="button"
      className="
        w-11 h-11 rounded-full 
        grid place-content-center
        fixed bottom-20 right-5
        text-gray-100

        bg-teal-600 hover:bg-teal-700"
      onClick={onClick}
    >
      <Tooltip>
        <Plus />
      </Tooltip>
    </button>
  )
}

AddToDo.propTypes = {
  onClick: propTypes.func.isRequired,
}
