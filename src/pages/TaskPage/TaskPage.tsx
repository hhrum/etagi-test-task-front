import React from 'react';
import {useMatch} from 'react-router-dom';

import PageLayout from '../../components/Layout';

import './TaskPage.scss';

function TaskPage() {
  const customMatch = useMatch('/task/:id');

  console.log(customMatch);
  
  return (
    <PageLayout className="task-page">
      <div className="task-page__title">Название</div>
      <div className="task-page__start-date">Дата начала</div>
      <div className="task-page__finish-date">Дата окончания</div>
      <div className="task-page__description">Описание</div>
    </PageLayout>
  );
}

export default TaskPage;