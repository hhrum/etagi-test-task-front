import React from 'react';
import {createHashRouter} from 'react-router-dom';
import RootPage from '../pages/RootPage';
import TaskPage from '../pages/TaskPage';

const router = createHashRouter([
  {
    path: '/',
    element: <RootPage />,
  },
  {
    path: '/task/:id',
    element: <TaskPage />,
  }
]);

export default router;