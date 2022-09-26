import React, {MouseEvent, TouchEvent, useId, useState} from 'react';
import classnames from 'classnames';

import TaskProps from './Task.types';

import './Task.scss';
import useLongClick from '../../hooks/useLongClick';
import {Navigate, redirect} from 'react-router-dom';

function Task({
  id,
  title,
  state,
  startDate,
  finishDate,
  description
}:TaskProps) {
  const inputId = useId();

  const {mouseUpHandler, mouseDownHandler, mouseLeaveHandler} = useLongClick(() => {
    redirect('/task');
  });
  
  const componentClassName = classnames('task', {
    'task--completed': state
  });
  
  return (
    <label
      htmlFor={inputId}
      className={componentClassName}
      onMouseDown={mouseDownHandler}
      onTouchStart={mouseDownHandler}
      onMouseUp={mouseUpHandler}
      onTouchEnd={mouseUpHandler}
      onMouseLeave={mouseLeaveHandler}
    >
      <input id={inputId} type="checkbox" className="task__input" />
      <div className="task__title">{title}</div>
    </label>
  );
}

export default Task;