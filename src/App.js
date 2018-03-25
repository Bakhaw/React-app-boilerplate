import React, { Component } from "react";

import avocat from './avocat.gif';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div>
        <h3>React here!</h3>
        <img src={avocat} alt="el avocado"/>
      </div>
    );
  }
}

export default App;