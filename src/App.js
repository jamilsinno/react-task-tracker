import { useState } from 'react'

import React from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

const App = () => {
  const [tasks, setTask] = useState([{id:1, 
    text:"Test 1", day: 'day 1', reminder: true},
    {id:2, text:"Test 2", day:'day 2', reminder: true},
    {id:3, text:"Test 3", day:'day 3', reminder: false}])

  // Delete Task
  const deleteTask = (id) => {
    setTask(tasks.filter( (task) => task.id !== id ))
  }

  //Toggle reminder
  const toggleReminder = (id) => {
    console.log(id)
  }

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'No tasks to show'}
    </div>
  );
}

export default App;
