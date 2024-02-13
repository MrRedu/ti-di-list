import propTypes from 'prop-types'
export const Section = ({ children, className }) => {
  return <div className={`px-8 sm:px-8 ${className}`}>{children}</div>
}
Section.propTypes = {
  children: propTypes.node,
  className: propTypes.string,
}
