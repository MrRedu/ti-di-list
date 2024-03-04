import propTypes from 'prop-types'
export const HelpText = ({ children, className = '', ...props }) => (
  <span
    {...props}
    className={`text-sm text-slate-500 dark:text-slate-400 ${className}`}
  >
    {children}
  </span>
)
HelpText.propTypes = {
  children: propTypes.node.isRequired,
  className: propTypes.string,
}
