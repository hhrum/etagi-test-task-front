import React from 'react';
import {createHashRouter} from 'react-router-dom';
import RootPage from '../pages/RootPage';
import TaskPage from '../pages/TaskPage';
import CreateTaskPage from '../pages/CreateTaskPage';

const router = createHashRouter([
  {
    path: '/',
    element: <RootPage />,
  },
  {
    path: '/task/:id',
    element: <TaskPage />,
  },
  {
    path: '/task/create',
    element: <CreateTaskPage />,
  }
]);

export default router;