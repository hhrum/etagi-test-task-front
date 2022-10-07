import React, {useState} from 'react';
import {Navigate, useMatch} from 'react-router-dom';

import PageLayout from '../../components/Layout';
import Header from '../../components/Header';
import Button from '../../components/Button';

import useAppSelector, {getTaskById} from '../../hooks/useAppSelector';
import date from '../../utils/date';

import './TaskPage.scss';
import HeaderBackLink from '../../components/Links/HeaderBackLink';

function TaskPage() {

  const [redirect, setRedirect] = useState<string|null>(null);

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
        <Header className="task-page-header">
          <HeaderBackLink to="/" />
          <h2 className="task-page-header__title">{task.title}</h2>
        </Header>
      }
      contentClassName="task-page"
      redirect={redirect}
    >
      <div className="task-page__title">
        <div>
          {task.title}
        </div>
      </div>
      <p className="task-page__completed">
        Состояние: <span>{task.completed ? 'Завершено' : 'Активно'}</span>
      </p>
      <div className="task-page__field">
        <div className="field">
          <div className="field__title">Дата начала</div>
          <div className="field__content">{date(task.startDate).format('D MMM YYYYг.')}</div>
        </div>
      </div>
      <div className="task-page__field">
        <div className="field">
          <div className="field__title">Дата окончания</div>
          <div className="field__content">{date(task.finishDate).format('D MMM YYYYг.')}</div>
        </div>
      </div>
      <div className="task-page__field">
        <div className="field">
          <div className="field__title">Описание</div>
          <div className="field__content">{task.description}</div>
        </div>
      </div>

      <Button
        content="Изменить"
        onClick={() => setTimeout(
          () => setRedirect('/task/' + customMatch?.params.id + '/edit'),
          500
        )}
      />
    </PageLayout>
  );
}

export default TaskPage;