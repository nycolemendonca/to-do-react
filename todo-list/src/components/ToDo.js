import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const ToDo = ({task, deleteToDo, editToDo, toggleComplete}) => {
  return (
    <div className='toDo'>
      <p 
        className={`${task.completed ? 'completed' : ""}`} 
        onClick={() => toggleComplete(task.id)}>
          {task.task}
      </p>

      <div>
        <FontAwesomeIcon icon={faPenToSquare} onClick={() => editToDo(task.id)} />
        <FontAwesomeIcon icon={faTrash} onClick={() => deleteToDo(task.id)} />
      </div>
    </div>
  )
}

export default ToDo;
