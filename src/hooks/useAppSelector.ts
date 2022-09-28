import {TypedUseSelectorHook, useSelector} from 'react-redux';

import {FilterBy, FilterValue} from '../components/Filter';

import {RootState} from '../store/store';
import sort, {sortBy} from '../utils/sort';

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const getTasks = (state: RootState) => {
  if (FilterBy.None === state.filter.by || FilterValue.None === state.filter.value) {
    return sort(state.tasks.data);
  }
  
  return sortBy(state.tasks.data, state.filter.by, state.filter.value);
};
const getTaskById = (id: number) => (state: RootState) => state.tasks.data.find(task => task.id === id);

const getCurrentPage = (state: RootState) => state.tasks.currentPage;
const getTotalPages = (state: RootState) => Math.ceil(state.tasks.data.length / 15);

const getFilterValue = (state: RootState) => state.filter.value;
const getFilterBy = (state: RootState) => state.filter.by;

export default useAppSelector;
export {
  getTasks,
  getTaskById,

  getCurrentPage,
  getTotalPages,

  getFilterValue,
  getFilterBy,
};