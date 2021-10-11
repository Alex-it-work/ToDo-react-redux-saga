import { takeLatest } from 'redux-saga/effects';
import ACTION_TYPES from '../actions/actionsTypes';
import { createTaskSaga, deleteTaskSaga, updateTaskSaga } from './todoSagas';

function * rootSaga () {
  yield takeLatest(ACTION_TYPES.UPDATE_TASK_ACTION, updateTaskSaga);
  yield takeLatest(ACTION_TYPES.CREATE_TASK_ACTION, createTaskSaga);
  yield takeLatest(ACTION_TYPES.DELETE_TASK_ACTION, deleteTaskSaga);
}

export default rootSaga;
