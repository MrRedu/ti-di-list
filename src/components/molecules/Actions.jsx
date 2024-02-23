import propTypes from 'prop-types'
import { Trash2, ChevronDown } from 'lucide-react'
export const Actions = ({
  id,
  showDescription,
  handleShowDescription,
  handleDelete,
  title,
}) => {
  return (
    <div className="flex justify-center items-center ">
      <button onClick={() => handleDelete(id, title)} className="p-2">
        <Trash2 className="text-black dark:text-white" />
      </button>
      <button onClick={handleShowDescription} className="p-2">
        <ChevronDown
          className={`
      ${showDescription ? 'rotate-180' : ''}
      text-black dark:text-white
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
  title: propTypes.string.isRequired,
}
