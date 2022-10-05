import {TypedUseSelectorHook, useSelector} from 'react-redux';

import {FilterBy, FilterValue} from '../components/Filter';

import {RootState} from '../store/store';
import sort, {sortBy} from '../utils/sort';
import {COUNT_TASKS_OF_PAGE} from '../config/app';
import {ITask} from '../store/reducers/tasks';
import pagination from '../utils/pagination';

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// tasks
const getTasks = (state: RootState) => {
  let tasks: ITask[]; 
  
  if (FilterBy.None === state.filter.by || FilterValue.None === state.filter.value) {
    tasks = sort(state.tasks.data);
  } else {
    tasks = sortBy(state.tasks.data, state.filter.by, state.filter.value);
  }

  return pagination(state, tasks);
};
const getTaskById = (id: number) => (state: RootState) => state.tasks.data.find(task => task.id === id);

// pagination
const getCurrentPage = (state: RootState) => state.pagination.currentPage;
const getTotalPages = (state: RootState) => Math.ceil(state.tasks.data.length / COUNT_TASKS_OF_PAGE);

// filter
const getFilterValue = (state: RootState) => state.filter.value;
const getFilterBy = (state: RootState) => state.filter.by;

// loader
const getLoader = (state:RootState) => state.loader.loading;

export default useAppSelector;
export {
  getTasks,
  getTaskById,

  getCurrentPage,
  getTotalPages,

  getFilterValue,
  getFilterBy,

  getLoader,
};