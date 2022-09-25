import React, {useId} from 'react';
import classnames from 'classnames';

import './Task.scss';

export interface TaskProps {
  id: number
  title: string
  state: boolean
  start_date: Date
  finish_date: Date
  description: string
}

function Task({
  id,
  title,
  state,
  start_date,
  finish_date,
  description
}:TaskProps) {
  const inputId = useId();
  
  const componentClassName = classnames('task', {
    'task--completed': state
  });
  
  return (
    <label htmlFor={inputId} className={componentClassName}>
      <input id={inputId} type="checkbox" className="task__input" />
      <div className="task__title">{title}</div>
    </label>
  );
}

export default Task;