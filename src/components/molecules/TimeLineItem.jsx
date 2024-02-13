import propTypes from 'prop-types'
export const TimeLineItem = ({ icon, title, description }) => {
  return (
    <li className="relative flex flex-col">
      <div className="flex items-center gap-4">
        <span className="relative z-[2] w-max flex-shrink-0 overflow-hidden rounded-full bg-black p-2 text-white">
          {icon}
        </span>
        <h4 className="block text-base antialiased font-semibold">{title}</h4>
      </div>
      <div className="flex gap-12">
        <span className="flex-shrink-0 invisible h-full pointer-events-none"></span>
        <div>
          <p className="block font-normal text-sm text-gray-400">
            {description}
          </p>
        </div>
      </div>
    </li>
  )
}
TimeLineItem.propTypes = {
  icon: propTypes.node,
  title: propTypes.string,
  description: propTypes.string,
}
