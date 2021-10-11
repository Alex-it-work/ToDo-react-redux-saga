import React from 'react';
import AddTask from '../../components/AddTask';
import TasksList from '../../components/TasksList';

function ToDoPage () {
  return (
    <div className='todo-app'>
      <h1>Todo List</h1>
      <AddTask />
      <TasksList />
    </div>
  );
}

export default ToDoPage;
