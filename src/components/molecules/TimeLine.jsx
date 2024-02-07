import propTypes from 'prop-types'
import { TimeLineItem } from './TimeLineItem'

const defaultObject = [
  {
    id: '999',
    title: 'Type your title',
    description: 'Type your description',
    icon: '<ICON/>',
  },
]

export const TimeLine = ({ objects = defaultObject }) => {
  return (
    <div className="w-full py-16">
      <ul className="flex flex-col w-full px-4 gap-4">
        {objects.map(item => (
          <TimeLineItem
            key={item.id}
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        ))}
      </ul>
    </div>
  )
}

TimeLine.propTypes = {
  objects: propTypes.array,
}
