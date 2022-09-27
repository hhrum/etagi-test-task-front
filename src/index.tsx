import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createHashRouter,
  RouterProvider
} from 'react-router-dom';

import RootPage from './pages/RootPage';
import TaskPage, {TaskPageLoader} from './pages/TaskPage';

import './index.scss';

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

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);