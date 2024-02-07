import { Layout } from './layout'

import { WeatherWidget } from './components/organisms/WeatherWidget'
import { ToDoList } from '@/components/organisms/ToDoList'

export const TiDiListApp = () => {
  return (
    <>
      <Layout>
        <div
          className="
        flex
        flex-col-reverse md:flex-row
        w-full

        "
        >
          <WeatherWidget />
          <ToDoList />
        </div>
      </Layout>
    </>
  )
}
