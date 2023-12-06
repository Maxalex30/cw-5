import React, { Component } from 'react';
import './App.css';
import HelloWorld from './HelloWorld';
import Counter from './Counter'; // Import the Counter component

class App extends Component {
  render() {
    return (
      <div className="App">
        <HelloWorld name="[Abe Abraham]" />
        <Counter />
      </div>
    );
  }
}

export default App;
