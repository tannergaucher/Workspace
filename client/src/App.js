import React, { Component } from 'react';
import './App.css';
import AddItemInput from './components/AddItemInput';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddItemInput />
      </div>
    );
  }
}

export default App;
