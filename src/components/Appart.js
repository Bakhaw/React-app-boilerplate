import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

class Appart extends Component {
  render() {
    return (
      <div>
        <h1>Fais ton appart</h1>
        <Paper>
          <Menu>

            <Link to='/appart/entree'>
              <MenuItem primaryText="Entrée" leftIcon={<i className="fas fa-home"></i>}/>
            </Link>
            <Link to='/appart/bathroom'>
              <MenuItem primaryText="Bathroom" leftIcon={<i className="fas fa-bath"></i>} />
            </Link>
            <Link to='/appart/cuisine'>
              <MenuItem primaryText="Cuisine" leftIcon={<i className="fas fa-utensils"></i>} />
            </Link>
            <Link to='/appart/salon'>
              <MenuItem primaryText="Salon" leftIcon={<i className="fas fa-couch"></i>} />
            </Link>
            <Link to='/appart/chambre'>
              <MenuItem primaryText="Chambre" leftIcon={<i className="fas fa-bed"></i>} />
            </Link>

          </Menu>
        </Paper>
      </div>
    );
  }
}

export default Appart;