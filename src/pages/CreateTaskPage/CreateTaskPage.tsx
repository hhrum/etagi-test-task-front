import React, {useState} from 'react';

import PageLayout from '../../components/Layout';
import Header from '../../components/Header';
import TaskForm, {ITaskFormData} from '../../components/TaskForm';
import Button from '../../components/Button';
import HeaderBackLink from '../../components/Links/HeaderBackLink';

import useAppDispatch from '../../hooks/useAppDispatch';
import {createTask} from '../../store/reducers/tasks/TasksReducer';

import './CreateTaskPage.scss';

function CreateTaskPage() {
  
  const dispatch = useAppDispatch();

  const [redirect, setRedirect] = useState<string|null>(null);

  const [taskFormData, setTaskFormData] = useState<ITaskFormData>({
    title: '',
    startDate: '',
    finishDate: '',
    description: '',
  });
  
  const submitHandler = () => {
    if (
      !taskFormData.title
      || !taskFormData.startDate
      || !taskFormData.finishDate
      || !taskFormData.description
    ) {
      alert('Вы не заполнели все поля!');
      return;
    }

    dispatch(createTask({
      title: taskFormData.title,
      startDate: new Date(taskFormData.startDate),
      finishDate: new Date(taskFormData.finishDate),
      description: taskFormData.description
    }));

    setTimeout(() => setRedirect('/'),500);
  };

  return (
    <PageLayout
      className="create-task-page"
      contentClassName="create-task-page__content"
      header={
        <Header className="create-task-page-header">
          <HeaderBackLink to="/" />
          <h2>Создание задачи</h2>
        </Header>
      }
      redirect={redirect}
    >

      <TaskForm taskFormData={taskFormData} onChange={setTaskFormData} />
      <Button content="Создать" onClick={submitHandler} />

    </PageLayout>
  );
}

export default CreateTaskPage;