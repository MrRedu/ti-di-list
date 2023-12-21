import propTypes from 'prop-types'

export const ToDoView = ({ title, description, tags }) => {
  return (
    <>
      {title && (
        <div className="dark:bg-teal-800 rounded flex flex-col p-4 ">
          <span className="font-bold dark:text-teal-100">{title}</span>
          <span>{description}</span>
          {tags.length > 0 && (
            <ul className="flex gap-1">
              {tags.map(tag => (
                <li className="p-1 bg-teal-200 rounded flex gap-2" key={tag}>
                  <button className=" bg-teal-400 rounded px-2" type="button">
                    X
                  </button>
                  <span>{tag}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </>
  )
}

ToDoView.propTypes = {
  title: propTypes.string,
  description: propTypes.string,
  tags: propTypes.array,
}
