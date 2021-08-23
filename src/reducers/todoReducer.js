import ACTION_TYPES from './../actions/actionsTypes';

const initialState = {
  tasks: [],
  isFetching: false,
  error: null,
};

function todoReducer (state = initialState, action) {
  const { type } = action;
  switch (type) {
    case ACTION_TYPES.GET_TASKS_REQUEST: {
      return {
        ...state,
        isFetching: true,
        e: null,
      };
    }
    default:
      return state;
  }
}
export default todoReducer;
