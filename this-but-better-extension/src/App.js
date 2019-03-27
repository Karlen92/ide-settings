import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  componentDidMount(){
    document.addEventListener('click', () => {
      console.log("Helllo!!!!!!!!!");
    })
  }

  render() {
    return (
      <div className="App">
        This is better
      </div>
    );
  }
}

export default App;
