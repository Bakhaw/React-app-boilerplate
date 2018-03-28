import React, { Component } from "react";
import avocat from './avocat.gif';

import './App.scss';

class App extends Component {
  render() {
    return (
      <div>
        <p>React here!</p>
        <img src={avocat}/>
      </div>
    );
  }
}

export default App;