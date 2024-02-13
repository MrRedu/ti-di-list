import propTypes from 'prop-types'
import { Trash2, ChevronDown } from 'lucide-react'
export const Actions = ({
  id,
  showDescription,
  handleShowDescription,
  handleDelete,
}) => {
  return (
    <div className="flex justify-center items-center ">
      <button onClick={() => handleDelete(id)} className="p-2">
        <Trash2 />
      </button>
      <button onClick={handleShowDescription} className="p-2">
        <ChevronDown
          className={`
      ${showDescription ? 'rotate-180' : ''}
      `}
        />
      </button>
    </div>
  )
}
Actions.propTypes = {
  id: propTypes.string.isRequired,
  showDescription: propTypes.bool.isRequired,
  handleShowDescription: propTypes.func.isRequired,
  handleDelete: propTypes.func.isRequired,
}
