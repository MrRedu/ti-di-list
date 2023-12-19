import proTypes from 'prop-types'

import { Toaster } from 'sonner'
import { ThemeSwitcher } from './components/molecules/ThemeSwitcher'

export const Layout = ({ children }) => {
  return (
    <>
      <header
        className="
        p-2 bg-teal-400 flex items-center justify-between text-white text-lg"
      >
        <h1>TEXT 👀</h1>
        <ThemeSwitcher />
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
      />
      <main className="p-2 ">{children}</main>
      <footer className="bg-teal-400 h-12 flex items-center justify-center text-white text-lg">
        FOOTER
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: proTypes.node,
}
