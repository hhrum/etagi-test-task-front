import React, {useEffect, useState} from 'react';
import {MdAdd} from 'react-icons/md';

import Filter from '../../components/Filter';
import Pagination from '../../components/Pagination';
import PageLayout from '../../components/Layout';
import Ripple from '../../components/Ripple';
import OpenTaskHint from '../../components/Hint/OpenTaskHint';
import TaskList from '../../components/TaskList';
import NoTasks from '../../components/NoTasks';

import useAppSelector, {getCurrentPage, getTotalPages} from '../../hooks/useAppSelector';
import useAppDispatch from '../../hooks/useAppDispatch';
import {initTasksAction} from '../../store/reducers/tasks/TasksReducer';

import './RootPage.scss';

function RootPage() {
  const [redirect, setRedirect] = useState<string|null>(null);

  const dispatch = useAppDispatch();
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

      <OpenTaskHint />
      
      {
        totalPages
          ? (<TaskList />)
          : (<NoTasks />)
      }
      <Pagination />
    </PageLayout>
  );
}

export default RootPage;
