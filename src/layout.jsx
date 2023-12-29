import proTypes from 'prop-types'

import { Toaster } from 'sonner'
import { ThemeSwitcher } from './components/molecules/ThemeSwitcher'

export const Layout = ({ children }) => {
  return (
    <>
      <header
        className="
        p-2 items-center justify-between text-white text-lg
        
        bg-teal-400
        dark:bg-teal-950
        "
      >
        <h1>TEXT 👀</h1>
      </header>
      <Toaster
        toastOptions={{
          className: 'my-toast',
          style: {
            fontFamily: 'var(--f-main)',
            color: 'var(--c-neutral-800)',
            backgroundColor: 'var(--c-teal-200)',
            border: '1px solid var(--c-teal-800)',
          },
        }}
        theme="light"
        position="top-center"
      />
      <main className="p-2">{children}</main>
      <footer
        className="p-2 flex items-center justify-between text-white text-lg
      
      bg-teal-400
      dark:bg-teal-950
      "
      >
        <span>FOOTER</span>
        <ThemeSwitcher />
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: proTypes.node,
}
