const initialState = {
  tasks: [],
  isFetching: false,
  error: null,
};

function todoReducer (state = initialState, action) {
  const { type } = action;
  switch (type) {
    default:
      return state;
  }
}
export default todoReducer;
