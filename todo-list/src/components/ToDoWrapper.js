import React, {useState} from 'react';
import { v4 as uuidv4} from 'uuid';
import ToDoForm from './ToDoForm';
import EditToDoForm from './EditToDoForm';
import ToDo from './ToDo';

const ToDoWrapper = () => {
  const [toDos, setToDos] = useState([])

  const addToDo = (toDo) => {
    setToDos([
      {
        id: uuidv4(),
        task: toDo,
        completd: false,
        isEditing: false
      }
    ])
  }

  const editTask = (task, id) => {
    setToDos(toDos.map((toDo) => toDo.id === id ? {isEditing: !toDo.isEditing} : toDo))
  }

  const editToDo = (id) => {
    setToDos(
      toDos.map((toDo) => toDo.id === id ? {isEditing: !toDo.isEditing} : toDo)
    )
  }

  const toggleComplete = (id) => {
    setToDos(
      toDos.map((toDo) => toDo.id === id ? {completd: !toDo.completd} : toDo)
    )
  }

  const deleteToDo = (id) => setToDos(toDos.filter((toDo) => toDo.id !== id))

  return (
    <div className='ToDoWrapper'>
      <h1>To Do App</h1>

      <ToDoForm addToDo={addToDo}/>
      {toDos.map((toDo) => toDo.isEditing ? (
        <EditToDoForm editToDo={editTask} task={toDo}/>
      ) : (
        <ToDo 
          key={toDo.id}
          task={toDo}
          deleteToDo={deleteToDo}
          editToDo={editToDo}
          toggleComplete={toggleComplete}
          />
      ))}
    </div>
  )
}

export default ToDoWrapper;
