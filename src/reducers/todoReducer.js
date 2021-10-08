import ACTION_TYPES from './../actions/actionsTypes';

const initialState = {
  tasks: [],
  isFetching: false,
  error: null,
};

function todoReducer (state = initialState, action) {
  const { type } = action;
  switch (type) {
    //GET
    case ACTION_TYPES.GET_TASKS_REQUEST: {
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    }
    case ACTION_TYPES.GET_TASKS_SUCCESS: {
      const { tasks } = action;
      return { ...state, isFetching: false, tasks, error: null };
    }
    case ACTION_TYPES.GET_TASKS_ERROR: {
      const { e } = action;
      return { ...state, isFetching: false, error: e };
    }

    //CREATE
    case ACTION_TYPES.CREATE_TASK_REQUEST: {
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    }
    case ACTION_TYPES.CREATE_TASK_SUCCESS: {
      const { task: newTask } = action;
      const { tasks } = state;
      tasks.unshift(newTask);
      return { ...state, isFetching: false, tasks };
    }
    case ACTION_TYPES.CREATE_TASK_ERROR: {
      const { e } = action;
      return { ...state, isFetching: false, error: e };
    }

    //DELETE
    case ACTION_TYPES.DELETE_TASK_REQUEST: {
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    }
    case ACTION_TYPES.DELETE_TASK_SUCCESS: {
      const { id } = action;
      const { tasks } = state;
      const newTasks = tasks.filter(task => task.id !== id);
      return { ...state, isFetching: false, tasks: newTasks };
    }
    case ACTION_TYPES.DELETE_TASK_ERROR: {
      const { e } = action;
      return { ...state, isFetching: false, error: e };
    }
    default:
      return state;
  }
}
export default todoReducer;
