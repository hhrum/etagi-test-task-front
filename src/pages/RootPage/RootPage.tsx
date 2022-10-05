import React, {useEffect, useState} from 'react';
import {MdAdd} from 'react-icons/md';

import Filter from '../../components/Filter';
import Task from '../../components/Task';
import Pagination from '../../components/Pagination';
import PageLayout from '../../components/Layout';
import useAppSelector, {getCurrentPage, getTasks, getTotalPages} from '../../hooks/useAppSelector';
import Ripple from '../../components/Ripple';

import useAppDispatch from '../../hooks/useAppDispatch';
import {initTasksAction} from '../../store/reducers/tasks/TasksReducer';

import './RootPage.scss';

function RootPage() {
  const [redirect, setRedirect] = useState<string|null>(null);

  const dispatch = useAppDispatch();
  const tasks = useAppSelector(getTasks);
  const currentPage = useAppSelector(getCurrentPage);
  const totalPages = useAppSelector(getTotalPages);

  useEffect(() => {
    dispatch(initTasksAction());
  }, []);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);
  
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

      {
        totalPages
          ? (
            <div className="root__tasks">
              {tasks.map(task => (
                <Task
                  key={task.id}
                  id={task.id}
                />
              ))}
            </div>
          )
          : (
            <div className="root__no-tasks">
              <h3>Пока что никаких задач нет!</h3>
              <br/>
              Вы можете добавить их, нажав на кнопочку в <i>правом нижнем углу экрана</i>
            </div>
          )
      }
      <Pagination />
    </PageLayout>
  );
}

export default RootPage;
