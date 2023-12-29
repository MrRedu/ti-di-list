import propTypes from 'prop-types'

export const Input = ({ type, name, id, placeholder, value, onChange }) => {
  return (
    <input
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="
      p-3 rounded w-full
      text-gray-100
      
      focus:outline-none
      dark:bg-c-template-gray-400

      "
    />
  )
}

Input.propTypes = {
  type: propTypes.string,
  name: propTypes.string,
  id: propTypes.string,
  placeholder: propTypes.string,
  value: propTypes.string,
  onChange: propTypes.func,
}
