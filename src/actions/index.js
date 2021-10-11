import ACTION_TYPES from './actionsTypes';

export const updateTaskAction = id => ({
  type: ACTION_TYPES.UPDATE_TASK_ACTION,
  id,
});

export const updateTaskRequest = () => ({
  type: ACTION_TYPES.UPDATE_TASK_REQUEST,
});

export const updateTaskSuccess = tasks => ({
  type: ACTION_TYPES.UPDATE_TASK_SUCCESS,
  tasks,
});

export const updateTaskError = e => ({
  type: ACTION_TYPES.UPDATE_TASK_ERROR,
  e,
});

// Create:

export const createTaskAction = task => ({
  type: ACTION_TYPES.CREATE_TASK_ACTION,
  task,
});

export const createTaskRequest = () => ({
  type: ACTION_TYPES.CREATE_TASK_REQUEST,
});

export const createTaskSuccess = task => ({
  type: ACTION_TYPES.CREATE_TASK_SUCCESS,
  task,
});

export const createTaskError = e => ({
  type: ACTION_TYPES.CREATE_TASK_ERROR,
  e,
});

//Delete:

export const deleteTaskAction = id => ({
  type: ACTION_TYPES.DELETE_TASK_ACTION,
  id,
});

export const deleteTaskRequest = () => ({
  type: ACTION_TYPES.DELETE_TASK_REQUEST,
});

export const deleteTaskSuccess = deletedTask => ({
  type: ACTION_TYPES.DELETE_TASK_SUCCESS,
  deletedTask,
});

export const deleteTaskError = e => ({
  type: ACTION_TYPES.DELETE_TASK_ERROR,
  e,
});
