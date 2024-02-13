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
      <div
        className="
      min-h-[calc(100dvh-8rem)]
      w-full
      "
      >
        <main className="max-w-[920px] m-auto">{children}</main>
      </div>
      <ThemeSwitcher
        className="
      absolute 
      top-4 right-8 md:right-12
      "
      />
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: proTypes.node,
}
