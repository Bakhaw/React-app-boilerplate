import React, { Component } from 'react';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Appart from '../components/Appart';
import Piece from '../components/Piece';

class Routing extends Component {
  render() { 
    return (
      <Router>
        
        <div>
          <Link to='/'>
            <p>Accueil</p>
          </Link>

          <Switch>

            <Route path='/appart/:piece' component={Piece}/>
            <Route path='/' component={Appart}/>

          </Switch>
        </div>

      </Router>
    );
  }
}
 
export default Routing;