import React, {useEffect, useState} from 'react';
import {Navigate, useMatch} from 'react-router-dom';

import PageLayout from '../../components/Layout';
import Header from '../../components/Header';
import Button from '../../components/Button';
import TaskForm, {ITaskFormData} from '../../components/TaskForm';
import HeaderBackLink from '../../components/Links/HeaderBackLink';

import {editTaskAction} from '../../store/reducers/tasks/TasksReducer';
import useAppSelector, {getTaskById} from '../../hooks/useAppSelector';
import useAppDispatch from '../../hooks/useAppDispatch';
import date from '../../utils/date';

import './EditTaskPage.scss';

function EditTaskPage() {
  const customMatch = useMatch('/task/:id/edit');

  if (!customMatch?.params.id) {
    return <Navigate to="/" />;
  }

  const task = useAppSelector(getTaskById(+customMatch?.params.id));

  if (!task) {
    return <Navigate to={'/task/' + customMatch.params.id} />;
  }

  const dispatch = useAppDispatch();

  const [redirect, setRedirect] = useState<string|null>(null);

  const [taskFormData, setTaskFormData] = useState<ITaskFormData>({
    title: '',
    startDate: '',
    finishDate: '',
    description: '',
  });
  
  useEffect(() => {
    setTaskFormData({
      title: task.title,
      startDate: date(task.startDate).format('YYYY-MM-DD'),
      finishDate: date(task.finishDate).format('YYYY-MM-DD'),
      description: task.description,
    });
  }, [task, setTaskFormData]);
  
  const saveHandler = () => {
    if (
      !taskFormData.title
      || !taskFormData.startDate
      || !taskFormData.finishDate
      || !taskFormData.description
    ) {
      alert('Вы не заполнели все поля!');
      return;
    }

    if (!customMatch?.params.id) {
      return;
    }

    dispatch(editTaskAction({
      ...task,
      title: taskFormData.title,
      startDate: new Date(taskFormData.startDate),
      finishDate: new Date(taskFormData.finishDate),
      description: taskFormData.description
    }));

    setTimeout(() => setRedirect('/task/' + customMatch.params.id),500);
  };

  return (
    <PageLayout
      header={
        <Header>
          <HeaderBackLink to={'/task/' + customMatch.params.id} />
          <h2>Изменение задачи</h2>
        </Header>
      }
      contentClassName="edit-task-page__content"
      redirect={redirect}
    >
      <TaskForm taskFormData={taskFormData} onChange={setTaskFormData} />
      <Button 
        content="Сохранить"
        onClick={saveHandler}
      />
    </PageLayout>
  );
}

export default EditTaskPage;