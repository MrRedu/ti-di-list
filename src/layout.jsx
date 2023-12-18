import { Toaster } from 'sonner'

export const Layout = ({ children }) => {
  return (
    <>
      <header className="bg-amber-400 h-12 flex items-center justify-center text-white text-lg">
        HEADER
      </header>
      <main className="p-2 ">{children}</main>
      <Toaster
        toastOptions={{
          className: 'my-toast',
          style: {
            fontFamily: 'var(--f-main)',
            backgroundColor: 'var(--c-amber-400)',
            color: 'var(--c-neutral-800)',
          },
        }}
        theme="dark"
      />
      <footer className="bg-amber-400 h-12 flex items-center justify-center text-white text-lg">
        FOOTER
      </footer>
    </>
  )
}
