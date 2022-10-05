import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  RouterProvider
} from 'react-router-dom';
import {Provider} from 'react-redux';

import store from './store/store';
import router from './router/router';

import './index.scss';

const calculateVh = () => {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
};

calculateVh();
window.addEventListener('resize', calculateVh);
window.removeEventListener('resize', calculateVh);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);