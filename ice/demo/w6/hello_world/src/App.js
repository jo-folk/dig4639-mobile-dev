import React from 'react';
import logo from './logo.svg';
import './App.css';


class NameBadge extends React.Component{
  constructor(props){
    super(props);
    }
  render(){
    return <p>My name is {this.props.name}</p>
  }
}


class App extends React.Component{
  constructor (props) {
    super(props);
  }
  render(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <NameBadge name="Joanna"/>
        <p>
          Hello World!!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
  } 
}

export default App;
