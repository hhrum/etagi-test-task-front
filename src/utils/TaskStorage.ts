import {LocalKey, LocalStorage} from 'ts-localstorage';

import {ITask} from '../store/reducers/tasks';

const tasksKey = new LocalKey<ITask[]>('tasks', []);
const lastIndexKey = new LocalKey<number>('last-index', 1);

const getTasks = () => {
  const tasks = LocalStorage.getItem(tasksKey);
  
  if (tasks) {
    return tasks;
  }
  
  return [];
};

const setTasks = (tasks: ITask[]) => {
  LocalStorage.setItem(tasksKey, tasks);
};

const addTask = (task: ITask) => {
  const tasks = getTasks();

  tasks.push(task);

  setTasks(tasks);
  return getTasks();
};

const editTask = (task: ITask) => {
  const tasks = getTasks();
  const taskIndex = tasks.findIndex(item => task.id === item.id);
  
  if (taskIndex === -1) {
    return;
  }
  
  tasks.splice(taskIndex, 1, task);
  
  setTasks(tasks);
  return getTasks();
};

const deleteTask = (taskId: number) => {
  const tasks = getTasks();
  const taskIndex = tasks.findIndex(item => taskId === item.id);

  if (taskIndex === -1) {
    console.log(taskIndex);
    return;
  }

  tasks.splice(taskIndex, 1);

  setTasks(tasks);
  return getTasks();
};

const getLastIndex = () => {
  const lastIndex = LocalStorage.getItem(lastIndexKey);
  
  if (lastIndex) {
    return lastIndex;
  }

  const tasks = getTasks();
  
  if (tasks.length > 0) {
    return tasks[tasks.length - 1].id;
  }
  
  return 0;
};

const incrementLastIndex = () => {
  LocalStorage.setItem(lastIndexKey, getLastIndex() + 1);
  return getLastIndex();
};

export default {
  getTasks,
  addTask,
  editTask,
  deleteTask,
  getLastIndex,
  incrementLastIndex
};