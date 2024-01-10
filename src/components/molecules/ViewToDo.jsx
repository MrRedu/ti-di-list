import propTypes from 'prop-types'

export const ViewToDo = ({
  id,
  title,
  category,
  isCompleted,
  subTasks,
  handleDelete,
}) => {
  return (


    
    <>
      <div
        className="
      flex flex-col gap-2 p-4 h-auto 
      fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
      
      bg-amber-200"
      >
        <p>{id}</p>
        <h3>{title}</h3>
        <p>{category}</p>
        <p>{isCompleted}</p>
        <p>subTasks</p>
        {/* <ul>
        {subTasks.map(subTask => (
          <li key={subTask.id}>{subTask.subTask}</li>
        ))}
      </ul> */}
        <button type="button" onClick={() => handleDelete(id)}>
          Delete
        </button>
      </div>
    </>
  )
}

ViewToDo.propTypes = {
  id: propTypes.string,
  title: propTypes.string,
  category: propTypes.string,
  isCompleted: propTypes.bool,
  subTasks: propTypes.array,
  handleDelete: propTypes.func,
}
