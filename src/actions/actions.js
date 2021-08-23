export const getTasksAction = () => ({
  type: ACTION_TYPES.GET_TASKS_ACTION,
});

export const getTasksRequest = () => ({
  type: ACTION_TYPES.GET_TASKS_REQUEST,
});

export const getTasksSuccess = users => ({
  type: ACTION_TYPES.GET_TASKS_SUCCESS,
  users: users,
});

export const getTasksError = e => ({
  type: ACTION_TYPES.GET_TASKS_ERROR,
  error: e,
});

// Create:

export const createTaskAction = user => ({
  type: ACTION_TYPES.CREATE_TASK_ACTION,
  user: user,
});

export const createTaskRequest = () => ({
  type: ACTION_TYPES.CREATE_TASK_REQUEST,
});

export const createTaskSuccess = user => ({
  type: ACTION_TYPES.CREATE_TASK_SUCCESS,
  user: user,
});

export const createTaskError = e => ({
  type: ACTION_TYPES.CREATE_TASK_ERROR,
  error: e,
});

//Delete:

export const deleteTaskAction = id => ({
  type: ACTION_TYPES.DELETE_TASK_ACTION,
  id: id,
});

export const deleteTaskRequest = () => ({
  type: ACTION_TYPES.DELETE_TASK_REQUEST,
});

export const deleteTaskSuccess = deletedUser => ({
  type: ACTION_TYPES.DELETE_TASK_SUCCESS,
  deletedUser,
});

export const deleteTaskError = e => ({
  type: ACTION_TYPES.DELETE_TASK_ERROR,
  error: e,
});
