import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface Task {
  id: number
  title: string
  completed: boolean
  startDate: Date
  finishDate: Date
  description: string
}

interface TasksSlice {
  data: Task[]
  lastIndex: number
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
  lastIndex: 1
} as TasksSlice;

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    toggleCompleteById(state, action: PayloadAction<number>) {
      const task = state.data.find(task => task.id === action.payload);
      
      if (!task) {
        return;
      }
      
      task.completed = !task.completed;
    }
  }
});

export const { toggleCompleteById } = tasksSlice.actions;
export default tasksSlice.reducer;