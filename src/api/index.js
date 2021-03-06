import { v4 as uuidv4 } from 'uuid';
// import axios from 'axios';

// const axiosOptions = {
//   baseUrl: 'http://127.0.0.1:5000/api',
// };

// const apiInstance = axios.create(axiosOptions);

// export const getTasks = () => apiInstance.get('/tasks');
const tasks = [];

export const updateTask = id => {
  const index = tasks.findIndex(task => task.id === id);
  tasks[index].isDone = !tasks[index].isDone;

  return Promise.resolve({ data: tasks });
};

// export const createTask = user => apiInstance.post('/tasks', task);
export const createTask = task => {
  const newTask = { ...task, id: uuidv4() };
  tasks.unshift(newTask);
  return Promise.resolve({ data: newTask });
};

// export const deleteTask = id => apiInstance.delete(`/tasks/${id}`)
export const deleteTask = id => {
  const index = tasks.findIndex(t => t.id === id);
  return Promise.resolve({ data: tasks.splice(index, 1) });
};
