import React from 'react';
import { connect } from 'react-redux';
import { updateTaskAction, deleteTaskAction } from '../../actions';

function TasksList (props) {
  const { tasks, isFetching, error, updateTask, deleteTask } = props;

  const mapTask = ({ id, task, isDone }) => {
    const isDoneTaskHandler = () => {
      updateTask(id);
    };
    const deleteHandler = () => {
      deleteTask(id);
    };
    return (
      <>
        <li key={id}>
          ID: {id} task: {task}
          <input
            type='checkbox'
            checked={isDone}
            onChange={isDoneTaskHandler}
          />
          <button onClick={deleteHandler}>Move</button>
        </li>
      </>
    );
  };

  return (
    <>
      {isFetching && <div>Loading...</div>}
      {error && <div>ERROR</div>}
      <ul>{tasks.map(mapTask)}</ul>
    </>
  );
}

const mapStateToProps = state => state.todo;

const mapDispatchToProps = dispatch => ({
  updateTask: id => dispatch(updateTaskAction(id)),
  deleteTask: id => dispatch(deleteTaskAction(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TasksList);
