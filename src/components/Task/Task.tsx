import React, {MouseEvent, useId, useState} from 'react';
import {Navigate} from 'react-router-dom';
import {MdDeleteOutline} from 'react-icons/md';
import classnames from 'classnames';

import Ripple from '../Ripple';
import useLongClick from '../../hooks/useLongClick';

import useAppSelector, {getTaskById} from '../../hooks/useAppSelector';
import useAppDispatch from '../../hooks/useAppDispatch';
import {deleteTaskAction, toggleCompleteTaskAction} from '../../store/reducers/tasks/TasksReducer';

import TaskProps from './Task.types';

import './Task.scss';
import hints, {HINT_OPEN_TASK} from '../../config/hints';

const hint = hints[HINT_OPEN_TASK];

function Task({
  id,
}:TaskProps) {
  // нужна, чтобы нельзя было выполнить код удаления задачи дважды
  const [deleted, setDeleted] = useState(false);

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
      hint.event.dispatch();
      setNavigate(true);
    },
  );

  const changeHandler = () => {
    dispatch(toggleCompleteTaskAction(id));
  };
  
  const deleteHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    
    if (deleted) {
      return;
    }
    
    if (!confirm('Вы действительно хотите удалить задачу: "' + task.title + '"?')) {
      return;
    }

    setDeleted(true);
    dispatch(deleteTaskAction(id));
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
      onTouchMove={mouseLeaveHandler}
    >
      <div className="task__left-side">
        <input
          id={inputId}
          type="checkbox"
          className="task__input"
          onChange={changeHandler}
          checked={task.completed}
        />
        <div className="task__title">{task.title}</div>
      </div>

      <div className="task__right-side">
        <button
          className="task__delete-button"
          onClick={deleteHandler}
        >
          <MdDeleteOutline />

          <Ripple />
        </button>
      </div>

      <Ripple className="task__ripple" />
      {navigate &&
        <Navigate to={'/task/' + id} />
      }
    </label>
  );
}

export default Task;