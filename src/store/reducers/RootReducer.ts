import {combineReducers} from '@reduxjs/toolkit';
import tasks from './tasks';
import filter from './filter';
import pagination from './pagination';
import loader from './loader';
import hints from './hints';

const rootReducer = combineReducers({
  loader,
  tasks,
  filter,
  pagination,
  
  hints,
});

export default rootReducer;