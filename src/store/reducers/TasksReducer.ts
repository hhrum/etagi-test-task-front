import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface Task {
  id: number
  title: string
  completed: boolean
  startDate: Date
  finishDate: Date
  description: string
}

interface CreateTaskAction {
  title: string
  startDate: Date
  finishDate: Date
  description: string
}

interface TasksSlice {
  data: Task[]
  lastIndex: number
  currentPage: number
}

const initialState = {
  data: [
    {
      id: 1,
      title: 'Тест',
      completed: false,
      startDate: new Date(),
      finishDate: new Date(),
      description: 'Описание',
    }
  ],
  lastIndex: 1,
  currentPage: 2,
} as TasksSlice;

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    createTask(state, action: PayloadAction<CreateTaskAction>) {
      const task = {
        id: state.lastIndex + 1,
        completed: false,
        ...action.payload
      } as Task;
      
      state.lastIndex += 1;
      state.data.push(task);
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
  toggleCompleteById,
  setCurrentPage
} = tasksSlice.actions;
export default tasksSlice.reducer;