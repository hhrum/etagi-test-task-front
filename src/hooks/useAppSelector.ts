import {TypedUseSelectorHook, useSelector} from 'react-redux';

import {RootState} from '../store/store';

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const getTasks = (state: RootState) => state.tasks.data; 
const getTaskById = (id: number) => (state: RootState) => state.tasks.data.find(task => task.id === id);

const getCurrentPage = (state: RootState) => state.tasks.currentPage;
const getTotalPages = (state: RootState) => Math.ceil(state.tasks.data.length / 15);

export default useAppSelector;
export {
  getTasks,
  getTaskById,

  getCurrentPage,
  getTotalPages
};