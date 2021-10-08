import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getTasksAction, deleteTaskAction } from '../../actions';

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
      <ul>{props.todo.tasks.map(mapTask)}</ul>
    </>
  );
}

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  getTasks: () => dispatch(getTasksAction()),
  deleteTask: id => dispatch(deleteTaskAction(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TasksList);
