import propTypes from 'prop-types'
import { Menu as MenuIcon } from 'lucide-react'
import { ThemeSwitcher } from '@/components/molecules/ThemeSwitcher'

const PusherFooter = () => {
  return <div className="h-16" />
}

export const Footer = ({ handleShowSettings }) => {
  return (
    <>
      <PusherFooter />
      <footer
        className="p-2 px-4 
      fixed bottom-0 left-0 right-0
      flex items-center justify-between 
      text-white 
  
  bg-teal-400
  dark:bg-c-template-gray-300
  "
      >
        <button type="button" onClick={handleShowSettings}>
          <MenuIcon />
        </button>
        <ThemeSwitcher />
      </footer>
    </>
  )
}
Footer.propTypes = {
  handleShowSettings: propTypes.func.isRequired,
}
