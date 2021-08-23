import { takeLatest } from 'redux-saga/effects';
import ACTION_TYPES from '../actions/actionsTypes';
import { createTask, deleteTask, getTasks } from './todoSagas';

function * rootSaga () {
  yield takeLatest(ACTION_TYPES.GET_TASKS_ACTION, getTasks);
  yield takeLatest(ACTION_TYPES.CREATE_TASK_ACTION, createTask);
  yield takeLatest(ACTION_TYPES.DELETE_TASK_ACTION, deleteTask);
}

export default rootSaga;
