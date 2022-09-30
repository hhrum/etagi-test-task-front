import React from 'react';
import {createHashRouter} from 'react-router-dom';

import RootPage from '../pages/RootPage';
import TaskPage from '../pages/TaskPage';
import CreateTaskPage from '../pages/CreateTaskPage';
import EditTaskPage from '../pages/EditTaskPage';

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
  },
  {
    path: '/task/:id/edit',
    element: <EditTaskPage />,
  }
]);

export default router;