import propTypes from 'prop-types'

import { useState } from 'react'
import { Input } from '../atoms/Input'

export const Hashtags = ({ handleAddTag }) => {
  const [tag, setTag] = useState('')

  return (
    <>
      <Input
        type="text"
        name="tag"
        id="tag"
        placeholder="Tag"
        value={tag}
        onChange={e => setTag(e.target.value)}
      />

      <button
        type="button"
        onClick={e => handleAddTag(e, tag)}
        className="        
        p-2 rounded shadow-sm font-bold border

        text-gray-100 

        bg-teal-500
        dark:bg-teal-800

        border-teal-100
        dark:border-teal-800"
      >
        Add hashtag
      </button>
    </>
  )
}

Hashtags.propTypes = {
  handleAddTag: propTypes.func.isRequired,
}
