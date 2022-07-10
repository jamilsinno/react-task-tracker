import {FaTimes} from 'react-icons/fa'
import {Link} from 'react-router-dom'

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div className={`task ${task.reminder === true ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
      <h3>
          {task.text} <FaTimes style={{ color:'red', cursor:'pointer'}} onClick={() => onDelete(task.id)}/>
      </h3>
      <p>{task.day}</p>
      <p><Link to={`/task/${task.id}`}>View Details</p>
    </div>
  )
}

export default Task