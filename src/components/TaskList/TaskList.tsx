import React from 'react';

import Task from '../Task';

import useAppSelector, {getTasks} from '../../hooks/useAppSelector';

import './TaskList.scss';

function TaskList() {
  
  const tasks = useAppSelector(getTasks);

  return (
    <div className="task-list">
      {tasks.map(task => (
        <div className="task-list__item"
          key={task.id}
        >
          <Task
            id={task.id}
          />
        </div>
      ))}
    </div>
  );
}

export default TaskList;