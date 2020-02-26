import React from 'react';
import './App.css';
import todoList from './todoList.json';


function ToDoItem(props){
  return <p className="card">{props.content}</p>
}


class App extends React.Component {
  
  constructor (props){
    super(props);
    this.state ={
      todoList : todoList,
            showOnlyCOmpletedTasks: false
    }
  }

  addTask(){
    let newtask = 
    {"content": "task 3", "priority": 3, "completed": false}
    let currentList = this.state.todoList
    currentList.push(newtask)
    this.setState({todoList: currentList})
  }

  render() {
    return (
      <>
      <div className="inputTask">
        <input type="button" value="Add Task"onClick={()=> this.addTask()}/>
        <input type="checkbox" ref = "completedfilter"
        onchange={(e)=> this.setsate({showOnlyUncompletedTasks: e.target.checked})}
        id = "completedFilter" name="completedFilter" value="completed"/>
      <label htmlFor="completedFilter">Show only uncompleted tasks</label>
      </div>
      {(this.state.completedFilter ?
      this.state.todoList.filter((v)=> v.completed)
      :
      this.state.todoList)
      .map((v, i) => <TodoItem key ={i} priority = {v.priority}
      conent = {v.content} completed={v.completed}/>)}
      </>
    );
  }
}


export default App;
