import {call, delay, put, takeEvery} from 'redux-saga/effects';

import TaskStorage from '../../utils/TaskStorage';
import {ICreateTaskAction, ITask} from '../reducers/tasks/TasksReducer.types';
import {
  createTaskAction,
  deleteTaskAction,
  editTaskAction,
  initTasksAction,
  setTasks
} from '../reducers/tasks/TasksReducer';
import {PayloadAction} from '@reduxjs/toolkit';

function* initTasksWorker() {
  yield delay(1000);

  const tasks: ITask[] = yield TaskStorage.getTasks();

  yield put(setTasks(tasks));
}

function* createTaskWorker(action: PayloadAction<ICreateTaskAction>) {
  yield delay(1000);

  const task: ITask = {
    id: TaskStorage.getLastIndex() + 1,
    completed: false,
    ...action.payload
  };

  const tasks: ITask[] = yield TaskStorage.addTask(task);
  yield TaskStorage.incrementLastIndex();

  yield put(setTasks(tasks));
}

function* editTaskWorker(action: PayloadAction<ITask>) {
  yield delay(1000);
  
  const tasks: ITask[] = yield TaskStorage.editTask(action.payload);

  yield put(setTasks(tasks));
}

function* deleteTaskWorker(action: PayloadAction<number>) {
  yield delay(1000);
  
  const tasks: ITask[] = yield TaskStorage.deleteTask(action.payload);

  console.log(tasks);

  yield put(setTasks(tasks));
}

function* taskWatcher() {
  yield takeEvery(initTasksAction, initTasksWorker);
  yield takeEvery(createTaskAction, createTaskWorker);
  yield takeEvery(editTaskAction, editTaskWorker);
  yield takeEvery(deleteTaskAction, deleteTaskWorker);
}

export default taskWatcher;