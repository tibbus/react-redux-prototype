import React, { Component } from 'react';

import { Chars } from './chars/Chars.component';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Chars />
      </div>
    );
  }
}

export default App;
