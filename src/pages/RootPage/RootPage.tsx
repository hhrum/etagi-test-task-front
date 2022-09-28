import React, {useState} from 'react';
import {MdAdd} from 'react-icons/md';

import Filter from '../../components/Filter';
import Task from '../../components/Task';
import Pagination from '../../components/Pagination';
import PageLayout from '../../components/Layout';
import useAppSelector, {getTasks} from '../../hooks/useAppSelector';
import Ripple from '../../components/Ripple';

import './RootPage.scss';

function RootPage() {
  const [redirect, setRedirect] = useState<string|null>(null);

  const tasks = useAppSelector(getTasks);
  
  return (
    <PageLayout 
      contentClassName="root"
      tools={
        <div className="root__tools">
          <div 
            className="root-tool-button" 
            onClick={() => setTimeout(() => setRedirect('/task/create'), 500)}
          >
            <MdAdd />

            <Ripple />
          </div>
        </div>
      }

      redirect={redirect}
    >
      <h1>Ваш список задач</h1>
      <Filter />
      <div className="root__tasks">
        {tasks.map(task => (
          <Task
            key={task.id}
            id={task.id}
          />
        ))}
      </div>
      <Pagination />
    </PageLayout>
  );
}

export default RootPage;
