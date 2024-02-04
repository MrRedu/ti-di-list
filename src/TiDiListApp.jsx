import { Layout } from './layout'
import { useState } from 'react'

import { Settings } from '@/components/organisms/ui/Settings'
import { WeatherWidget } from './components/organisms/WeatherWidget'
import { ToDoList } from '@/components/organisms/ToDoList'

export const TiDiListApp = () => {
  const [showSettings, setShowSettings] = useState(false)

  const handleShowSettings = () => {
    setShowSettings(!showSettings)
  }

  return (
    <>
      <Layout handleShowSettings={handleShowSettings}>
        <div
          className="
        grid grid-cols-1 md:grid-cols-2
        gap-8
        "
        >
          <WeatherWidget />
          <ToDoList />
        </div>

        {showSettings && <Settings handleShowSettings={handleShowSettings} />}
      </Layout>
    </>
  )
}
