import {createAction, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ICreateTaskAction, ITask} from './TasksReducer.types';
import initialState from './initialState';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    setTasks(state, action: PayloadAction<ITask[]>) {
      state.data = action.payload;
    },
  }
});

const initTasksAction = createAction('tasks/initTasks');
const createTaskAction = createAction<ICreateTaskAction>('tasks/createTask');
const editTaskAction = createAction<ITask>('tasks/editTask');
const deleteTaskAction = createAction<number>('tasks/deleteTask');
const toggleCompleteTaskAction = createAction<number>('tasks/toggleComplete');

export const {
  setTasks,
} = tasksSlice.actions;

export {
  initTasksAction,
  createTaskAction,
  editTaskAction,
  deleteTaskAction,
  toggleCompleteTaskAction
};

export default tasksSlice.reducer;