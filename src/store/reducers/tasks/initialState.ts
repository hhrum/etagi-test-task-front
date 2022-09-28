import ITasksSlice from './TasksReducer.types';

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
  currentPage: 1,
} as ITasksSlice;

export default initialState;