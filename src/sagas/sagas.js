import { takeLatest } from 'redux-saga/effects';
import ACTION_TYPES from '../actions/actionsTypes';
import { createTaskSaga, deleteTaskSaga, getTasksSaga } from './todoSagas';

function * rootSaga () {
  yield takeLatest(ACTION_TYPES.GET_TASKS_ACTION, getTasksSaga);
  yield takeLatest(ACTION_TYPES.CREATE_TASK_ACTION, createTaskSaga);
  yield takeLatest(ACTION_TYPES.DELETE_TASK_ACTION, deleteTaskSaga);
}

export default rootSaga;
