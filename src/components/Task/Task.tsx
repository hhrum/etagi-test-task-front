import React, {useId, useState} from 'react';
import {Navigate, redirect} from 'react-router-dom';
import classnames from 'classnames';

import Ripple from '../Ripple';
import useLongClick from '../../hooks/useLongClick';

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
  const [navigate, setNavigate] = useState(false);

  const {
    pressed,
    mouseUpHandler,
    mouseDownHandler,
    mouseLeaveHandler
  } = useLongClick(() => {
    setNavigate(true);
  });

  const componentClassName = classnames('task', {
    'task--completed': state,
    'task--pressed': pressed
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

      <Ripple duration={1000} />
      {navigate &&
        <Navigate to="/task" />
      }
    </label>
  );
}

export default Task;