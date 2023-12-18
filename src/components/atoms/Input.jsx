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
      className="border border-gray-300 p-2 rounded"
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
