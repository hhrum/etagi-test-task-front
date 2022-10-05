import {ITask} from '../store/reducers/tasks';
import {FilterBy, FilterValue} from '../components/Filter';

const sort = (tasks: ITask[]) => [...tasks]
  .sort((task1, task2) => task1.id < task2.id ? 1 : -1);

const sortBy = (tasks: ITask[], by: FilterBy, value: FilterValue) => {
  if (FilterBy.None === by || FilterValue.None === value) {
    return tasks;
  }

  const sorter = ({
    [FilterBy.Title]: (task1: ITask, task2: ITask) => task1.title > task2.title ? 1 : -1,
    [FilterBy.Complete]: (task1: ITask, task2: ITask) => task1.completed > task2.completed ? 1 : -1,
    [FilterBy.StartDate]: (task1: ITask, task2: ITask) => task1.startDate > task2.startDate ? 1 : -1,
    [FilterBy.FinishDate]: (task1: ITask, task2: ITask) => task1.finishDate > task2.finishDate ? 1 : -1,
  })[by];
  
  return [...tasks].sort((task1, task2) =>
    FilterValue.ASC === value ? sorter(task1, task2) : sorter(task1, task2) * -1
  );
};

export default sort;
export {
  sortBy
};