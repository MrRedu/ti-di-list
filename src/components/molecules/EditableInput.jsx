import { useDynamicTextareaSize } from '@/hooks/useDynamicTextareaSize'
import Linkify from 'linkify-react'
import propTypes from 'prop-types'
import { useState, useRef } from 'react'

export const EditableInput = ({
  className,
  isTextarea = false,
  value,
  type,
  onChange,
}) => {
  const [editing, setEditing] = useState(false)
  const [inputValue, setInputValue] = useState(value)
  const textareaRef = useRef(null)
  useDynamicTextareaSize(textareaRef, inputValue, 200)

  const handleInputChange = event => {
    setInputValue(event.target.value)
  }

  const handleKeyDown = event => {
    if (event.key === 'Enter') {
      setEditing(false)
      onChange(inputValue)
    }
  }

  const handleClick = () => {
    setEditing(true)
  }

  if (!editing) {
    return (
      <Linkify
        options={{
          target: '_blank',
          className: 'underline ',
        }}
      >
        <span className={`cursor-pointer ${className}`} onClick={handleClick}>
          {value || 'Empty'}
        </span>
      </Linkify>
    )
  }

  if (isTextarea) {
    return (
      <textarea
        ref={textareaRef}
        className="w-full outline-none resize-none"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        onBlur={() => {
          setEditing(false)
          onChange(inputValue)
        }}
        autoFocus
      />
    )
  }

  return (
    <input
      className="w-full outline-none"
      type={type}
      value={inputValue}
      onChange={handleInputChange}
      onKeyDown={handleKeyDown}
      onBlur={() => {
        setEditing(false)
        onChange(inputValue)
      }}
      autoFocus
    />
  )
}

EditableInput.propTypes = {
  className: propTypes.string,
  isTextarea: propTypes.bool,
  value: propTypes.string,
  type: propTypes.string,
  onChange: propTypes.func,
}
