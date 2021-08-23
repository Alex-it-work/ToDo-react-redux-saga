import { put } from 'redux-saga/effects';
import {
  createTaskError,
  createTaskRequest,
  createTaskSuccess,
  deleteTaskError,
  deleteTaskRequest,
  deleteTaskSuccess,
  getTasksError,
  getTasksRequest,
  getTasksSuccess,
} from '../actions/actions';
import * as API from '../api/api';

export function * getTasks () {
  yield put(getTasksRequest);
  try {
    const { data: tasks } = yield API.getTasks();
    yield put(getTasksSuccess(tasks));
  } catch (e) {
    yield put(getTasksError(e));
  }
}

export function * createTask (action) {
  const { task } = action;

  yield put(createTaskRequest());
  try {
    const { data: newTask } = yield API.createTask(task);
    yield put(createTaskSuccess(newTask));
  } catch (e) {
    yield put(createTaskError(e));
  }
}

export function * deleteTask (action) {
  const { id } = action;
  yield put(deleteTaskRequest());
  try {
    const { data: deleteTask } = yield API.deleteTask(id);
    yield put(deleteTaskSuccess(deleteTask));
  } catch (e) {
    yield put(deleteTaskError(e));
  }
}
