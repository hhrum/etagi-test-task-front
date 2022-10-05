import {delay, put, takeEvery} from 'redux-saga/effects';
import {PayloadAction} from '@reduxjs/toolkit';

import {ICreateTaskAction, ITask} from '../reducers/tasks/TasksReducer.types';
import {
  createTaskAction,
  deleteTaskAction,
  editTaskAction,
  initTasksAction,
  setTasks
} from '../reducers/tasks/TasksReducer';
import {setCurrentPage} from '../reducers/pagination/PaginationReducer';
import {setLoader} from '../reducers/loader/LoaderReducer';

import TaskStorage from '../../utils/TaskStorage';

function* initTasksWorker() {
  yield put(setLoader(true));

  yield delay(1000);

  const tasks: ITask[] = yield TaskStorage.getTasks();

  yield put(setTasks(tasks));

  yield put(setLoader(false));
}

function* createTaskWorker(action: PayloadAction<ICreateTaskAction>) {
  yield put(setLoader(true));

  yield delay(1000);

  const task: ITask = {
    id: TaskStorage.getLastIndex() + 1,
    completed: false,
    ...action.payload
  };

  const tasks: ITask[] = yield TaskStorage.addTask(task);
  yield TaskStorage.incrementLastIndex();

  yield put(setTasks(tasks));
  yield put(setCurrentPage(1));

  yield put(setLoader(false));
}

function* editTaskWorker(action: PayloadAction<ITask>) {
  yield put(setLoader(true));

  yield delay(1000);
  
  const tasks: ITask[] = yield TaskStorage.editTask(action.payload);

  yield put(setTasks(tasks));

  yield put(setLoader(false));
}

function* deleteTaskWorker(action: PayloadAction<number>) {
  yield put(setLoader(true));

  yield delay(1000);
  
  const tasks: ITask[] = yield TaskStorage.deleteTask(action.payload);

  console.log(tasks);

  yield put(setTasks(tasks));

  yield put(setLoader(false));
}

function* taskWatcher() {
  yield takeEvery(initTasksAction, initTasksWorker);
  yield takeEvery(createTaskAction, createTaskWorker);
  yield takeEvery(editTaskAction, editTaskWorker);
  yield takeEvery(deleteTaskAction, deleteTaskWorker);
}

export default taskWatcher;