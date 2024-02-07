import { Toaster } from 'sonner'

// Thanks, emilkowalski!
// https://sonner.emilkowal.ski/

export const ToasterSonner = () => {
  return (
    <Toaster
      toastOptions={{
        className: 'my-toast',
        style: {
          fontFamily: 'var(--f-main)',
          backgroundColor: 'yellow',
          border: '1px solid red',
          boxShadow: '0 25px 50px -12px rgb(0 0 0 / 0.25)',
        },
      }}
      // theme="light"
      position="top-center"
    />
  )
}
