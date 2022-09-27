import React from 'react';

import Filter, {FilterBy, FilterValue} from '../../components/Filter';
import Task from '../../components/Task';
import Pagination from '../../components/Pagination';

import './RootPage.scss';
import useAppSelector from '../../hooks/useAppSelector';

function RootPage() {
  const tasks = useAppSelector((state) => state.tasks.data);
  
  return (
    <div className="root">
      <h1>Ваш список задач</h1>
      <Filter filterValue={FilterValue.None} filterBy={FilterBy.None} />
      {tasks.map(task => (
        <Task
          key={task.id}
          id={task.id}
        />
      ))}
      <Pagination currentPage={1} />
    </div>
  );
}

export default RootPage;
