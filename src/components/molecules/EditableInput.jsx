import propTypes from 'prop-types'
import { useState, useRef } from 'react'
import Linkify from 'linkify-react'
import { MAX_LENGTH_INPUTS } from '@/utils/const'
import { useDynamicTextareaSize } from '@/hooks/useDynamicTextareaSize'
import { HelpText } from '../atoms/HelpText'

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
  useDynamicTextareaSize(textareaRef, inputValue)

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
        <span
          className={`cursor-pointer block ${className || ''}`}
          onClick={handleClick}
        >
          {value ||
            (isTextarea ? (
              <HelpText>Empty description (click to add)</HelpText>
            ) : (
              <HelpText>No title (click to add)</HelpText>
            ))}
        </span>
      </Linkify>
    )
  }

  if (isTextarea) {
    return (
      <textarea
        ref={textareaRef}
        className="w-full outline-none resize-none bg-transparent"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        onBlur={() => {
          setEditing(false)
          onChange(inputValue)
        }}
        autoFocus
        maxLength={MAX_LENGTH_INPUTS.description}
      />
    )
  }

  return (
    <input
      className="w-full outline-none h-4 bg-transparent dark:text-white"
      type={type}
      value={inputValue}
      onChange={handleInputChange}
      onKeyDown={handleKeyDown}
      onBlur={() => {
        setEditing(false)
        onChange(inputValue)
      }}
      autoFocus
      maxLength={MAX_LENGTH_INPUTS.title}
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
