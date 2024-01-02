import propTypes from 'prop-types'
import { Tooltip } from './Tooltip/Tooltip'

export const CircleButton = ({ onClick, children, tooltip, className }) => {
  return (
    <button
      type="button"
      className={`
          w-11 h-11 rounded-full 
          grid place-content-center
          text-gray-100
  
          bg-teal-600 hover:bg-teal-700
          
          ${className}
          `}
      onClick={onClick}
    >
      <Tooltip text={tooltip}>{children}</Tooltip>
    </button>
  )
}
CircleButton.propTypes = {
  onClick: propTypes.func.isRequired,
  children: propTypes.node.isRequired,
  tooltip: propTypes.string,
  className: propTypes.string,
}
