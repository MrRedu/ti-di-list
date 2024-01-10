import propTypes from 'prop-types'

export const ViewToDo = ({
  id,
  viewToDoRef,
  title,
  category,
  isCompleted,
  subTasks,
  handleDelete,
}) => {
  return (
    <>
      <div
        ref={viewToDoRef}
        className="
      flex flex-col gap-2 p-4 h-auto 
      fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
      
      bg-amber-200"
      >
        <h3>{title}</h3>
        {category && <span className="">{category}</span>}
        {/* <span>{`${isCompleted ? 'Completed' : 'Not Completed'}`}</span> */}
        <ul>
          {subTasks.map(subTask => (
            <li key={subTask.id}>{subTask.title}</li>
          ))}
        </ul>
        <button type="button" onClick={() => handleDelete(id)}>
          Delete
        </button>
      </div>
    </>
  )
}

ViewToDo.propTypes = {
  id: propTypes.string,
  viewToDoRef: propTypes.any,
  title: propTypes.string,
  category: propTypes.string,
  isCompleted: propTypes.bool,
  subTasks: propTypes.array,
  handleDelete: propTypes.func,
}
