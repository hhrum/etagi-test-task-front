interface ITask {
  id: number
  title: string
  completed: boolean
  startDate: Date
  finishDate: Date
  description: string
}

interface ICreateTaskAction {
  title: string
  startDate: Date
  finishDate: Date
  description: string
}

interface IEditTaskAction {
  id: number
  task: ICreateTaskAction
}

interface ITasksSlice {
  data: ITask[]
  lastIndex: number
  currentPage: number
}

export default ITasksSlice;
export type {
  ITask,
  ICreateTaskAction,
  IEditTaskAction
};