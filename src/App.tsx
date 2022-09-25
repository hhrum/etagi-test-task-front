import React from 'react';

import Task from './components/Task';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Task
        id={1}
        title="Выполнить действие"
        state={false}
        start_date={new Date()}
        finish_date={new Date()}
        description="Какое-то описание"
      />
      <Task
        id={2}
        title="Выполнить действие"
        state={true}
        start_date={new Date()}
        finish_date={new Date()}
        description="Какое-то описание"
      />
    </div>
  );
}

export default App;
