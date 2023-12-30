import propTypes from 'prop-types'
export const Overlay = ({ children, position }) => {
  return (
    <div
      className={`
        flex ${position}
        fixed top-0 left-0 right-0 bottom-0
        w-full h-full

      bg-black/60
        z-10`}
    >
      {children}
    </div>
  )
}
Overlay.propTypes = {
  children: propTypes.node.isRequired,
  position: propTypes.string,
}
