import React, { Component } from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Routing from './routing/Router';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Routing />
      </MuiThemeProvider>
    );
  }
}

export default App;