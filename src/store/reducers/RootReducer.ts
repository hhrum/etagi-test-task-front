import {combineReducers} from '@reduxjs/toolkit';
import tasks from './tasks';
import filter from './filter';
import pagination from './pagination';
import loader from './loader';

const rootReducer = combineReducers({
  loader,
  tasks,
  filter,
  pagination,
});

export default rootReducer;