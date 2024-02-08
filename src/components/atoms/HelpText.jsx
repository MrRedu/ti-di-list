import propTypes from 'prop-types'
export const HelpText = ({ children, className = '', ...props }) => (
  <p {...props} className={`text-sm text-gray-500 ${className}`}>
    {children}
  </p>
)
HelpText.propTypes = {
  children: propTypes.node.isRequired,
  className: propTypes.string,
}
