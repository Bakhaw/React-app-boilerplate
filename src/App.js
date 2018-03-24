import React, { Component } from "react";
import './App.scss';
import image from './image.jpeg';

class App extends Component {
  render() {
    return (
      <div>
        <h3>React here!</h3>
        <img src={image} alt=""/>
      </div>
    );
  }
}

export default App;