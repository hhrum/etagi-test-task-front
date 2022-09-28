import React, {useState} from 'react';
import {MdArrowBack} from 'react-icons/md';

import PageLayout from '../../components/Layout';
import Header from '../../components/Header';
import Ripple from '../../components/Ripple';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';

import Button from '../../components/Button';
import useAppDispatch from '../../hooks/useAppDispatch';
import {createTask} from '../../store/reducers/TasksReducer';

import './CreateTaskPage.scss';

function CreateTaskPage() {
  
  const dispatch = useAppDispatch();

  const [redirect, setRedirect] = useState<string|null>(null);
  const [title, setTitle] = useState<string>('');
  const [startDate, setStartDate] = useState<string>('');
  const [finishDate, setFinishDate] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  
  const submitHandler = () => {
    
    if (
      !title
      || !startDate
      || !finishDate
      || !description
    ) {
      alert('Вы не заполнели все поля!');
      return;
    }

    dispatch(createTask({
      title,
      startDate: new Date(startDate),
      finishDate: new Date(finishDate),
      description
    }));

    setTimeout(() => setRedirect('/'),500);
  };

  return (
    <PageLayout
      className="create-task-page"
      contentClassName="create-task-page__content"
      header={
        <Header className="create-task-page-header">
          <div
            className="create-task-page-header__back"
            onClick={() => setTimeout(() => setRedirect('/'),500)}
          >
            <MdArrowBack />
            
            <Ripple />
          </div>
          <h2>Создание задачи</h2>
        </Header>
      }
      redirect={redirect}
    >

      <div className="create-task-page__form">
        <form className="create-task-form">
          <div className="create-task-form__field">
            <Input
              label="Заголовок"
              value={title}
              onChange={setTitle}
            />
          </div>
          <div className="create-task-form__field">
            <Input
              label="Дата начала"
              type="date"

              max={finishDate}

              value={startDate}
              onChange={setStartDate}
            />
          </div>
          <div className="create-task-form__field">
            <Input
              label="Дата окончания"
              type="date"

              min={startDate}

              value={finishDate}
              onChange={setFinishDate}
            />
          </div>
          <div className="create-task-form__field">
            <Textarea
              label="Описание"
              value={description}
              onChange={setDescription}
            />
          </div>
          
          <Button content="Создать" onClick={submitHandler} />
        </form>
      </div>

    </PageLayout>
  );
}

export default CreateTaskPage;