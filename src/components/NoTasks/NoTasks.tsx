import React from 'react';

import './NoTasks.scss';

function NoTasks() {
  return (
    <div className="no-tasks">
      <h3>Пока что никаких задач нет!</h3>
      <p>Вы можете добавить их, нажав на кнопочку в <i>правом нижнем углу экрана</i></p>
    </div>
  );
}

export default NoTasks;