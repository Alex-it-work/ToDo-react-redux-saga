import React from 'react';
import AddTask from '../../components/AddTask';
import TasksList from '../../components/TasksList';
import styles from './ToDoPage.module.scss';

function ToDoPage () {
  return (
    <div className={styles.todoApp}>
      <h1>Todo List</h1>
      <AddTask />
      <TasksList />
    </div>
  );
}

export default ToDoPage;
