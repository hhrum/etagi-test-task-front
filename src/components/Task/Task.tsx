import React, {useId, useState} from 'react';
import {Navigate, redirect} from 'react-router-dom';
import classnames from 'classnames';

import Ripple from '../Ripple';
import useLongClick from '../../hooks/useLongClick';

import TaskProps from './Task.types';

import './Task.scss';
import task from './index';
import useAppSelector, {getTaskById} from '../../hooks/useAppSelector';
import useAppDispatch from '../../hooks/useAppDispatch';
import {toggleCompleteById} from '../../store/reducers/TasksReducer';

function Task({
  id,
}:TaskProps) {
  const dispatch = useAppDispatch();
  const task = useAppSelector(getTaskById(id));
  
  if (!task) {
    return <div />;
  }
  
  const inputId = useId();
  const [navigate, setNavigate] = useState(false);

  const {
    pressed,
    mouseUpHandler,
    mouseDownHandler,
    mouseLeaveHandler
  } = useLongClick(
    () => {
      setNavigate(true);
    },
  );

  const onChangeHandle = () => {
    dispatch(toggleCompleteById(id));
  };

  const componentClassName = classnames('task', {
    'task--completed': task.completed,
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
      <input
        id={inputId}
        type="checkbox"
        className="task__input"
        onChange={onChangeHandle}
        checked={task.completed}
      />
      <div className="task__title">{task.title}</div>

      <Ripple duration={1000} />
      {navigate &&
        <Navigate to={'/task/' + id} />
      }
    </label>
  );
}

export default Task;