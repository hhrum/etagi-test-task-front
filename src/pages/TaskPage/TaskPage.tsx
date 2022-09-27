import React from 'react';
import {Navigate, NavLink, useMatch} from 'react-router-dom';
import {
  MdArrowBack
} from 'react-icons/md';

import PageLayout from '../../components/Layout';

import useAppSelector, {getTaskById} from '../../hooks/useAppSelector';

import './TaskPage.scss';
import Ripple from '../../components/Ripple';

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
        </div>
      }
      contentClassName="task-page"
    >
      <h1 className="task-page__title">{task.title}</h1>
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