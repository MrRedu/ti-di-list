import propTypes from 'prop-types'

export const ToDos = ({ children }) => {
  return <ul className="flex flex-col gap-2">{children}</ul>
}

ToDos.propTypes = {
  children: propTypes.node,
}
