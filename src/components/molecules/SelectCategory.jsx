import { useState } from 'react'

const CATEGORIES = [
  { id: '1', name: 'No category' },
  { id: '2', name: 'Personal' },
  { id: '3', name: 'Work' },
  { id: '4', name: 'Home' },
  { id: '5', name: 'Wishlist' },
  { id: '6', name: 'Birthday' },
]

export const SelectCategory = () => {
  const [showList, setShowList] = useState(false)

  const handleShowList = () => {
    setShowList(!showList)
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
        {'No category'}
      </button>
      {showList && (
        <div
          className="
        absolute -top-48 
        h-40 w-40
        scroll-smooth overflow-y-auto
        rounded

        dark:bg-c-gray-700"
        >
          <div className="flex flex-col">
            {CATEGORIES.map(({ name }) => (
              <button
                type="button"
                key={name}
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
