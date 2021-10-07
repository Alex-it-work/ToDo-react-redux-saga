import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions';

function TasksList (props) {
  const { tasks, isFetching, e, getTasks, deleteTask } = props;

  useEffect(() => {
    getTasks();
  }, []);

  const mapTask = ({ id, task, isDone }) => {
    const deleteHandler = () => {
      deleteTask(id);
    };
    return (
      <>
        <li key={id}>
          ID: {id} task: {task}
          <input type='checkbox' checked={isDone} />
          <button onClick={deleteHandler}>Move</button>
        </li>
      </>
    );
  };

  return (
    <>
      {isFetching && <div>Loading...</div>}
      {e && <div>ERROR</div>}
      <ul>{tasks}</ul>
    </>
  );
}

const mapStateToProps = state => state.todo;

const mapDispatchToProps = dispatch => ({
  getTasks: () => dispatch(actionCreators.getTasksAction()),
  deleteTask: id => dispatch(actionCreators.deleteTaskAction(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TasksList);
