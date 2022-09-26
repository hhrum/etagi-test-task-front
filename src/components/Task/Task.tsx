import React, {useId} from 'react';
import classnames from 'classnames';

import TaskProps from './Task.types';

import './Task.scss';

function Task({
  id,
  title,
  state,
  startDate,
  finishDate,
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