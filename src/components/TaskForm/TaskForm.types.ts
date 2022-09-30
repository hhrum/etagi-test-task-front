interface ITaskFormData {
  title: string
  startDate: string
  finishDate: string
  description: string
}

interface TaskFormProps {
  taskFormData: ITaskFormData
  onChange: (formDate: ITaskFormData) => void
}

export default TaskFormProps;
export type {
  ITaskFormData
};