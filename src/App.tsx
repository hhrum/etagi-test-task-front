import React from 'react';

import Task from './components/Task';

import './App.scss';
import Filter, {FilterBy, FilterValue} from './components/Filter';
import Pagination from './components/Pagination';

function App() {
  return (
    //
    <div className="App">
      <h1>Ваш список задач</h1>
      <Filter filterValue={FilterValue.None} filterBy={FilterBy.None} />
      <Task
        id={1}
        title="Выполнить действие"
        state={false}
        startDate={new Date()}
        finishDate={new Date()}
        description="Какое-то описание"
      />
      <Task
        id={2}
        title="Выполнить действие"
        state={true}
        startDate={new Date()}
        finishDate={new Date()}
        description="Какое-то описание"
      />
      <Pagination currentPage={1} />
    </div>
  );
}

export default App;
