import propTypes from 'prop-types'

export const ToDos = ({ children }) => {
  return (
    <ul
      className="
  flex flex-col gap-2
  max-h-[calc(100vh-22rem)] overflow-y-auto
  "
    >
      {children}
    </ul>
  )
}

ToDos.propTypes = {
  children: propTypes.node,
}
