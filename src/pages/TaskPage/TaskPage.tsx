import React from 'react';
import {Navigate, NavLink, useMatch} from 'react-router-dom';
import {
  MdArrowBack
} from 'react-icons/md';

import PageLayout from '../../components/Layout';

import useAppSelector, {getTaskById} from '../../hooks/useAppSelector';

import './TaskPage.scss';

function TaskPage() {
  const customMatch = useMatch('/task/:id');
  
  if (!customMatch?.params.id) {
    return <Navigate to="/" />;
  }
  
  const task = useAppSelector(getTaskById(+customMatch?.params.id));

  if (!task) {
    return <Navigate to="/" />;
  }

  return (
    <PageLayout 
      header={
        <div className="task-page-header">
          <NavLink to="/" className="task-page-header__back">
            <MdArrowBack />
          </NavLink>
          <h2>{task.title}</h2>
        </div>
      }
      contentClassName="task-page"
    >
      <div className="task-page__title">
        <h1>
          {task.title}
        </h1>
        <p className="task-page__completed">
          Состояние: <span>{task.completed ? 'Завершено' : 'Активно'}</span>
        </p>
      </div>
      <div className="task-page__field">
        <div className="field">
          <div className="field__title">Дата начала</div>
          <div className="field__content">{task.startDate.toString()}</div>
        </div>
      </div>
      <div className="task-page__field">
        <div className="field">
          <div className="field__title">Дата окончания</div>
          <div className="field__content">{task.finishDate.toString()}</div>
        </div>
      </div>
      <div className="task-page__field">
        <div className="field">
          <div className="field__title">Описание</div>
          <div className="field__content">{task.description}</div>
        </div>
      </div>
    </PageLayout>
  );
}

export default TaskPage;