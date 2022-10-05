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

    toggleCompleteById(state, action: PayloadAction<number>) {
      const task = state.data.find(task => task.id === action.payload);
      
      if (!task) {
        return;
      }
      
      task.completed = !task.completed;
    }
  }
});

const initTasksAction = createAction('tasks/initTasks');
const createTaskAction = createAction<ICreateTaskAction>('tasks/createTask');
const editTaskAction = createAction<ITask>('tasks/editTask');
const deleteTaskAction = createAction<number>('tasks/deleteTask');

export const {
  setTasks,
  toggleCompleteById,
} = tasksSlice.actions;

export {
  initTasksAction,
  createTaskAction,
  editTaskAction,
  deleteTaskAction,
};

export default tasksSlice.reducer;