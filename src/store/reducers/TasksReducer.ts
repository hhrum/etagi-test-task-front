import {createSlice} from '@reduxjs/toolkit';

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
  }
});

// export const {  } = tasksSlice.actions;
export default tasksSlice.reducer;