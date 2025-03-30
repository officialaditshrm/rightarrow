import React, { useState } from 'react';
import TopBar from '../components/TopBar';
import Footer from '../components/Footer';
import removeimage from '../images/delete.png';

function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleNewTask = (event) => {
    event.preventDefault();
    const startTime = prompt('Enter start time (HH:MM format):');
    const endTime = prompt('Enter end time (HH:MM format):');
    const timeFormat = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/;
    if (startTime && endTime){
      if (!startTime.match(timeFormat)) {
        alert('Invalid start time format. Please enter time in HH:MM format.');
        return;
      }

      if (!endTime.match(timeFormat)) {
        alert('Invalid end time format. Please enter time in HH:MM format.');
        return;
      }
    }
    
    if (startTime && endTime) {
      const task = {
        taskName: newTask,
        completed: false,
        addedToTimetable: true,
        startTime,
        endTime
      };
      setTasks([...tasks, task]);
    }
    setNewTask('');
  };
  const handleRemoveTask = (index) => {
    setTasks(tasks.filter((task, i) => i !== index));
  };
  const toggleTask = (index) => {
    setTasks(tasks.map((task, i) => {
      if (i === index) {
        return { ...task, completed: !task.completed };
      }
      return task;
    }));
  };

  return (
    <div>
      <TopBar/>
      <div id="main">
        <h1>Your Dashboard</h1>
        <div className="panel">
          <h2>Add New Task</h2>
          <form onSubmit={handleNewTask}>
              <input type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)} required />
              <button className="add" type="submit">Add</button>
          </form>
        </div>
        <ul className="tasklist">
          <h3>Your current ToDo list:</h3>
          {tasks.length > 0 ? (
            tasks.map((task, index) => (
              <div id="divvv" key={index}>
                <li className={task.completed ? 'completed' : ''} onClick={() => toggleTask(index)}>
                  <div className="hehe">{task.taskName}</div>
                </li>
                <button id="remove" ><img src={removeimage} onClick={() => handleRemoveTask(index)} width="20px"/></button>
              </div>
            ))
          ) : (
            <li>No added Tasks</li>
          )}
        </ul>
        <table id="timetable">
          <tr>
            <th colspan="3" style={{backgroundColor:"rgba(250,250,200,0.4)"}}>Today's Schedule</th>
          </tr>
          <tr>
            <th>Start Time</th>
            <th>End Time</th>
            <th>Task</th>
          </tr>
          {tasks.map((task, index) => (
            task.addedToTimetable && (
              <tr key={index} className={task.completed ? 'completed' : ''}>
                <td>{task.startTime}</td>
                <td>{task.endTime}</td>
                <td>{task.taskName}</td>
              </tr>
            )
          ))}
        </table>
      </div>
      <Footer/>
    </div>
  );
}

export default Dashboard;