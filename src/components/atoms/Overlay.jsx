import propTypes from 'prop-types'
export const Overlay = ({ children }) => {
  return (
    <div
      className="
        flex justify-center items-end fixed top-0 left-0 right-0 bottom-0 bg-black/90 w-full h-full z-10"
    >
      {children}
    </div>
  )
}
Overlay.propTypes = {
  children: propTypes.node.isRequired,
}
