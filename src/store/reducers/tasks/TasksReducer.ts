import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ICreateTaskAction, ITask} from './TasksReducer.types';
import initialState from './initialState';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    createTask(state, action: PayloadAction<ICreateTaskAction>) {
      const task = {
        id: state.lastIndex + 1,
        completed: false,
        ...action.payload
      } as ITask;
      
      state.lastIndex += 1;
      state.data.push(task);
    },
    
    deleteTask(state, action: PayloadAction<number>) {
      const taskIndex = state.data.findIndex(task => task.id === action.payload);
      
      if (taskIndex === -1) {
        return;
      }
      
      state.data.splice(taskIndex, 1);
    },

    toggleCompleteById(state, action: PayloadAction<number>) {
      const task = state.data.find(task => task.id === action.payload);
      
      if (!task) {
        return;
      }
      
      task.completed = !task.completed;
    },
    
    setCurrentPage(state, action: PayloadAction<number>) {
      if (action.payload < 1 || action.payload > Math.ceil(state.data.length / 15)) {
        return;
      }
      
      state.currentPage = action.payload;
    }
  }
});

export const {
  createTask,
  deleteTask,
  toggleCompleteById,
  setCurrentPage
} = tasksSlice.actions;
export default tasksSlice.reducer;