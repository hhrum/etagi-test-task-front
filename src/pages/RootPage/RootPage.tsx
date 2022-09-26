import React from 'react';

import Filter, {FilterBy, FilterValue} from '../../components/Filter';
import Task from '../../components/Task';
import Pagination from '../../components/Pagination';

import './RootPage.scss';

function RootPage() {
  return (
    <div className="root">
      <h1>Ваш список задач</h1>
      <Filter filterValue={FilterValue.None} filterBy={FilterBy.None} />
      <Task
        id={1}
        title="Выполнить действие"
        state={false}
        startDate={new Date()}
        finishDate={new Date()}
        description="Какое-то описание"
      />
      <Task
        id={2}
        title="Выполнить действие"
        state={true}
        startDate={new Date()}
        finishDate={new Date()}
        description="Какое-то описание"
      />
      <Pagination currentPage={1} />
    </div>
  );
}

export default RootPage;
