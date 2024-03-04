import propTypes from 'prop-types'
export const TimeLineItem = ({ icon, title, description }) => {
  return (
    <li className="relative flex flex-col">
      <div className="flex items-center gap-4">
        <span
          className="
        relative z-[2] w-max flex-shrink-0 overflow-hidden rounded-full p-2

         bg-slate-950 
         dark:bg-slate-200
         
         text-slate-400
         dark:text-slate-700
         "
        >
          {icon}
        </span>
        <h4 className="block text-base antialiased font-semibold text-slate-800 dark:text-slate-300">
          {title}
        </h4>
      </div>
      <div className="flex gap-12">
        <span className="flex-shrink-0 invisible h-full pointer-events-none"></span>
        <div>
          <p className="block font-normal text-sm text-slate-500">
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
