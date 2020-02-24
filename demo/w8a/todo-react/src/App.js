import React from 'react';
import logo from './logo.svg';
import './App.css';

const toDoList1 = [
  {completed: true, priority: 1, content : "demo 1"},
  {completed: true, priority: 2, content : "demo 2"},
  {completed: false, priority: 3, content : "demo 3"}
]; 

function ToDoItem(props){
  return <p>{props.content}</p>
}


function App() {
  let array = toDoList1.map((value) =>
  <ToDoItem content ={value.content} 
            priotity = {value.priority}
            completed = {value.completed} 
    />
  )
  return (
    array
  );
}

export default App;
