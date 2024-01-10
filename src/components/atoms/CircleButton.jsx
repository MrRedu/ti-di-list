import propTypes from 'prop-types'

export const CircleButton = ({ onClick, children, className }) => {
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
      {children}
    </button>
  )
}
CircleButton.propTypes = {
  onClick: propTypes.func.isRequired,
  children: propTypes.node.isRequired,
  className: propTypes.string,
}
