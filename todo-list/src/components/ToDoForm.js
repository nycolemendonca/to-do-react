import React, {useState} from 'react';

const ToDoForm = ({addToDo}) => {
  const [value, setValue] = useState('')

  const handleSubmit = (e) => {
    
    // preventDefaul() cancels the event if it is cancelable
    e.preventDefault();

    if (value) {
      // Add To Do
      addToDo(value)

      // Clear form after submission
      setValue('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className='ToDoForm'>
      <input type='text' value={value} onChange={(e) => setValue(e.target.value)} className='ToDoInput' placeholder='Task of the day'/>
      <button type='submit' className='ToDoBtn'>Add Task</button>
    </form>
  )
}

export default ToDoForm;