import propTypes from 'prop-types'

export const ToDos = ({ className, children }) => {
  return (
    <ul
      className={`
  ${className}
  flex flex-col gap-2
  max-h-[calc(100vh-22rem)] overflow-y-auto
  `}
    >
      {children}
    </ul>
  )
}

ToDos.propTypes = {
  className: propTypes.string,
  children: propTypes.node,
}
