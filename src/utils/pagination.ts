import {RootState} from '../store/store';
import {ITask} from '../store/reducers/tasks';
import {COUNT_TASKS_OF_PAGE} from '../config/app';

const pagination = (state: RootState, tasks: ITask[]) => tasks.slice(COUNT_TASKS_OF_PAGE * (state.pagination.currentPage - 1), COUNT_TASKS_OF_PAGE * state.pagination.currentPage);

export default pagination;