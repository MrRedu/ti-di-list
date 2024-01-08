import { Layout } from './layout'
import { useState } from 'react'
import { ToDoList } from '@/components/organisms/ToDoList'
import { Settings } from '@/components/organisms/Settings'

export const TiDiListApp = () => {
  const [showSettings, setShowSettings] = useState(false)

  const handleShowSettings = () => {
    setShowSettings(!showSettings)
  }

  return (
    <>
      <Layout handleShowSettings={handleShowSettings}>
        <ToDoList />
        {showSettings && <Settings handleShowSettings={handleShowSettings} />}
      </Layout>
    </>
  )
}
