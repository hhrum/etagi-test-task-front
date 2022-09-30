import {combineReducers} from '@reduxjs/toolkit';
import tasks from './tasks';
import filter from './filter';
import pagination from './pagination';

const rootReducer = combineReducers({
  tasks,
  filter,
  pagination
});

export default rootReducer;