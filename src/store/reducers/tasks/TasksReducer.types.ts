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

interface ITasksSlice {
  data: ITask[]
}

export default ITasksSlice;
export type {
  ITask,
  ICreateTaskAction,
};