import { useState } from 'react'

import React from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTask] = useState([{id:1, 
    text:"Test 1", day: 'day 1', reminder: true},
    {id:2, text:"Test 2", day:'day 2', reminder: true},
    {id:3, text:"Test 3", day:'day 3', reminder: false}])

  //Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000 +1)
    const newTask = {id, ...task}

    setTask([...tasks, newTask])
  }
  
    // Delete Task
  const deleteTask = (id) => {
    setTask(tasks.filter( (task) => task.id !== id ))
  }

  //Toggle reminder
  const toggleReminder = (id) => {
    setTask( tasks.map( (task) => task.id === id ? {...task, reminder: !task.reminder} : task ) )
  }

  return (
    <div className="container">
      <Header 
      onAdd={ () => setShowAddTask(!showAddTask)} 
      showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>) : ('No tasks to show')}
    </div>
  );
}

export default App;
