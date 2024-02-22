import proTypes from 'prop-types'

import { THEME_SWITCHER_LUCIDE } from '@/libs/lucide'
import { Laptop, Moon, Sun } from 'lucide-react'
import { useState, useEffect } from 'react'

const Button = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`
        p-1
        ${className}`}
    >
      {children}
    </button>
  )
}

export const ThemeSwitcher = ({ className }) => {
  const getSystemTheme = () => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark'
    } else {
      return 'light'
    }
  }
  const [theme, setTheme] = useState(getSystemTheme)

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  const handleDarkMode = () => {
    setTheme('dark')
  }
  const handleLightMode = () => {
    setTheme('light')
  }
  const handleSystemMode = () => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }

  const options = [
    {
      name: 'light',
      icon: (
        <Sun
          size={THEME_SWITCHER_LUCIDE.size}
          strokeWidth={THEME_SWITCHER_LUCIDE.strokeWidth}
          className="
          text-black
          dark:text-gray-300
          "
        />
      ),
      handleTheme: handleLightMode,
    },
    {
      name: 'system',
      icon: (
        <Laptop
          size={THEME_SWITCHER_LUCIDE.size}
          strokeWidth={THEME_SWITCHER_LUCIDE.strokeWidth}
          className="
          text-black
          dark:text-gray-300
          "
        />
      ),
      handleTheme: handleSystemMode,
    },
    {
      name: 'dark',
      icon: (
        <Moon
          size={THEME_SWITCHER_LUCIDE.size}
          strokeWidth={THEME_SWITCHER_LUCIDE.strokeWidth}
          className="
          text-black
          dark:text-gray-300
          "
        />
      ),
      handleTheme: handleDarkMode,
    },
  ]

  return (
    <>
      <div
        className={`
      flex gap-2 p-1 rounded-full 
      
      border-2 
      ${className}
      `}
      >
        {options.map(({ name, icon, handleTheme }) => (
          <Button key={name} onClick={handleTheme} className="">
            {icon}
          </Button>
        ))}
      </div>
    </>
  )
}

ThemeSwitcher.propTypes = {
  children: proTypes.node,
  onClick: proTypes.func,
  className: proTypes.string,
}

Button.propTypes = {
  children: proTypes.node,
  onClick: proTypes.func,
  className: proTypes.string,
}
