import proTypes from 'prop-types'

import { Footer } from '@/components/organisms/ui/Footer'
import { Header } from '@/components/organisms/ui/Header'
import { ToasterSonner } from '@/components/organisms/ui/ToasterSonner'
import { ThemeSwitcher } from '@/components/molecules/ThemeSwitcher'

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <ToasterSonner />
      <ThemeSwitcher
        className="
      absolute 
      bottom-20 right-4
      "
      />
      <main
        className="
      min-h-[calc(100dvh-8rem)]
      max-w-[1280px]
      "
      >
        {children}
      </main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: proTypes.node,
}
