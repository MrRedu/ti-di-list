import proTypes from 'prop-types'

import { Footer } from '@/components/organisms/ui/Footer'
import { Header } from '@/components/organisms/ui/Header'
import { ToasterSonner } from '@/components/organisms/ui/ToasterSonner'

export const Layout = ({ children, handleShowSettings }) => {
  return (
    <>
      <Header />
      <ToasterSonner />
      <main className="p-2">{children}</main>
      <Footer handleShowSettings={handleShowSettings} />
    </>
  )
}

Layout.propTypes = {
  children: proTypes.node,
  handleShowSettings: proTypes.func,
}
