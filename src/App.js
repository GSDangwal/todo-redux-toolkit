import React from 'react';
import './App.css';
import ShowTodo from './component/ShowTodo';
import Textarea from './component/Textarea';

function App() {

  return (
    <div className="App">
      <h1 className='d-flex justify-content-center' style={{ margin: 20, color: "green" }}>Todo-App</h1>
      <Textarea />
      <ShowTodo />
    </div>
  );
}

export default App;
