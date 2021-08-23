import React from 'react';
import AddTask from '../../components/AddTask/AddTask';
import TasksFilters from '../../components/TasksFilters/TasksFilters';
import TasksList from '../../components/TasksList/TasksList';

function ToDoPage () {
  return (
    <div className='todo-app'>
      <h1>Todo List</h1>
      <AddTask />
      <TasksList />
      <TasksFilters />
    </div>
  );
}

export default ToDoPage;
