import { useState } from 'react'
import { useOutsideClick } from '@/hooks/useOutsideClick'

const CATEGORIES = [
  { id: 'no-category', name: 'No category' },
  { id: 'personal', name: 'Personal' },
  { id: 'work', name: 'Work' },
  { id: 'home', name: 'Home' },
  { id: 'wishlist', name: 'Wishlist' },
  { id: 'birthday', name: 'Birthday' },
]

export const SelectCategory = () => {
  const [showList, setShowList] = useState(false)
  const [text, setText] = useState(CATEGORIES[0].name)

  const handleShowList = () => {
    setShowList(!showList)
  }

  const refList = useOutsideClick(() => {
    setShowList(false)
  })

  const handleCategory = category => {
    setText(category)
  }

  return (
    <>
      <button
        onClick={handleShowList}
        type="button"
        className="
          px-3 rounded-3xl
    
          text-gray-400
    
          dark:bg-c-template-gray-400
          "
      >
        <span
          className={`text-sm font-bold 
          ${text === 'No category' && 'text-gray-300'} 
          text-c-softblue-100
          `}
        >
          {text}
        </span>
      </button>
      {showList && (
        <div
          className="
        absolute -top-44 
        h-40 w-40
        scroll-smooth overflow-y-auto
        rounded

        dark:bg-c-gray-700"
          ref={refList}
        >
          <div className="flex flex-col">
            {CATEGORIES.map(({ id, name }) => (
              <button
                type="button"
                key={id}
                onClick={() => {
                  handleCategory(name)
                  setShowList(false)
                }}
                className="
                px-4 py-1 
                border-none text-left 
                
                text-gray-100
                
                active:bg-c-template-gray-300
                active:text-c-softblue-100
                "
              >
                {name}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  )
}
