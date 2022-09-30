import React from 'react';

import Input from '../Input';
import Textarea from '../Textarea';

import TaskFormProps from './TaskForm.types';

import './TaskForm.scss';

function TaskForm({
  taskFormData,
  onChange
}: TaskFormProps) {

  const setTitle = (value: string) => {
    onChange({
      ...taskFormData,
      title: value,
    });
  };

  const setStartDate = (value: string) => {
    onChange({
      ...taskFormData,
      startDate: value,
    });
  };

  const setFinishDate = (value: string) => {
    onChange({
      ...taskFormData,
      finishDate: value,
    });
  };

  const setDescription = (value: string) => {
    onChange({
      ...taskFormData,
      description: value,
    });
  };

  return (
    <form className="task-form">
      <div className="create-task-form__field">
        <Input
          label="Заголовок"
          value={taskFormData.title}
          onChange={setTitle}
        />
      </div>
      <div className="create-task-form__field">
        <Input
          label="Дата начала"
          type="date"

          max={taskFormData.finishDate}

          value={taskFormData.startDate}
          onChange={setStartDate}
        />
      </div>
      <div className="create-task-form__field">
        <Input
          label="Дата окончания"
          type="date"

          min={taskFormData.startDate}

          value={taskFormData.finishDate}
          onChange={setFinishDate}
        />
      </div>
      <div className="create-task-form__field">
        <Textarea
          label="Описание"
          value={taskFormData.description}
          onChange={setDescription}
        />
      </div>
    </form>
  );
}

export default TaskForm;