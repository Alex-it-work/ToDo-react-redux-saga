import { put } from 'redux-saga/effects';
import {
  createTaskError,
  createTaskRequest,
  createTaskSuccess,
  deleteTaskError,
  deleteTaskRequest,
  deleteTaskSuccess,
  updateTaskError,
  updateTaskRequest,
  updateTaskSuccess,
} from '../actions';
import * as API from '../api';

export function * updateTaskSaga (action) {
  const { id } = action;

  yield put(updateTaskRequest());
  try {
    const { data: tasks } = yield API.updateTask(id);
    yield put(updateTaskSuccess(tasks));
  } catch (e) {
    yield put(updateTaskError(e));
  }
}

export function * createTaskSaga (action) {
  const { task } = action;

  yield put(createTaskRequest());
  try {
    const { data: newTask } = yield API.createTask(task);
    yield put(createTaskSuccess(newTask));
  } catch (e) {
    yield put(createTaskError(e));
  }
}

export function * deleteTaskSaga (action) {
  const { id } = action;
  yield put(deleteTaskRequest());
  try {
    const { data: deletedTask } = yield API.deleteTask(id);
    yield put(deleteTaskSuccess(deletedTask[0]));
  } catch (e) {
    yield put(deleteTaskError(e));
  }
}
