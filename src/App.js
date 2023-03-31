
import './App.css';
import InputBox from './Components/todo/InputBox';
import OutputBox from './Components/todo/OutputBox';
import React, { useState} from 'react';

function App() {
  let [items, setItems] = useState([]);
  const acceptNewTask = (task) => {
    let newTaskArr = [...items, task];
    // state var 
    setItems(newTaskArr);
  }
  return (
    <div>
      <h1>Todo App</h1>
      <InputBox acceptNewTask={acceptNewTask}></InputBox>
      <OutputBox
        list={items}
      ></OutputBox>
    </div>
  );

}

export default App;
