import {combineReducers} from '@reduxjs/toolkit';
import tasks from './TasksReducer';

const rootReducer = combineReducers({
  tasks
});

export default rootReducer;